import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Card.css";

function Card({ img, name }) {
  return (
    <Link to="/estimator" style={{textDecoration: "none"}}>
      <div className="card">
        <div className="card__body">
          <img src={img} alt={name} className="card__image" />
        </div>
        <div className="card__title">
          <h3>{name}</h3>
        </div>
      </div>
    </Link>
  );
}

export default Card;
