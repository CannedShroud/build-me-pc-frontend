import React from "react";
import "../Styles/BuildCard.css";
import Gate from "../Logic/Gate";
import { ScaleLoader } from "react-spinners";

function BuildCard({ buildId }) {
  const { buildDetails } = Gate(buildId);
  if (buildDetails?.case?.img === undefined) {
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
          <h1>{buildDetails?.details?.name}</h1>
        </div>
        <div className="buildcard__image">
          <img src={buildDetails?.case?.img} alt="" className="buildcard__case" />
          <div className="buildcard__partsImg">
            <img src={buildDetails?.cpu?.img} alt="" />
            <img src={buildDetails?.gpu?.img} alt="" />
          </div>
        </div>
        <div className="buildcard__price">
          <h3>~$1000</h3>
        </div>
        <div className="buildcard__benchmarks">
          <h4>{`Cinebench: ${buildDetails?.benchmarks?.cinebench}`}</h4>
          <h4>{`3D Mark: ${buildDetails?.benchmarks?.threeDMarkTSpy}`}</h4>
        </div>
      </div>
    </div>
  );
}

export default BuildCard;
