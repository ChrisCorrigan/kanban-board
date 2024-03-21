import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBoard } from "../../utils/firebaseUtils";

const Board = () => {
  const { id } = useParams();
  const [board, setBoard] = useState(null);

  useEffect(() => {
    getBoard(id)
      .then((boardData) => {
        setBoard(boardData);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [id]);

  return (
    <div>
      <h2>{board?.title}</h2>
      <p>{board?.description}</p>
    </div>
  );
};

export default Board;
