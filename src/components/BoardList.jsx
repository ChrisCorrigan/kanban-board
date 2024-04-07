import React from "react";
import { Link } from "react-router-dom";

const BoardList = ({ boards }) => {
  return (
    <div>
      <h2>Boards</h2>
      <ul>
        {boards.map((board) => {
          return (
            <li key={board.id}>
              <Link to={`/board/${board.id}`}>{board.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BoardList;
