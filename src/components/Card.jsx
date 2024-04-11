import React from 'react';

const Card = ({ card, editingCardId, editingCardTitle, setEditingCardId, setEditingCardTitle, saveCardTitle, deleteCardHandler }) => (
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
);

export default Card;