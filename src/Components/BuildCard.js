import React from "react";
import "../Styles/BuildCard.css";
import Brain from "../Logic/Brain";
import { ScaleLoader } from "react-spinners";

function BuildCard({ docId }) {
  const build = Brain(docId, "builds");
  if (build.case?.img === undefined) {
    return (
      <div className="buildcard buildcard__loading">
        <ScaleLoader size={250} color={"#FF6A82"} />
      </div>
    );
  }
  return (
    <div className="buildcard">
      <div className="buildcard__body">
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
    </div>
  );
}

export default BuildCard;
