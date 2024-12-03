import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const ItemList = ({ items, setItems }) => {
  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        const fetchedItems = response.data.slice(0, 10);
        setItems((prevItems) => {
          const existingIds = prevItems.map(item => item.id);
          const newItems = fetchedItems.filter(item => !existingIds.includes(item.id));
          return [...prevItems, ...newItems];
        });
      })
      .catch((error) => console.error("Error fetching items:", error));
  }, [setItems]);

  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link to={`/item/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;