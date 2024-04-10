import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
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
    <div className="bg-white min-h-screen">
      <div className="flex flex-col h-full">
        <div className="flex flex-grow">
          <Sidebar />
          <div className="flex-grow">
              <div className="flex justify-between items-center bg-gray-500 text-white p-4 mb-4">
                <h2 className="text-2xl font-bold">{board?.title}</h2>
                <p>{board?.description}</p>
              </div>
              <div className="flex flex-wrap gap-4">
                {lists.map((list) => (
                  <List key={list.id} list={list} />
                ))}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
