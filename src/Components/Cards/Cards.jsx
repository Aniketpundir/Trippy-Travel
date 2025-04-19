import React from "react";
import "./Cards.css";
import { Card_content } from "./Card_content";
import img from "../../assets/5.jpg";

const Cards = () => {
  return (
    <>
      <div className="cards">
        {Card_content.map((items, index) => {
          return (
            <div className="card" key={items.id}>
              <img src={items.img} alt="/" />
              <div className="card_content">
                <h3>{items.trip_name}</h3>
                <p>{items.trip_des}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
