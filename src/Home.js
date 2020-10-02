import React from "react";
import "./Home.css";
import Header from "./Header";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <Header />
      </div>
      <div className="home__body">I am body</div>
    </div>
  );
}

export default Home;
