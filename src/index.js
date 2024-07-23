import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ItemDetails from "./components/ItemDetail";
import ItemList from "./components/ItemList";

ReactDOM.render(
    <Router>
      <Routes>
        <Route path="/" element={<ItemDetails />} />
        <Route path="/items/:itemId" element={<ItemList />} />
      </Routes>
    </Router>,
    document.getElementById("root")
  );
