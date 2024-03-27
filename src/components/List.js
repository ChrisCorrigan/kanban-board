import React, { useEffect } from "react";
import { getCards } from "../utils/firebaseUtils";
import Card from "./Card";

const List = ({ list }) => {
  const [cards, setCards] = React.useState([]);

  useEffect(() => {
    getCards(list.id)
      .then((cardsData) => {
        setCards(cardsData);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [list.id]);

  return (
    <div class="list">
      <h3>{list.title}</h3>
      {cards.map((card) => (
        <div class="card">
          <h4 key={card.id}>{card.title}</h4>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
