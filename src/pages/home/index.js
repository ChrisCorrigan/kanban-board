import React from "react";
import { useAuth } from "../../context/authContext";

function Home() {
  const { userLoggedIn } = useAuth();

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>
        {userLoggedIn
          ? "You are logged in! You can now access your dashboard."
          : "You are not logged in! Please log in to access your dashboard."}
      </p>
    </div>
  );
}

export default Home;
