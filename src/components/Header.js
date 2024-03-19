import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Kanban App
        </Link>
        <div>
          <Link to="/signup" className="mr-4 hover:text-gray-300">
            Sign Up
          </Link>
          <Link to="/login" className="hover:text-gray-300">
            Login
          </Link>
          <Link to="/logout" className="hover:text-gray-300">
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
