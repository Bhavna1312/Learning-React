import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fcoding&psig=AOvVaw1n4X3OoaDA4aTntwgy50O4&ust=1742666580992000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMi_iovhm4wDFQAAAAAdAAAAABAJ"
        alt=""
        width=""
      />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};

export default Card;
