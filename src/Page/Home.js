import React from "react";
import "../Styles/Home.css";
import Header from "../Components/Header";
import GameCards from "../Components/GameCards";
import AdvertBuild from "../Components/AdvertBuild";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <Header />
      </div>
      <div className="home__body">
        <Link to="/estimator" style={{ textDecoration: "none" }}>
          <div className="home__text">
            <h1>
              Get <span>Game</span> Recomendations
            </h1>
            <h4>
              Plan your next <span>gaming</span> build according to your target
              game details and quality. <br /> Use our spec estimator to get a
              list of recommended parts for your <span>gaming/streaming </span>
              build
            </h4>
          </div>
        </Link>
        <GameCards />
        <AdvertBuild />
      </div>
    </div>
  );
}

export default Home;
