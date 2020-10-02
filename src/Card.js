import React from "react";
import "./Card.css";

function Card() {
  return (
    <div className="card">
      <div className="card__body">
        <img
          src="https://store-images.s-microsoft.com/image/apps.46452.13835473807186336.9510cd97-f71a-49b0-9e5c-0877f4bc9de3.611f3905-926e-456a-b549-6b68564b2769?mode=scale&q=90&h=300&w=200&background=%23FFFFFF"
          alt=""
        />
      </div>
      <div className="card__title">
        <h3>WarZone</h3>
      </div>
    </div>
  );
}

export default Card;
