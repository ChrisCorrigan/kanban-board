import React from "react";
import { useAuth } from "../../context/authContext";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

function Home() {
  const { userLoggedIn } = useAuth();

  return (
    <div className="flex flex-col h-screen">
      {userLoggedIn && <Navigate to={"/dashboard"} replace={true} />}
      <main>
      <section class="prose">
        <h2>Chris's Kanban demo app</h2>
        <p className="text-lg mb-4">
          This is a simple Kanban app that allows you to manage your tasks and
          projects efficiently. Create boards, add lists, and track your
          progress.
        </p>
      </section>
      <section class="prose">
        <h2>Get Started</h2>
        <p>
          Sign up today to start organizing your tasks and projects with our
          Kanban app. Get started by signing up for free!
        </p>
      </section>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Link to="/signup">Get Started</Link>
      </button>
    </main>
      <footer class="prose">
        <p>&copy; 2024 Chris's Kanban App. All your rights are belong to us.</p>
      </footer>
    </div>
  );
}

export default Home;
