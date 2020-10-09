import React from "react";
import "./GameCards.css";
import Card from "./Card";
import Brain from "./Brain";

function GameCards() {
  const games = Brain("games", "games");
  return (
    <div className="gamecards">
      <Card img={games.warzone?.img} name={games.warzone?.name} />
      <Card img={games.fortnite?.img} name={games.fortnite?.name} />
      <Card img={games.cpSSeven?.img} name={games.cpSSeven?.name} />
      <Card img={games.gtaFive?.img} name={games.gtaFive?.name} />
      <Card img={games.csgo?.img} name={games.csgo?.name} />
    </div>
  );
}

export default GameCards;
