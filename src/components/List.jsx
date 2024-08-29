import React, { useEffect, useState } from 'react'
import {
  getCards,
  addCardToList,
  updateCard,
  deleteCard,
} from '../utils/firebaseUtils'
import Card from './Card'

import { DndContext } from '@dnd-kit/core'
import { SortableContext } from '@dnd-kit/sortable'
import { SortableItem } from './SortableItem'

const List = ({ list }) => {
  const [cards, setCards] = useState([])
  const [editingCardId, setEditingCardId] = useState(null)
  const [editingCardTitle, setEditingCardTitle] = useState('')

  useEffect(() => {
    getCards(list.id)
      .then((cardsData) => {
        setCards(cardsData)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }, [list.id])

  const addCard = async () => {
    const newCard = { title: 'new card' }
    try {
      const cardRef = await addCardToList(list.id, newCard)
      setCards((prevCards) => [...prevCards, { id: cardRef.id, ...newCard }])
    } catch (error) {
      console.error('Error adding card: ', error)
    }
  }

  const saveCardTitle = async (id) => {
    try {
      await updateCard(id, { title: editingCardTitle })
      setCards((prevCards) =>
        prevCards.map((card) =>
          card.id === id ? { ...card, title: editingCardTitle } : card
        )
      )
      setEditingCardId(null)
      setEditingCardTitle('')
    } catch (error) {
      console.error('Error updating card: ', error)
    }
  }

  const deleteCardHandler = async (id) => {
    try {
      await deleteCard(id)
      setCards((prevCards) => prevCards.filter((card) => card.id !== id))
    } catch (error) {
      console.error('Error deleting card: ', error)
    }
  }

  return (
    <div className="relative list bg-white shadow-md rounded px-4 py-6 mb-4 mr-4">
      <h3 className="font-bold text-xl mb-4">{list.title}</h3>
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          editingCardId={editingCardId}
          editingCardTitle={editingCardTitle}
          setEditingCardId={setEditingCardId}
          setEditingCardTitle={setEditingCardTitle}
          saveCardTitle={saveCardTitle}
          deleteCardHandler={deleteCardHandler}
        />
      ))}
      <button
        onClick={addCard}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded focus:outline-none focus:shadow-outline"
      >
        Add Card
      </button>
    </div>
  )
}

export default List
