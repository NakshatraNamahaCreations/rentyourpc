import React from "react";
import heroRight from "../assets/banners.png"; // your right-side image
import heroBg from "../assets/video5.mp4"; // your background video

export default function HeroGamingBanner() {
  return (
    <section className="hero-gaming-section">
      {/* 🎥 Fixed Background Video */}
      <video
        className="hero-video-bg"
        src={heroBg}
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-container">
        {/* LEFT SIDE CONTENT */}
        <div className="hero-left">
          <button className="hero-tag">Rent Your Power</button>
          <h1 className="hero-title">
            High Performance PCs <br /> <span>For Every Need</span>
          </h1>
          <p className="hero-desc">
            At <strong>Rent Your PC</strong>, we make premium computing affordable and accessible.  
            Whether you’re gaming, editing, designing, or managing a business
            rent the latest PCs, laptops, and workstations with powerful specs and zero hassle.
          </p>

        
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="hero-right">
          <img src={heroRight} alt="Rent a PC" />
        </div>
      </div>

      {/* 🎨 Styles */}
      <style>{`
        .hero-gaming-section {
          position: relative;
          width: 100%;
          height: 600px;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          font-family: "Poppins", sans-serif;
          color: #ffffffff;
        }

        /* 🎥 Fixed Background Video */
        .hero-video-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -3;
          filter: brightness(0.4) contrast(1.1);
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at 40% 40%,
            rgba(0, 0, 0, 0.25),
            rgba(0, 0, 0, 0.85)
          );
          z-index: -1;
        }

        .hero-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 85%;
          max-width: 1200px;
          z-index: 5;
        }

        /* LEFT SIDE */
        .hero-left {
          flex: 1;
          max-width: 550px;
          animation: fadeInLeft 1.2s ease forwards;
        }

        .hero-tag {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.5);
          color: #fff;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          margin-bottom: 20px;
          cursor: default;
        }

        .hero-title {
          font-size: 52px;
          font-weight: 800;
          line-height: 1.2;
          color: #fff;
          margin-bottom: 20px;
        }

        .hero-title span {
          background: linear-gradient(90deg, #b47cff, #6d3eff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-desc {
          color: #ffffffff;
          font-size: 16px;
          line-height: 1.7;
          margin-bottom: 35px;
          max-width: 480px;
        }

        .hero-btn {
          background: linear-gradient(90deg, #b47cff, #6d3eff);
          color: #fff;
          border: none;
          padding: 14px 36px;
          border-radius: 8px;
          font-weight: 600;
          letter-spacing: 0.8px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 0 15px rgba(109, 62, 255, 0.5);
        }

        .hero-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 25px rgba(180, 124, 255, 0.8);
        }

        /* RIGHT SIDE */
        .hero-right {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          animation: fadeInRight 1.4s ease forwards;
        }

        .hero-right img {
          width: 440px;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 0 25px rgba(180, 124, 255, 0.4));
          animation: floatY 4s ease-in-out infinite alternate;
        }

        /* Animations */
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes floatY {
          0% { transform: translateY(0); }
          100% { transform: translateY(-10px); }
        }

        /* Responsive */
        @media (max-width: 992px) {
          .hero-gaming-section {
            height: auto;
            min-height: 500px;
            padding: 40px 0;
          }

          .hero-container {
            flex-direction: column;
            text-align: center;
            width: 90%;
            padding: 20px;
          }

          .hero-left {
            max-width: 100%;
          }

          .hero-right {
            width: 100%;
            justify-content: center;
          }

          .hero-right img {
            width: 300px;
            margin-top: 30px;
          }

          .hero-title {
            font-size: 38px;
          }

          .hero-desc {
            margin: 0 auto 25px;
            font-size: 15px;
          }
        }

        @media (max-width: 768px) {
          .hero-gaming-section {
            height: auto;
            min-height: 450px;
            padding: 30px 0;
          }

          .hero-container {
            width: 95%;
            padding: 15px;
          }

          .hero-title {
            font-size: 28px;
            line-height: 1.3;
          }

          .hero-desc {
            font-size: 14px;
            padding: 0 10px;
          }

          .hero-right img {
            width: 250px;
            margin-top: 20px;
          }

          .hero-tag {
            font-size: 11px;
            padding: 6px 12px;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 24px;
          }

          .hero-desc {
            font-size: 13px;
          }

          .hero-right img {
            width: 200px;
          }
        }
      `}</style>
    </section>
  );
}
