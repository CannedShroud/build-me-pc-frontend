import React from "react";
import "./AdvertBuild.css";
import { Link } from "react-router-dom";

function AdvertBuild() {
  return (
    <div className="advertbuild">
      <div className="advertbuild__button">
        <Link to="/build">
          <h1>SHOW ME THEM BUILDS</h1>
        </Link>
      </div>
    </div>
  );
}

export default AdvertBuild;
