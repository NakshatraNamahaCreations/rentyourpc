import React from "react";
import v3 from "../assets/video3.mp4";
import promo1 from "../assets/c1.jpg";
import promo2 from "../assets/c2.jpg";
import promo3 from "../assets/c3.jpg";

export default function GamingShowcase() {
  const promos = [
    {
      img: promo1,
      title: "The Best Gaming PC Bundles",
      desc: "Rent high-performance gaming PCs ready for esports, streaming, and editing. Ultimate speed, zero lag.",
      btn: "Get 25% Off Now",
      big: true,
    },
    {
      img: promo2,
      title: "New to Gaming?",
      desc: "Start your gaming journey with top-tier performance rigs and accessories. Ready, set, play!",
      btn: "Shop Now",
      big: false,
    },
    {
      img: promo3,
      title: "Pro Gamer Mode",
      desc: "Upgrade your setup and experience ultra-smooth frame rates with our elite hardware rental.",
      btn: "Shop Now",
      big: false,
    },
  ];

  return (
    <section className="gaming-showcase">
      {/* Background Video */}
      <video
        src={v3}
        autoPlay
        muted
        loop
        playsInline
        className="bg-video"
      />

      {/* Overlay */}
      <div className="overlay" />

      {/* Content */}
      <div className="promo-grid">
        {/* LEFT MAIN PROMO */}
        <div className="promo-card big">
          <img src={promos[0].img} alt="Promo" className="promo-img" />
          <div className="promo-content">
            <h3>{promos[0].title}</h3>
            <p>{promos[0].desc}</p>
            <button className="promo-btn highlight">{promos[0].btn}</button>
          </div>
        </div>

        {/* RIGHT SMALL PROMOS */}
        <div className="right-column">
          {promos.slice(1).map((promo, i) => (
            <div className="promo-card small" key={i}>
              <img src={promo.img} alt={promo.title} className="promo-img" />
              <div className="promo-content">
                <h3>{promo.title}</h3>
                <p>{promo.desc}</p>
                <button className="promo-btn">{promo.btn}</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 💎 STYLES */}
      <style>{`
        .gaming-showcase {
          position: relative;
          width: 100%;
          padding: 30px 0;
          overflow: hidden;
          color: #fff;
          font-family: "Poppins", sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* Background Video */
        .bg-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.25) blur(2px);
          z-index: 0;
        }

        /* Overlay Gradient */
        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.95));
          z-index: 1;
        }

        /* Promo Grid */
        .promo-grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 30px;
          width: 90%;
          max-width: 1300px;
        }

        /* Promo Card */
        .promo-card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          background: #111;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6);
          transition: all 0.4s ease;
        }

        .promo-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 60px rgba(180, 124, 255, 0.4);
        }

        /* Promo Images */
        .promo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .promo-card:hover .promo-img {
          transform: scale(1.1);
        }

        /* Promo Content */
        .promo-content {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
          padding: 30px;
        }

        .promo-content h3 {
          font-size: 26px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .promo-content p {
          font-size: 15px;
          color: #ccc;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        /* Button */
        .promo-btn {
          background: #fff;
          color: #000;
          border: none;
          outline: none;
          font-weight: 600;
          font-size: 14px;
          padding: 10px 28px;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.4s ease;
        }

        .promo-btn:hover {
          background: linear-gradient(90deg, #b47cff, #6d3eff);
          color: #fff;
          box-shadow: 0 0 20px rgba(180, 124, 255, 0.6);
        }

        /* Highlight Button (Left Big Card) */
        .highlight {
          background: linear-gradient(90deg, #b47cff, #6d3eff);
          color: #fff;
        }

        .highlight:hover {
          background: linear-gradient(90deg, #6d3eff, #b47cff);
          box-shadow: 0 0 25px rgba(180, 124, 255, 0.8);
        }

        /* Right Column Small Cards */
        .right-column {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .promo-card.small {
          height: 48%;
        }

        .promo-card.big {
          height: 100%;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .promo-grid {
            grid-template-columns: 1fr;
          }
          .right-column {
            flex-direction: row;
            gap: 20px;
          }
          .promo-card.small {
            flex: 1;
            height: 350px;
          }
        }

        @media (max-width: 768px) {
          .promo-content h3 {
            font-size: 20px;
          }
          .promo-content p {
            font-size: 13px;
          }
          .promo-grid {
            gap: 20px;
          }
        }

        @media (max-width: 600px) {
          .promo-content {
            padding: 20px;
          }
          .promo-content h3 {
            font-size: 18px;
          }
          .promo-content p {
            font-size: 12px;
          }
        }
      `}</style>
    </section>
  );
}
