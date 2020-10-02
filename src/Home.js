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
        <GameCards />
        <AdvertBuild />
      </div>
    </div>
  );
}

export default Home;
