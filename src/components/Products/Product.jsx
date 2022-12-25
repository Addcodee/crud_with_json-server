import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Product.css";

const Products = ({ getCards, cards, deleteCard }) => {
  const navigate = useNavigate();
  useEffect(() => {
    getCards();
  }, []);

  return (
    <div className="d-flex justify-content-around flex-wrap container mt-5">
      {cards.map((item) => (
        <Card
          key={item.id}
          style={{ width: "18rem" }}
          className="mb-5"
        >
          <Card.Img variant="top" src={item.img} />
          <Card.Body>
            <Card.Title>
              {item.price}
              <span className="inp-text">$</span>
            </Card.Title>
            <Card.Text>
              <span className="inp-text">name</span>: {item.name}
            </Card.Text>
            <Card.Text>
              <span className="inp-text">category</span>: {item.cat}
            </Card.Text>
            <Card.Text>
              <span className="inp-text">Description</span>:{" "}
              {item.desc}
            </Card.Text>
            <Button
              onClick={() => deleteCard(item.id)}
              variant="danger"
              className="me-2"
            >
              DELETE
            </Button>
            <Button
              onClick={() => navigate(`/edit/${item.id}`)}
              variant="primary"
            >
              EDIT
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Products;
