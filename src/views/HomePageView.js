import React from "react";
import Navbar from "../components/Navbar";

function HomePageView() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <header className="bg-blue-500 text-white text-center p-12">
        <h1>Welcome to my Kanban App</h1>
      </header>
      <main>
        <section>
          <h2 className="text-4xl font-bold mb-4">About the App</h2>
          <p className="text-lg mb-4">
            This is a simple Kanban app that allows you to manage your tasks and
            projects efficiently. Create boards, add lists, and track your
            progress.
          </p>
        </section>
        <section>
          <h2>Get Started</h2>
          <p>
            Sign up today to start organizing your tasks and projects with our
            Kanban app.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Chris's Kanban App. All your rights are belong to us.</p>
      </footer>
    </div>
  );
}

export default HomePageView;
