import React from "react";
import { useAuth } from "../../context/authContext";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

function Home() {
  const { userLoggedIn } = useAuth();

  return (
    <>
      {userLoggedIn && <Navigate to={"/dashboard"} replace={true} />}
      <section className="prose">
        <h1>Chris's Kanban demo app</h1>
        <p>
          This is a simple Kanban app that allows you to manage your tasks and
          projects efficiently. Create boards, add lists, and track your
          progress.
        </p>
        <h2>Get Started</h2>
        <p>
          Sign up today to start organizing your tasks and projects with our
          Kanban app. Get started by signing up for free!
        </p>
      </section>
      <button className="my-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Link to="/signup">Get Started</Link>
      </button>
    </>
  );
}

export default Home;
