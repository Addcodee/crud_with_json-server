import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

const AddProduct = ({ addCard }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [cat, setCat] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");

  function collectValues() {
    if (!name || !price || !cat || !desc || !img) {
      alert("please complete all inputs");
      return;
    }
    let newCard = {
      name,
      price,
      cat,
      desc,
      img,
      id: Date.now(),
    };
    addCard(newCard);
    setName("");
    setPrice("");
    setCat("");
    setDesc("");
    setImg("");
  }
  return (
    <div>
      <form
        action=""
        className="d-flex justify-content-center flex-column container w-25 mt-5"
      >
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="products name"
          className="mb-2"
          type="text"
        />
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="price"
          className="mb-2"
          type="number"
        />
        <input
          value={cat}
          onChange={(e) => setCat(e.target.value)}
          placeholder="category"
          className="mb-2"
          list="categorys"
        />
        <datalist id="categorys">
          <option value="Menschen" />
          <option value="beautifull photos" />
          <option value="animals" />
          <option value="food" />
          <option value="other" />
        </datalist>
        <input
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="description"
          className="mb-2"
          type="text"
        />
        <input
          value={img}
          onChange={(e) => setImg(e.target.value)}
          placeholder="image URL please"
          className="mb-2"
          type="url"
        />
        <Button
          onClick={collectValues}
          className="mb-2"
          variant="warning"
        >
          Add Product
        </Button>
      </form>
    </div>
  );
};

export default AddProduct;
