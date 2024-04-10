import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Sidebar from "../../components/Sidebar";
import { getBoard, getLists } from "../../utils/firebaseUtils";
import List from "../../components/List";

const Board = () => {
  const { id } = useParams();
  const [board, setBoard] = useState(null);
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    getBoard(id)
      .then((boardData) => {
        if (!isCancelled) {
          setBoard(boardData);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });

    getLists(id)
      .then((listsData) => {
        if (!isCancelled) {
          // Sort the lists by their order field before setting the state
          const sortedLists = listsData.sort((a, b) => a.order - b.order);
          setLists(sortedLists);
          setLoading(false); // set loading to false after the lists data has been loaded
        }
      })
      .catch((error) => {
        console.log(error.message);
      });

    return () => {
      isCancelled = true;
    };
  }, [id]); // Removed isDragging from the dependency array

  const handleOnDragEnd = (result) => {
    setIsDragging(false);
    if (!result.destination) return; // dropped outside the list

    const items = Array.from(lists);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setLists(items);
  };

  if (loading) {
    return <div>Loading...</div>; // render a loading spinner while the data is being loaded
  }

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
            <DragDropContext 
              onDragStart={() => setIsDragging(true)} 
              onDragEnd={(result) => {
                setIsDragging(false);
                handleOnDragEnd(result);
              }}
            >
              <Droppable droppableId="lists">
                {(provided) => (
                  <div className="flex flex-wrap gap-4 px-4" {...provided.droppableProps} ref={provided.innerRef}>
                    {lists.map((list, index) => {
                      console.log(`List id: ${list.id}, Draggable id: ${list.id.toString()}`);
                      return (
                        <Draggable key={list.id} draggableId={list.id.toString()} index={index}>
                          {(provided) => (
                            <div 
                              key={list.id} 
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <List list={list} />
                              {provided.placeholder}
                            </div>
                          )}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;