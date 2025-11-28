import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import VanillaTilt from "vanilla-tilt";

// Import your brand logos
import brand1 from "../assets/brand1.jpg";
import brand2 from "../assets/brand2.png";
import brand3 from "../assets/brand3.webp";
import brand5 from "../assets/brand5.webp";
import brand6 from "../assets/brand6.png";
import brand7 from "../assets/brand7.jpeg";
import brand8 from "../assets/brand8.jpeg";
import brand9 from "../assets/brand9.jpeg";
import brand10 from "../assets/brand10.jpeg";
import brand11 from "../assets/brand11.jpeg";

export default function FeaturedOn() {
  const brands = [brand1, brand2, brand3,  brand5, brand6, brand7, brand8, brand9, brand10, brand11];
  const tiltRefs = useRef([]);

  useEffect(() => {
    tiltRefs.current.forEach((el, index) => {
      if (el) {
        VanillaTilt.init(el, {
          max: 15,
          speed: 400,
          glare: true,
          "max-glare": 0.3,
          scale: 1.08,
          perspective: 800,
        });
      }
    });

    return () => {
      tiltRefs.current.forEach((el) => el && el.vanillaTilt && el.vanillaTilt.destroy());
    };
  }, []);

  return (
    <section className="featured-section">
      {/* Floating Particles Background */}
      <div className="particles">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="particle" style={{ "--delay": `${i * 0.5}s` }} />
        ))}
      </div>

      <div className="featured-container">
        {/* Title with Permanent Gradient */}
        <h2 className="featured-title">
       
          <span className="highlight">Our Brands</span>
        </h2>
        <p className="featured-subtitle">
          Powering creators, gamers, and enterprises with premium PC rentals.
        </p>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={4}
          spaceBetween={40}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={800}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="brand-swiper"
        >
          {brands.map((logo, i) => (
            <SwiperSlide key={i}>
              <div
                className="brand-card"
                ref={(el) => (tiltRefs.current[i] = el)}
                data-tilt
              >
                <div className="card-inner">
                  <img src={logo} alt={`Brand ${i + 1}`} />
                  <div className="glow"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx>{`
        /* ===== SECTION BASE ===== */
        .featured-section {
          width: 100%;
          padding: 50px 0;
          background: linear-gradient(135deg, #0a001f 0%, #000000 100%);
          position: relative;
          overflow: hidden;
          color: #fff;
          font-family: "Poppins", sans-serif;
          text-align: center;
        }

        /* ===== FLOATING PARTICLES ===== */
        .particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #ff6ea8;
          border-radius: 50%;
          opacity: 0;
          animation: floatParticle 8s infinite ease-in-out;
          animation-delay: var(--delay, 0s);
          box-shadow: 0 0 10px #ff6ea8;
        }

        .particle:nth-child(1) { top: 20%; left: 10%; animation-duration: 10s; }
        .particle:nth-child(2) { top: 60%; left: 80%; animation-duration: 12s; }
        .particle:nth-child(3) { top: 40%; left: 60%; animation-duration: 9s; }
        .particle:nth-child(4) { top: 80%; left: 20%; animation-duration: 11s; }
        .particle:nth-child(5) { top: 30%; left: 90%; animation-duration: 13s; }
        .particle:nth-child(6) { top: 70%; left: 40%; animation-duration: 10s; }

        @keyframes floatParticle {
          0%, 100% { opacity: 0; transform: translateY(0) scale(0); }
          50% { opacity: 1; transform: translateY(-30px) scale(1); }
        }

        /* ===== TITLE - PERMANENT GRADIENT (NO HOVER CHANGE) ===== */
        .featured-title {
          font-size: 42px;
          font-weight: 800;
          margin: 0 0 16px;
          letter-spacing: -0.5px;
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          pointer-events: none; /* Prevents hover interference */
        }

        .text-part {
          font-size: 28px;
          font-weight: 600;
          color: #e0d9ff;
          opacity: 0.9;
        }

        .highlight {
          font-size: 48px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 1px;
          background: linear-gradient(90deg, #ff6ea8, #ffb547, #8f5cff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          padding: 0 8px;
          transition: none !important; /* Ensures no hover color change */
        }

        /* Glowing animated underline */
        .highlight::after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 5px;
          background: linear-gradient(90deg, #ff6ea8, #ffb547, #8f5cff);
          border-radius: 3px;
          box-shadow: 0 0 25px rgba(255, 110, 168, 0.6);
          animation: underlinePulse 2s ease-in-out infinite;
        }

        @keyframes underlinePulse {
          0%, 100% { transform: translateX(-50%) scaleX(1); }
          50% { transform: translateX(-50%) scaleX(1.3); }
        }

        .featured-subtitle {
          font-size: 16px;
          color: #c0c0ff;
          margin: 0 auto 70px;
          max-width: 650px;
          line-height: 1.6;
          opacity: 0.9;
          z-index: 1;
          position: relative;
        }

        /* ===== SWIPER CONTAINER ===== */
        .brand-swiper {
          width: 90%;
          max-width: 1400px;
          margin: auto;
          padding: 20px 0 50px;
          position: relative;
          z-index: 1;
        }

        /* ===== BRAND CARD ===== */
        .brand-card {
          height: 140px;
          padding: 8px;
          cursor: grab;
          user-select: none;
          position: relative;
        }

        .brand-card:active {
          cursor: grabbing;
        }

        .card-inner {
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.3),
            0 0 30px rgba(255, 110, 168, 0.1);
        }

        .card-inner::before {
          content: "";
          position: absolute;
          inset: 0;
          padding: 2px;
          background: linear-gradient(45deg, #ff6ea8, #ffb547, #8f5cff, #ff6ea8);
          border-radius: 20px;
          mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          -webkit-mask-composite: destination-out;
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: -1;
        }

        .brand-card:hover .card-inner::before {
          opacity: 1;
          animation: rotateGradient 3s linear infinite;
        }

        .brand-card img {
          width: 80%;
          height: 80%;
          object-fit: contain;
          padding: 15px;
          filter: brightness(0.9) contrast(1.1);
          transition: all 0.4s ease;
          z-index: 2;
        }

        .brand-card:hover img {
          filter: brightness(1.4) contrast(1.3);
          transform: scale(1.12);
        }

        .glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(255, 110, 168, 0.25), transparent 70%);
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 1;
          pointer-events: none;
        }

        .brand-card:hover .glow {
          opacity: 1;
          animation: pulseGlow 2s ease-in-out infinite;
        }

        /* ===== ANIMATIONS ===== */
        @keyframes rotateGradient {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes pulseGlow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }

        /* ===== BACKGROUND ORBS ===== */
        .featured-section::before,
        .featured-section::after {
          content: "";
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          z-index: 0;
          opacity: 0.4;
          animation: floatOrb 12s ease-in-out infinite;
        }

        .featured-section::before {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, #ff6ea8, transparent);
          top: -150px;
          left: -150px;
        }

        .featured-section::after {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, #ffb547, transparent);
          bottom: -200px;
          right: -200px;
          animation-delay: -6s;
        }

        @keyframes floatOrb {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .featured-title { font-size: 36px; }
          .highlight { font-size: 42px; }
          .text-part { font-size: 24px; }
          .brand-swiper { width: 95%; }
        }

        @media (max-width: 768px) {
          .featured-title { font-size: 28px; }
          .highlight { font-size: 34px; }
          .text-part { font-size: 20px; }
          .featured-subtitle { font-size: 14px; margin-bottom: 50px; }
          .brand-card { height: 100px; }
          .card-inner img { padding: 10px; }
        }

        @media (max-width: 480px) {
          .featured-title { font-size: 24px; }
          .highlight { font-size: 28px; }
          .text-part { font-size: 18px; }
          .brand-card { height: 80px; }
        }
      `}</style>
    </section>
  );
}