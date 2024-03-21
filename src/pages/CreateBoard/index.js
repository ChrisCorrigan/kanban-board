import React, { useState } from "react";
import { createBoard } from "../../utils/firebaseUtils";

const CreateBoard = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await createBoard({ title });
      //   setTitle("");
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
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateBoard;
