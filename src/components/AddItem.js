
import React, { useState } from "react";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const AddItem = ({ addItem }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { id: Date.now(), title, body }; // Tymczasowe ID
    addItem(newItem); // Aktualizacja lokalna
    axios
      .post(API_URL, newItem)
      .then((response) => {
        console.log("Item added to server:", response.data);
      })
      .catch((error) => console.error("Error adding item:", error));
    setTitle("");
    setBody("");
  };

  return (
    <div>
      <h1>Add Item</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Body:</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default AddItem;
