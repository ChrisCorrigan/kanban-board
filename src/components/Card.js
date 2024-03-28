import React from "react";

const Card = ({ card }) => {
  return (
    <div className="card">
      <h4 key={card.id}>{card.title}</h4>
      <p>{card.description}</p>
    </div>
  );
};

export default Card;
