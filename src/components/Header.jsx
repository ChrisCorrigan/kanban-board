import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { logOut } from "../utils/firebaseUtils";

function Header() {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  async function handleLogout() {
    await logOut();
    navigate("/");
  }

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container">
        <nav className="flex">
          {userLoggedIn ? (
            <>
              <Link to="/" className="p-4 hover:bg-gray-700 transition-colors duration-200">
                Home
              </Link>
              <button
                onClick={handleLogout}
                className="p-4 hover:bg-gray-700 transition-colors duration-200"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="py-2 px-4 hover:bg-gray-700 transition-colors duration-200">
                Login
              </Link>
              <Link to="/signup" className="py-2 px-4 hover:bg-gray-700 transition-colors duration-200">
                Register for a new account
              </Link>
            </>
          )}
        </nav>
      </div>
    </nav>
  );
}

export default Header;
