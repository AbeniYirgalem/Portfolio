import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo & Name */}
        <div className="flex items-center space-x-3">
          <Link
            to="/"
            className="w-8 h-8 bg-black rounded-full flex items-center justify-center overflow-hidden"
          >
            <img
              src="/image/logo.jpg"
              alt="Logo"
              className="w-full h-full object-cover rounded-full"
            />
          </Link>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-4 ml-4 text-gray-200 text-base items-center">
          <li>
            <Link
              to="/"
              className="text-white hover:text-blue-400 px-4 py-1 rounded-md font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="flex items-center hover:text-blue-400">
              <span className="material-icons mr-1">person</span>About
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className="flex items-center hover:text-blue-400"
            >
              <span className="material-icons mr-1">bolt</span>Skills
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="flex items-center hover:text-blue-400"
            >
              <span className="material-icons mr-1">folder</span>Projects
            </Link>
          </li>
          <li>
            <Link
              to="/certificate"
              className="flex items-center hover:text-blue-400"
            >
              <span className="material-icons mr-1">verified</span>Certificate
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="flex items-center hover:text-blue-400"
            >
              <span className="material-icons mr-1">mail</span>Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
