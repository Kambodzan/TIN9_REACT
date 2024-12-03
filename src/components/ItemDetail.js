import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const ItemDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/${id}`)
      .then((response) => setItem(response.data))
      .catch((error) => console.error("Error fetching item detail:", error));
  }, [id]);

  return (
    <div>
      {item ? (
        <>
          <h1>{item.title}</h1>
          <p>{item.body}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ItemDetail;