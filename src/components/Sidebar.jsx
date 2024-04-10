import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="bg-gray-800 text-white p-4 flex flex-col min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Menu</h2>
      <ul className="flex-grow">
        <li className="mb-2">
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className="mb-2">
          <Link to="/createboard">Create Board</Link>
        </li>
        <li className="mb-2">
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
