import React from "react";
import "./BuildCard.css";
import Brain from "./Brain";

function BuildCard({ docId }) {
  const build = Brain(docId);
  return (
    <div className="buildcard">
      <div className="buildcard__title">
        <h1>{build.details?.name}</h1>
      </div>
      <div className="buildcard__image">
        <img src={build.case?.img} alt="" className="buildcard__case" />
        <div className="buildcard__partsImg">
          <img src={build.cpu?.img} alt="" />
          <img src={build.gpu?.img} alt="" />
        </div>
      </div>
      <div className="buildcard__price">
        <h3>~$1000</h3>
      </div>
      <div className="buildcard__benchmarks">
        <h4>{`Cinebench: ${build.benchmarks?.cinebench}`}</h4>
        <h4>{`3D Mark: ${build.benchmarks?.threeDMarkTSpy}`}</h4>
      </div>
    </div>
  );
}

export default BuildCard;
