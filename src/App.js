import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ItemList from "./components/ItemList";
import AddItem from "./components/AddItem";
import ItemDetail from "./components/ItemDetail";
import NotFound from "./components/NotFound";

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems((prevItems) => [newItem, ...prevItems]);
  };

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/add">Add Item</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ItemList items={items} setItems={setItems} />} />
        <Route path="/add" element={<AddItem addItem={addItem} />} />
        <Route path="/item/:id" element={<ItemDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
