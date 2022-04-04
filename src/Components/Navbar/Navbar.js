import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <div className="text-2xl font-bold font-serif flex items-center justify-center py-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "mx-5 text-blue-700 underline underline-offset-4"
              : "mx-5 text-cyan-500"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/reviews"
          className={({ isActive }) =>
            isActive
              ? "mx-5 text-blue-700 underline underline-offset-4"
              : "mx-5 text-cyan-500"
          }
        >
          Reviews
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "mx-5 text-blue-700 underline underline-offset-4"
              : "mx-5 text-cyan-500"
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive
              ? "mx-5 text-blue-700 underline underline-offset-4"
              : "mx-5 text-cyan-500"
          }
        >
          Blogs
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "mx-5 text-blue-700 underline underline-offset-4"
              : "mx-5 text-cyan-500"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "ml-5 text-blue-700 underline underline-offset-4 "
              : "ml-5 text-cyan-500"
          }
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
