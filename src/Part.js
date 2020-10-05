import React from "react";
import "./Part.css";

function Part({ part, name, img, price, detail2, detail1, company }) {
  return (
    <div className="part">
      <div className="part__title">
        <h3>{part}</h3>
        <div className="part__line">{""}</div>
      </div>
      <div className="part__body">
        <img
          src={img}
          alt=""
          className="part__image"
        />
        <h3>{name}</h3>
      </div>
      <div className="part__details">
        <p>Price: $199.99</p>
        <p>{detail1}</p>
        <p>{detail2}</p>
        <p>Company: {company}</p>
      </div>
    </div>
  );
}

export default Part;
