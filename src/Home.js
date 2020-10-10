import React from "react";
import "./Home.css";
import Header from "./Header";
import GameCards from "./GameCards";
import AdvertBuild from "./AdvertBuild";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <Header />
      </div>
      <div className="home__body">
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
        <GameCards />
        <AdvertBuild />
      </div>
    </div>
  );
}

export default Home;