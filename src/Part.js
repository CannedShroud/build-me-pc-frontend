import { Button } from "@material-ui/core";
import React from "react";
import "./Part.css";

function Part({
  part,
  name,
  img,
  price,
  detail2,
  detail1,
  company,
  title1,
  title2,
  link,
}) {
  return (
    <div className="part">
      <div className="part__title">
        <h3>{part}</h3>
        <div className="part__line">{""}</div>
      </div>
      <div className="part__body">
        <img src={img} alt="" className="part__image" />
        <h3>{name}</h3>
      </div>
      <div className="part__details">
        <div className="part__price">
          <div className="part__price">
            <span>Price: </span>
            <p>{price}</p>
          </div>
        </div>
        <div className="part__groupOne">
          <span>{title1}</span>
          <p>{detail1}</p>
        </div>
        <div className="part__groupTwo">
          <span>{title2}</span>
          <p>{detail2}</p>
        </div>
        <div className="part__company">
          <span>Company: </span>
          <p>{company}</p>
        </div>
        <Button href={link} color="primary" className="part__buyBtn">
          BUY
        </Button>
      </div>
    </div>
  );
}

export default Part;
