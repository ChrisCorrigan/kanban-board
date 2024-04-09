import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { logOut } from "../utils/firebaseUtils";

function Header() {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container">
        <nav className="flex">
          {userLoggedIn ? (
            <>
              <Link to="/" className="p-4">
                Home
              </Link>
              <button
                onClick={() => {
                  logOut();
                  navigate("/");
                }}
                className="p-4"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="py-2 px-4">
                Login
              </Link>
              <Link to="/signup" className="py-2 px-4">
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
