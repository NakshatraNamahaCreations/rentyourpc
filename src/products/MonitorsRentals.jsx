import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

import p11 from "../assets/c11.jpg";
import p12 from "../assets/c12.png";
import p13 from "../assets/c13.png";
import p14 from "../assets/c14.jpg";
import p15 from "../assets/c15.jpg";

const monitors = [
  {
    id: 11,
    title: 'Dell UltraSharp U2419H – 24" IPS Full HD',
   
 
    img: p11,
  },
  {
    id: 12,
    title: 'Samsung Curved LED 27" Gaming (144Hz)',

 
    img: p12,
  },
  {
    id: 13,
    title: 'LG 32" UHD 4K UltraFine Monitor',
   

    img: p13,
  },
  {
    id: 14,
    title: 'AOC 24" Frameless IPS Full HD',


    img: p14,
  },
  {
    id: 15,
    title: 'BenQ DesignVue 27" QHD Designer Monitor',
  
   
    img: p15,
  },
];

const MonitorsRentals = () => {
  return (
    <div className="monitor-page">

      {/* HEADER SECTION */}
      <div className="banner-section">
        <h1 className="page-heading">Monitor <span>Rentals</span></h1>
        <p className="page-subtitle">
          Premium Full HD, 2K & 144Hz monitors for work, gaming and design.
        </p>
      </div>

      {/* GRID */}
      <div className="grid-container">
        {monitors.map((item) => (
          <div className="grid-card" key={item.id}>

            <div className="card-img">
              <img src={item.img} alt={item.title} />
            </div>

            <div className="card-content">
              <h2 className="card-title">{item.title}</h2>

              <div className="card-info">
                <span className={`status ${item.status === "Available" ? "green" : "yellow"}`}>
                  {item.status}
                </span>
   
              </div>

              {/* ICON BUTTONS */}
              <div className="btn-row">
                <a
                  href={`https://wa.me/919019677359?text=Hi! I want to rent this monitor: ${item.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-btn whats"
                >
                  <FaWhatsapp size={20} />
                </a>

                <a href="tel:+919019677359" className="icon-btn call">
                  <FaPhoneAlt size={18} />
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* CSS */}
      <style>{`
        .monitor-page {
          padding: 90px 5%;
          background: #0a0b17;
          color: #fff;
          min-height: 100vh;
          font-family: 'Poppins', sans-serif;
        }

        /* BANNER */
        .banner-section {
          text-align: center;
          margin-bottom: 40px;
        }

        .page-heading {
          font-size: 46px;
          font-weight: 800;
          background: linear-gradient(90deg, #ff6ea8, #8f5cff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .page-heading span {
          background: linear-gradient(90deg, #ffb547, #ff6ea8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .page-subtitle {
          font-size: 18px;
          color: #cfcfcf;
          margin-top: 8px;
        }

        /* GRID */
        .grid-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          max-width: 1300px;
          margin: auto;
        }

        .grid-card {
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,110,168,0.25);
          border-radius: 18px;
          padding: 18px;
          backdrop-filter: blur(10px);
          transition: 0.3s;
        }

        .grid-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 0 45px rgba(255,110,168,0.35);
        }

        /* IMAGE */
        .card-img {
          height: 190px;
          border-radius: 14px;
          overflow: hidden;
          margin-bottom: 15px;
        }

        .card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 0.3s;
        }

        .grid-card:hover img {
          transform: scale(1.08);
        }

        /* TEXT */
        .card-title {
          font-size: 18px;
          height: 50px;
          overflow: hidden;
          margin-bottom: 10px;
        }

        .card-info {
          display: flex;
          gap: 10px;
          font-size: 13px;
          margin-bottom: 15px;
        }

        .status {
          padding: 4px 10px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 12px;
        }

        .green {
          background: rgba(34,197,94,0.25);
          color: #22c55e;
        }

        .yellow {
          background: rgba(251,191,36,0.25);
          color: #fbbf24;
        }

        /* ICON BUTTON ROW */
        .btn-row {
          display: flex;
          gap: 12px;
          margin-top: 12px;
        }

        .icon-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 20px;
          color: #fff;
          transition: 0.3s;
        }

        .whats {
          background: #25d366;
        }
        .call {
          background: #ff6ea8;
        }

        .icon-btn:hover {
          transform: scale(1.15);
          box-shadow: 0 0 18px rgba(255,110,168,0.4);
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .grid-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .monitor-page {
            padding: 70px 4%;
          }

          .banner-section {
            margin-bottom: 30px;
          }

          .page-heading {
            font-size: 32px;
            padding: 0 15px;
          }

          .page-subtitle {
            font-size: 15px;
            padding: 0 15px;
          }

          .grid-container {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .grid-card {
            padding: 15px;
          }

          .card-img {
            height: 170px;
          }

          .card-title {
            font-size: 16px;
            height: auto;
            min-height: 48px;
          }

          .icon-btn {
            width: 40px;
            height: 40px;
            font-size: 18px;
          }
        }

        @media (max-width: 480px) {
          .monitor-page {
            padding: 60px 3%;
          }

          .page-heading {
            font-size: 28px;
          }

          .page-subtitle {
            font-size: 14px;
          }
        }
      `}</style>

    </div>
  );
};

export default MonitorsRentals;
