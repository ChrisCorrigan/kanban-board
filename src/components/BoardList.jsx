import React from "react";
import { Link } from "react-router-dom";

const BoardList = ({ boards }) => {
  return (
    <div>
      <ul>
        {boards.map((board) => {
          return (
            <li key={board.id}>
              <Link to={`/board/${board.id}`} className="hover:text-blue-500 transition duration-200">
                &#9656; {board.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BoardList;