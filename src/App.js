import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./components/AddProduct/AddProduct";
import Products from "./components/Products/Product";
import Header from "./components/Header/Header";
import axios from "axios";
import EditProduct from "./components/EditProduct/EditProduct";
import AboutUs from "./components/AboutUs/AboutUs";

const App = () => {
  const API = "  http://localhost:8000/products";

  const [cards, setCards] = useState([]);

  const [card, setCard] = useState(null);

  function addCard(newCard) {
    axios.post(API, newCard);
  }

  async function getCards() {
    let cards = await axios(API);

    setCards(cards.data);
  }

  async function deleteCard(id) {
    await axios.delete(`${API}/${id}`);
    getCards();
  }

  async function getCard(id) {
    let card = await axios(`${API}/${id}`);
    setCard(card.data);
  }

  async function editCard(id, editedProd){
    await axios.patch(`${API}/${id}`, editedProd)
    // getCards()
  }
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Products
              getCards={getCards}
              cards={cards}
              deleteCard={deleteCard}
            />
          }
        />
        <Route
          path="/add"
          element={<AddProduct addCard={addCard} />}
        />
        <Route
          path="/edit/:id"
          element={<EditProduct getCard={getCard} card={card} editCard={editCard}/>}
        />
        <Route
          path="/about-us"
          element={<AboutUs/>}
        />
        <Route
          path="*"
          element={<h1>bro u get rick rolled again</h1>}
        />
      </Routes>
    </div>
  );
};

export default App;
