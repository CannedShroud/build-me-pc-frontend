import React from "react";
import "./BuildCard.css";
import demopc from "./demopc.png";

function BuildCard() {
  return (
    <div className="buildcard">
      <div className="buildcard__title">
        <h1>The Value Build</h1>
      </div>
      <div className="buildcard__image">
        <img src={demopc} alt="" />
      </div>
      <div className="buildcard__price">
        <h3>$1000</h3>
      </div>
      <div className="buildcard__benchmarks">
        <h4>Cinebench: 1320</h4>
        <h4>3D Mark: 2000</h4>
      </div>
    </div>
  );
}

export default BuildCard;
