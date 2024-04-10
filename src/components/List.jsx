import React, { useEffect, useState } from "react";
import { getCards, addCardToList, updateCard, deleteCard } from "../utils/firebaseUtils";
import Card from "./Card";

const List = ({ list }) => {
  const [cards, setCards] = useState([]);
  const [editingCardId, setEditingCardId] = useState(null);
  const [editingCardTitle, setEditingCardTitle] = useState("");

  useEffect(() => {
    getCards(list.id)
      .then((cardsData) => {
        setCards(cardsData);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [list.id]);

  const addCard = async () => {
    const newCard = { title: "new card" };
    try {
      const cardRef = await addCardToList(list.id, newCard);
      setCards((prevCards) => [...prevCards, { id: cardRef.id, ...newCard }]);
    } catch (error) {
      console.error("Error adding card: ", error);
    }
  };

  const saveCardTitle = async (id) => {
    try {
      await updateCard(id, { title: editingCardTitle });
      setCards((prevCards) =>
        prevCards.map((card) =>
          card.id === id ? { ...card, title: editingCardTitle } : card,
        ),
      );
      setEditingCardId(null);
      setEditingCardTitle("");
    } catch (error) {
      console.error("Error updating card: ", error);
    }
  };

  const deleteCardHandler = async (id) => {
    try {
      await deleteCard(id);
      setCards((prevCards) => prevCards.filter((card) => card.id !== id));
    } catch (error) {
      console.error("Error deleting card: ", error);
    }
  }

  return (
    <div className="relative list bg-white shadow-md rounded px-4 py-6 mb-4 mr-4">
      <h3 className="font-bold text-xl mb-4">{list.title}</h3>
      {cards.map((card) => (
        <div className="card bg-gray-100 rounded px-3 py-2 mb-2 flex items-center" key={card.id}>
          {editingCardId === card.id ? (
            <input
              value={editingCardTitle}
              onChange={(e) => setEditingCardTitle(e.target.value)}
              onBlur={() => saveCardTitle(card.id)}
              onKeyDown={(e) => e.key === "Enter" && saveCardTitle(card.id)}
              onFocus={(e) => e.target.select()}
              autoFocus
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline flex-grow"
            />
          ) : (
            <h4
              onClick={() => {
                setEditingCardId(card.id);
                setEditingCardTitle(card.title);
              }}
              className="cursor-pointer flex-grow"
            >
              {card.title}
            </h4>
          )}
          <button onClick={() => deleteCardHandler(card.id)} className="ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4 text-gray-500 hover:text-gray-700">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      ))}
      <button onClick={addCard} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded focus:outline-none focus:shadow-outline">
        Add Card
      </button>
    </div>
  );
};

export default List;
