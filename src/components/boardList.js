import React, { useState, useEffect } from "react";
import { getBoards } from "../utils/firebaseUtils";

const BoardList = () => {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    const fetchBoards = async () => {
      const boards = await getBoards();
      setBoards(boards);
    };

    fetchBoards();
  }, []);

  return (
    <div>
      <h2>Boards</h2>
      <ul>
        {boards.map((board) => {
          <li key={board.id}>{board.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default BoardList;
