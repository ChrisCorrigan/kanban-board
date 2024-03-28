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
    <div className="list">
      <h3>{list.title}</h3>
      {cards.map((card) => (
        <div className="card" key={card.id}>
          {editingCardId === card.id ? (
            <input
              value={editingCardTitle}
              onChange={(e) => setEditingCardTitle(e.target.value)}
              onBlur={() => saveCardTitle(card.id)}
              onKeyDown={(e) => e.key === "Enter" && saveCardTitle(card.id)}
              autoFocus
            />
          ) : (
            <h4
              onClick={() => {
                setEditingCardId(card.id);
                setEditingCardTitle(card.title);
              }}
            >
              {card.title}
            </h4>
          )}
        </div>
      ))}
      <button onClick={addCard}>Add Card</button>
    </div>
  );
};

export default List;
