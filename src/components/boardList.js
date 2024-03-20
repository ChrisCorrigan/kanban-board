import React, { useState, useEffect } from "react";

const BoardList = ({ boards }) => {
  return (
    <div>
      <h2>Boards</h2>
      <ul>
        {boards.map((board) => {
          return <li key={board.id}>{board.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default BoardList;
