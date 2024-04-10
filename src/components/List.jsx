import React, { useEffect, useState } from "react";
import { getCards, addCardToList, updateCard } from "../utils/firebaseUtils";
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
    const newCard = { title: "Enter a title for this card..." };
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

  return (
    <div className="list bg-white shadow-md rounded px-4 py-6 mb-4 mr-4">
      <h3 className="font-bold text-xl mb-4">{list.title}</h3>
      {cards.map((card) => (
        <div className="card bg-gray-100 rounded px-3 py-2 mb-2" key={card.id}>
          {editingCardId === card.id ? (
            <input
              value={editingCardTitle}
              onChange={(e) => setEditingCardTitle(e.target.value)}
              onBlur={() => saveCardTitle(card.id)}
              onKeyDown={(e) => e.key === "Enter" && saveCardTitle(card.id)}
              autoFocus
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          ) : (
            <h4
              onClick={() => {
                setEditingCardId(card.id);
                setEditingCardTitle(card.title);
              }}
              className="cursor-pointer"
            >
              {card.title}
            </h4>
          )}
        </div>
      ))}
      <button onClick={addCard} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Add Card
      </button>
    </div>
  );
};

export default List;
