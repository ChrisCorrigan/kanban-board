import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar"; // You'll need to create this component
import BoardList from "../../components/BoardList"; // You'll need to create this component

function Dashboard() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    // Fetch the user's boards from the database and set them in state
    // This is just a placeholder, you'll need to implement the actual data fetching
    const fetchedBoards = [
      { id: "1", name: "Board 1" },
      { id: "2", name: "Board 2" },
    ];
    setBoards(fetchedBoards);
  }, []);

  const handleDeleteBoard = (boardId) => {
    // Implement logic to delete a board from the database
    // For now, just remove the board from the state
    setBoards(boards.filter((board) => board.id !== boardId));
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-grow">
        <Sidebar />
        <div className="flex-grow p-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold">Your Boards</h1>
              {/* <Link
                to="/createboard"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Create New Board
              </Link> */}
            </div>
            <BoardList boards={boards} onDeleteBoard={handleDeleteBoard} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
