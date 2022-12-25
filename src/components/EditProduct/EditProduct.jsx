import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const EditContact = ({ getCard, card, editCard }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [cat, setCat] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");

  const navigate = useNavigate();

  const params = useParams();

  useEffect(() => {
    getCard(params.id);
  }, []);

  useEffect(() => {
    if (card) {
      setName(card.name);
      setPrice(card.price);
      setCat(card.cat);
      setDesc(card.desc);
      setImg(card.img);
    }
  }, [card]);

  function collectValues() {
    if (!name || !price || !cat || !desc || !img) {
      alert("please complete all inputs");
      return;
    }
    let editedCard = {
      name,
      price,
      cat,
      desc,
      img,
    };
    editCard(params.id, editedCard);
  }

  return (
    <div>
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
            onClick={() => {
              collectValues();
              navigate("/");
            }}
            className="mb-2"
            variant="warning"
          >
            edit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
