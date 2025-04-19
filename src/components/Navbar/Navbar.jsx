import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router";


  const navBarLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Categories", path: "/categories" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const rightNav = [
    { name: "Login", path: "/login" },
    { name: "Register", path: "/register" },
  ];


const Navbar = () => {

    const [open, setOpen] = useState(false)

  return (
    <div className="flex items-center px-4 gap-3 lg:gap-10 justify-between py-4 shadow-sm lg:px-32">
      {/* nav left side */}
      <div className="flex items-center justify-between px-4 py-3  bg-white">
        <div className="flex items-center gap-4" onClick={() => setOpen(true)}>
          <GiHamburgerMenu size={24} className="lg:hidden cursor-pointer" />
          <h1 className="font-bold text-xl lg:text-2xl">Digital Hive</h1>
        </div>
      </div>
      {/* Sidebar Overlay */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-white transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b shadow-sm">
          <h1 className="font-bold text-xl">Digital Hive</h1>
          <IoClose
            size={28}
            onClick={() => setOpen(false)}
            className="cursor-pointer"
          />
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col gap-4 p-6">
          {navBarLinks.map((link, i) => (
            <NavLink
              key={i}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 font-semibold text-lg"
                  : "text-gray-700 font-medium text-lg"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="flex flex-1 items-center bg-white border border-gray-300 rounded-full shadow-sm px-4 py-1 lg:py-2 focus-within:ring-2 focus-within:ring-green-400">
        <svg
          className="h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search "
          className="ml-3 w-full bg-transparent focus:outline-none text-gray-800 placeholder:text-gray-400"
        />
      </div>
      {/* nav center side */}
      <div className="hidden lg:flex items-center gap-10">
        {navBarLinks.map((navLinks, index) => (
          <NavLink
            key={index}
            to={navLinks.path}
            className={({ isActive }) =>
              isActive
                ? "text-red-500 font-semibold"
                : "text-gray-600 font-semibold"
            }
          >
            {navLinks.name}
          </NavLink>
        ))}
      </div>
      <div className="flex items-center gap-5">
        <div className="hidden lg:flex items-center ">
          {rightNav.map((links, i) => (
            <NavLink
              key={i}
              to={links.path}
              className={"btn btn-ghost hover:bg-red-300"}
            >
              {links.name}
            </NavLink>
          ))}
        </div>
        <div>
          <NavLink to={"/cart"}>
            <FaShoppingCart size={20}></FaShoppingCart>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
