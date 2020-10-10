import React from "react";
import "../Styles/GameCards.css";
import Card from "../Components/Card";
import Brain from "../Logic/Brain";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function GameCards() {
  const games = Brain("games", "games");
  var carouselSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  if (window.innerWidth <= 430) {
    return (
      <div className="gamecards">
        <Slider {...carouselSettings}>
          <Card img={games.warzone?.img} name={games.warzone?.name} />
          <Card img={games.fortnite?.img} name={games.fortnite?.name} />
          <Card img={games.cpSSeven?.img} name={games.cpSSeven?.name} />
          <Card img={games.gtaFive?.img} name={games.gtaFive?.name} />
          <Card img={games.csgo?.img} name={games.csgo?.name} />
        </Slider>
      </div>
    );
  }
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
