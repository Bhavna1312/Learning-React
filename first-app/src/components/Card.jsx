import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card" style={{ overflow: "hidden" }}>
      <img
        src="https://www.shutterstock.com/image-photo/igniting-innovation-harnessing-power-coding-600nw-2425426569.jpg"
        alt=""
        width={231}
        style={{ border: "2px solid black" }}
      />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};

export default Card;
