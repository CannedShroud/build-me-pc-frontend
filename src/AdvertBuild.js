import React from "react";
import "./AdvertBuild.css";
import { Link } from "react-router-dom";
import BuildSummary from "./BuildSummary";

function AdvertBuild() {
  return (
    <div className="advertbuild">
      <div className="advertbuild__title">
        <Link
          to="/build"
          style={{ textDecoration: "none", color: "var(--primary)" }}
        >
          <h1>
            Featured <span>Builds</span>
          </h1>
        </Link>
      </div>
      <div className="advertbuild__summary">
        <BuildSummary docId="value"/>
        <BuildSummary docId="valueIntel"/>
        <BuildSummary docId="streaming"/>
      </div>
    </div>
  );
}

export default AdvertBuild;
