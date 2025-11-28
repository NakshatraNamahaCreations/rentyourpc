import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

// IMPORT YOUR IMAGES
import p6 from "../assets/c6.jpg";
import p7 from "../assets/c7.jpg";
import p8 from "../assets/c8.jpg";
import p9 from "../assets/c9.jpg";
import p10 from "../assets/c10.jpg";

const gamingPCs = [
  {
    id: 6,
    title: "RTX 3060 Gaming Beast – Ryzen 5 5600X",
    img: p6,
  },
  {
    id: 7,
    title: "GTX 1660 Super Esports Edition – Intel i5",

    img: p7,
  },
  {
    id: 8,
    title: "RTX 4070 Ti Creator Workstation – Ryzen 7",
    img: p8,
  },
  {
    id: 9,
    title: "Quadro P2200 Graphic Editing Workstation",
   
    img: p9,
  },
  {
    id: 10,
    title: "RTX 3080 Ultimate Gaming Rig – Ryzen 9",

    img: p10,
  },
];

const GamingPCPage = () => {
  return (
    <>
      <section className="gaming-hero">
        <div className="hero-overlay"></div>
        <h1 className="hero-title">Gaming PC / Workstation Rentals</h1>
        <p className="hero-sub">High-Performance Rigs • Optimized for Gaming & Editing</p>
      </section>

      <section className="gaming-grid">
        {gamingPCs.map((pc) => (
          <div className="gaming-card" key={pc.id}>
            <div className="img-box">
              <img src={pc.img} alt={pc.title} />
            </div>

            <div className="card-content">
              <h3>{pc.title}</h3>

              <div className="badge-row">
                <span className="badge available">{pc.status}</span>
              
              </div>

              <p className="price">{pc.price}</p>

              {/* Buttons */}
              <div className="btn-row">
                <a
                  href="https://wa.me/919019677359"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <FaWhatsapp size={18} /> WhatsApp
                </a>

                <a href="tel:+919019677359" className="btn-call">
                  <FaPhoneAlt size={16} /> Call Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CSS */}
      <style>{`
        
        body {
          background: #0a0a0fea;
          font-family: 'Poppins', sans-serif;
        }

        /* HERO SECTION */
        .gaming-hero {
          height: 45vh;
          background: url('https://images.unsplash.com/photo-1606229778838-79ab9d7f06c1?auto=format&fit=crop&w=1400&q=80')
            center/cover no-repeat;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
          color: #fff;
          text-align: center;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
        }
        .hero-title {
          font-size: 48px;
          font-weight: 800;
          z-index: 2;
          background: linear-gradient(90deg, #ff6ea8, #8f5cff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-sub {
          z-index: 2;
          font-size: 16px;
          color: #dcdcdc;
          margin-top: 10px;
        }

        /* PRODUCT GRID */
        .gaming-grid {
          padding: 80px 60px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 35px;
        }

        /* PRODUCT CARD */
        .gaming-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 110, 168, 0.2);
          border-radius: 18px;
          padding: 18px;
          box-shadow: 0 0 25px rgba(143, 92, 255, 0.15);
          transition: 0.4s ease;
        }
        .gaming-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 0 40px rgba(255, 110, 168, 0.4);
        }

        .img-box img {
          width: 100%;
          height: 210px;
          object-fit: cover;
          border-radius: 14px;
        }

        .card-content h3 {
          font-size: 18px;
          font-weight: 600;
          color: #fff;
          margin: 16px 0 10px;
        }

        /* BADGES */
        .badge-row {
          display: flex;
          gap: 10px;
          margin-bottom: 10px;
        }
        .badge {
          padding: 5px 10px;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 500;
        }
        .available {
          background: rgba(71, 223, 255, 0.2);
          color: #47dfff;
        }
        .delivery {
          background: rgba(255, 110, 168, 0.15);
          color: #ff6ea8;
        }

        /* PRICE */
        .price {
          font-size: 18px;
          font-weight: 700;
          color: #8f5cff;
          margin: 8px 0 18px;
        }

        /* BUTTONS */
        .btn-row {
          display: flex;
          justify-content: space-between;
        }
        .btn-whatsapp {
          background: #25d366;
          padding: 10px 18px;
          border-radius: 8px;
          color: #fff;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .btn-call {
          background: #ff6ea8;
          padding: 10px 18px;
          border-radius: 8px;
          color: #fff;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .gaming-hero {
            height: 35vh;
            padding: 20px;
          }

          .hero-title {
            font-size: 32px;
            padding: 0 15px;
          }

          .hero-sub {
            font-size: 14px;
            padding: 0 15px;
          }

          .gaming-grid {
            padding: 40px 20px;
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .gaming-card {
            padding: 15px;
          }

          .img-box img {
            height: 180px;
          }

          .card-content h3 {
            font-size: 16px;
          }

          .btn-row {
            flex-direction: column;
            gap: 10px;
          }

          .btn-whatsapp,
          .btn-call {
            width: 100%;
            justify-content: center;
            padding: 12px;
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .gaming-hero {
            height: 30vh;
          }

          .hero-title {
            font-size: 26px;
          }

          .gaming-grid {
            padding: 30px 15px;
          }
        }
      `}</style>
    </>
  );
};

export default GamingPCPage;
