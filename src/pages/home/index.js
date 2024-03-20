import React from "react";
import { useAuth } from "../../context/authContext";
import HomePageView from "../../views/HomePageView";

function Home() {
  const { userLoggedIn } = useAuth();

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>
        {userLoggedIn ? (
          "You are logged in! You can now access your dashboard.!"
        ) : (
          <HomePageView />
        )}
      </p>
    </div>
  );
}

export default Home;
