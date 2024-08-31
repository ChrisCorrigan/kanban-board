import React, { useRef } from 'react'
import { createBoard } from '../../utils/firebaseUtils'
import { useNavigate } from 'react-router-dom'

const CreateBoard = () => {
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await createBoard({
        title: titleRef.current.value,
        description: descriptionRef.current.value,
      })
      titleRef.current.value = ''
      descriptionRef.current.value = ''
      navigate('/dashboard')
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="bg-white p-6 min-h-48">
      <h2 className="text-2xl font-bold mb-5 text-center">
        Create a new board
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="title"
        >
          Title:
          <input
            id="title"
            type="text"
            ref={titleRef}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="description"
        >
          Description:
          <textarea
            id="description"
            ref={descriptionRef}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Create
        </button>
      </form>
    </div>
  )
}

export default CreateBoard
