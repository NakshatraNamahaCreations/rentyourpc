import React from "react";
import "./PromoCards.css";

import gaming1 from "../assets/c1.jpg";
import gaming2 from "../assets/c2.jpg";
import gaming3 from "../assets/c3.jpg";

const PromoCards = () => {
  const data = [
    {
      title: "Mystic Racing Z",
      offer: "20% OFF",
      price: "$14.99",
      img: gaming1,
    },
    {
      title: "Galactic Odyssey",
      offer: "20% OFF",
      price: "$14.99",
      img: gaming2,
    },
    {
      title: "Funk Dungeon",
      offer: "20% OFF",
      price: "$14.99",
      img: gaming3,
    },
  ];

  return (
    <section className="promo-section">
      <div className="promo-container">
        {data.map((item, i) => (
          <div className="game-card" key={i}>
            <div className="game-border"></div>
            <img src={item.img} alt={item.title} className="game-bg" />
            <div className="offer-tag">{item.offer}</div>
            <div className="card-overlay"></div>

            <div className="game-info">
              <h3>{item.title}</h3>
              <div className="price-line">
                <span className="start">Starting at</span>
                <span className="price-chip">{item.price}</span>
              </div>

              <div className="divider"></div>
              <button className="rent-btn">Rent Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PromoCards;
