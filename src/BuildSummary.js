import React from "react";
import "./BuildSummary.css";
import Brain from "./Brain";
import { ScaleLoader } from "react-spinners";

function BuildSummary({ docId }) {
  const build = Brain(docId, "builds");
  if (build.case?.img === undefined) {
    return (
      <div className="buildsummary buildsummary__loading">
        <ScaleLoader size={250} color={"#FF6A82"} />
      </div>
    );
  }
  return (
    <div className="buildsummary">
      <div className="buildsummary__details">
        <div className="buildsummary__text">
          <h1>{build.details?.name}</h1>
          <div className="buildsummary__benchmarks">
            <h4>
              Cinebench: <span>{build.benchmarks?.cinebench}</span>
            </h4>
            <h4>
              3D Mark: <span>{build.benchmarks?.threeDMarkTSpy}</span>
            </h4>
          </div>
          <div className="buildsummary__price">
            <h3>~$1000</h3>
          </div>
        </div>
        <div className="buildsummary__loadBars">
          <h3>Warzone</h3>
          <h3>Fortnite</h3>
          <h3>GTA V</h3>
          <h3>CyberPunk 2077</h3>
          <h3>CS:GO</h3>
        </div>
      </div>
      <div className="buildsummary__image">
        <img src={build.case?.img} alt="" className="buildsummary__case" />
        <div className="buildsummary__partsImg">
          <img src={build.cpu?.img} alt="" />
          <img src={build.gpu?.img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default BuildSummary;
