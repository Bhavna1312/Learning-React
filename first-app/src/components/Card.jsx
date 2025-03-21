import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img
        src="https://www.shutterstock.com/image-photo/igniting-innovation-harnessing-power-coding-600nw-2425426569.jpg"
        alt=""
        width={233}
      />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};

export default Card;
