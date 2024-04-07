import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBoard, getLists } from "../../utils/firebaseUtils";
import List from "../../components/List";

const Board = () => {
  const { id } = useParams();
  const [board, setBoard] = useState(null);
  const [lists, setLists] = useState([]);

  useEffect(() => {
    getBoard(id)
      .then((boardData) => {
        setBoard(boardData);
      })
      .catch((error) => {
        console.log(error.message);
      });

    getLists(id)
      .then((listsData) => {
        setLists(listsData);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [id]);

  return (
    <div>
      <h2>{board?.title}</h2>
      <p>{board?.description}</p>
      {lists.map((list) => (
        <List key={list.id} list={list} />
      ))}
    </div>
  );
};

export default Board;
