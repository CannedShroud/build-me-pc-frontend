import React, { useState, useEffect } from "react";
import "./AdvertBuild.css";
import { Link } from "react-router-dom";
import BuildSummary from "./BuildSummary";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AdvertBuild() {
  const [slidesNum, setSlidesNum] = useState(2);
  useEffect(() => {
    if (window.innerWidth <= 1300) {
      setSlidesNum(1);
    }
  }, [slidesNum]);
  var carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesNum,
    slidesToScroll: 1,
  };
  return (
    <div className="advertbuild">
      <div className="advertbuild__title">
        <Link to="/build" style={{ textDecoration: "none", color: "white" }}>
          <h1>
            Featured <span>Builds</span>
          </h1>
        </Link>
      </div>
      <div className="advertbuild__summary">
        <Slider {...carouselSettings}>
          <BuildSummary docId="value" />
          <BuildSummary docId="valueIntel" />
          <BuildSummary docId="streaming" />
        </Slider>
      </div>
    </div>
  );
}

export default AdvertBuild;
