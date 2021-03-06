import React, { useState } from "react";
import "../Styles/Build.css";
import Header from "../Components/Header";
import BuildCard from "../Components/BuildCard";
import BuildElab from "../Components/BuildElab";

function Build() {
  const [buildId, setBuildId] = useState("valueIntel");
  return (
    <div className="build">
      <div className="build__header">
        <Header />
      </div>
      <div className="build__body">
        <div className="build__cards">
          <div
            onClick={() => {
              setBuildId("value");
            }}
            id="value"
          >
            <BuildCard docId="value" />
          </div>
          <div
            onClick={() => {
              setBuildId("valueIntel");
            }}
            id="valueIntel"
          >
            <BuildCard docId="valueIntel" />
          </div>
          <div
            onClick={() => {
              setBuildId("streaming");
            }}
          >
            <BuildCard docId="streaming" />
          </div>
        </div>
        <div className="build__featured">
          <h1>
            Selected <span>Build</span>
          </h1>
          <BuildElab id={buildId} />
        </div>
      </div>
    </div>
  );
}

export default Build;
