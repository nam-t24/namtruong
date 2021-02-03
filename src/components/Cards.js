import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import img from "../images/CookAlong.png";
import img2 from "../images/tobor.jpg";
import img3 from "../images/Minos.png";

function Cards() {
  return (
    <div className="cards">
      <p>My Projects</p>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={img}
              text="Digital sous chef web application for ACM Projects Fall 2020. First place project winner"
              label="Cook Along"
              path="https://github.com/acm-projects/CookAlong"
            />
            <CardItem
              src={img2}
              text="3D Puzzle and adventure game created through Unity for HackUTD GameJam 2020"
              label="Tobor's Treasure Troph"
              path="https://github.com/KendalUTD/GamerJamProject"
            />
            <CardItem
              src={img3}
              text="Real-time multiplayer tile based labrynth game using Processing for TAMUHack 2021"
              label="Minos' Quest"
              path="https://github.com/Kevin16777216/TAMUHacks2021"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
