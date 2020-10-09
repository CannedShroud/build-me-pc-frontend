import React from "react";
import "./Card.css";

function Card({ img, name }) {
  return (
    <div className="card">
      <div className="card__body">
        <img src={img} alt={name} className="card__image"/>
      </div>
      <div className="card__title">
        <h3>{name}</h3>
      </div>
    </div>
  );
}

export default Card;
