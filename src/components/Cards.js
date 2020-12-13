import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import img from "../images/CookAlong.png";
import img2 from "../images/tobor.jpg";

function Cards() {
  return (
    <div className="cards">
      <p>My Projects</p>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={img}
              text="Digital sous chef web application for ACM Projects Fall 2020. First place project"
              label="Cook Along"
              path="https://github.com/acm-projects/CookAlong"
            />
            <CardItem
              src={img2}
              text="Puzzle and adventure game created through Unity for the 2020 HackUTD GameJam"
              label="Tobor's Treasure Troph"
              path="https://github.com/KendalUTD/GamerJamProject"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
