import React, { useState } from "react";
import { createBoard } from "../../utils/firebaseUtils";
import { useNavigate } from "react-router-dom";

const CreateBoard = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await createBoard({ title, description });
      setTitle("");
      setDescription("");
      navigate("/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h2>Create a new board</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateBoard;
