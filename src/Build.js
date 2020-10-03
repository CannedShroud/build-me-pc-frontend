import React from "react";
import "./Build.css";
import Header from "./Header";
import BuildCard from "./BuildCard";

function Build() {
  return (
    <div className="build">
      <div className="build__header">
        <Header />
      </div>
      <div className="build__body">
        <div className="build__cards">
          <BuildCard />
          <BuildCard />
          <BuildCard />
        </div>
      </div>
    </div>
  );
}

export default Build;
