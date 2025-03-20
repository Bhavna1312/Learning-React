import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <h1>{props.title}</h1>
      <p>Description of the card</p>
    </div>
  );
};

export default Card;
