import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { signOut } from "../utils/firebaseUtils";

function Header() {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <nav className="flex">
          {userLoggedIn ? (
            <>
              <Link to="/" className="p-4">
                Home
              </Link>
              <button
                onClick={() => {
                  signOut();
                  navigate("/");
                }}
                className="p-4"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="p-4">
                Login
              </Link>
              <Link to="/signup" className="p-4">
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
