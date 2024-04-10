import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-800 px-6 py-8 text-white text-right">
      <div className="text-xs">
        <p>&copy; 2024 Chris's Kanban App. All your rights are belong to us.</p>
      </div>
    </footer>
  );
}

export default Footer;
