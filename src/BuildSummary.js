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
      <div className="buildsummary__text">
        <h1>{build.details?.name}</h1>
        <div className="buildsummary__benchmarks">
          <h4>{`Cinebench: ${build.benchmarks?.cinebench}`}</h4>
          <h4>{`3D Mark: ${build.benchmarks?.threeDMarkTSpy}`}</h4>
        </div>
        <div className="buildsummary__price">
          <h3>~$1000</h3>
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
