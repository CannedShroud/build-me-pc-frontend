import React, { useState, useEffect } from "react";
import "../Styles/AdvertBuild.css";
import { Link } from "react-router-dom";
import BuildSummary from "../Components/BuildSummary";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AdvertBuild() {
  const [slidesNum, setSlidesNum] = useState(2);
  useEffect(() => {
    if (window.innerWidth <= 1660) {
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
          <h4>
            Here are some <span>builds</span> which we recommend irrespective of
            any parameters. <br />
            These are one of the best <span>value</span> options in the market
            as of now
          </h4>
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
