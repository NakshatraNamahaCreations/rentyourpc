import React, { useEffect, useRef } from "react";
import video1 from "../assets/video1.mp4";
import VanillaTilt from "vanilla-tilt";

export default function AboutRentPCSection() {
  const videoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // 3D Tilt on Video
    if (videoRef.current) {
      VanillaTilt.init(videoRef.current, {
        max: 10,
        speed: 400,
        glare: true,
        "max-glare": 0.3,
        scale: 1.03,
        perspective: 1000,
      });
    }

    // Scroll Animation Trigger
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (videoRef.current) observer.observe(videoRef.current);
    if (textRef.current) observer.observe(textRef.current);

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <section className="about-section">
      {/* Floating Gradient Orbs */}
      <div className="orb orb-left"></div>
      <div className="orb orb-right"></div>

      {/* LEFT SIDE - Video with 3D Tilt */}
      <div className="video-side" ref={videoRef}>
        <div className="video-wrapper">
          <video src={video1} autoPlay muted loop playsInline></video>
          <div className="video-overlay"></div>
          <div className="video-glow"></div>
        </div>
      </div>

      {/* RIGHT SIDE - Text Content */}
      <div className="text-side" ref={textRef}>
        <p className="tag">ABOUT US</p>
        <h2 className="heading">
          Smart Rentals <span>FOR</span> Smarter Productivity.
        </h2>
        <p className="desc">
          Rent Your PC is India’s most reliable destination for high-performance computer rentals. Whether you’re a gamer, developer, designer, or corporate professional — our systems are built to deliver unmatched speed and reliability.
          <br /><br />
          We believe technology should empower, not limit. That’s why we make the latest gaming rigs, laptops, and workstations accessible to everyone through affordable rentals and exceptional service.
        </p>
       <button
  className="btn-primary"
  onClick={() => (window.location.href = "/about")}
>
  READ MORE
</button>

      </div>

      {/* STYLES */}
      <style jsx>{`
        /* ===== SECTION BASE ===== */
        .about-section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 50px 8%;
          background: linear-gradient(135deg, #0a001f75 0%, #0000009f 100%);
          color: #ffffffff;
          font-family: 'Poppins', sans-serif;
          position: relative;
          overflow: hidden;
          gap: 60px;
            border-radius: 30px;
        }

        /* ===== FLOATING ORBS ===== */
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.4;
          z-index: 0;
          animation: floatOrb 12s ease-in-out infinite;
        }

        .orb-left {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, #ff6ea8, transparent);
          top: -200px;
          left: -200px;
        }

        .orb-right {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, #ffb547, transparent);
          bottom: -250px;
          right: -250px;
          animation-delay: -6s;
        }

        @keyframes floatOrb {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }

        /* ===== VIDEO SIDE - Fade In from Left ===== */
        .video-side {
          flex: 1;
          display: flex;
          justify-content: center;
          opacity: 0;
          transform: translateX(-80px);
          transition: all 1.2s cubic-bezier(0.23, 1, 0.32, 1);
          z-index: 1;
        }

        .video-side.animate {
          opacity: 1;
          transform: translateX(0);
        }

        .video-wrapper {
          width: 600px;
          height: 450px;
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.4),
            0 0 50px rgba(255, 110, 168, 0.25);
          cursor: grab;
        }

        .video-wrapper:active {
          cursor: grabbing;
        }

        .video-wrapper video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 24px;
          transition: transform 0.6s ease;
        }

        .video-wrapper:hover video {
          transform: scale(1.05);
        }

        .video-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 70% 40%, rgba(255, 110, 168, 0.2), transparent 70%);
          mix-blend-mode: overlay;
          pointer-events: none;
        }

        .video-glow {
          position: absolute;
          inset: -10px;
          border-radius: 34px;
          background: linear-gradient(45deg, #ff6ea8, #ffb547, #8f5cff, #ff6ea8);
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: -1;
          filter: blur(20px);
        }

        .video-wrapper:hover .video-glow {
          opacity: 0.6;
        }

        /* ===== TEXT SIDE - Fade In from Right ===== */
        .text-side {
          flex: 1;
          max-width: 580px;
          opacity: 0;
          transform: translateX(80px);
          transition: all 1.2s cubic-bezier(0.23, 1, 0.32, 1) 0.3s;
          z-index: 1;
        }

        .text-side.animate {
          opacity: 1;
          transform: translateX(0);
        }

        .tag {
          color: #ff6ea8;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 700;
          font-size: 14px;
          margin-bottom: 12px;
          display: inline-block;
          padding: 4px 12px;
          background: rgba(255, 110, 168, 0.15);
          border-radius: 8px;
          backdrop-filter: blur(8px);
        }

        .heading {
          font-size: 48px;
          font-weight: 900;
          line-height: 1.2;
          margin: 16px 0 24px;
          color: #ffffff;
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
        }

        .heading span {
          background: linear-gradient(90deg, #ff6ea8, #ffb547, #8f5cff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-style: italic;
          font-weight: 900;
          display: inline-block;
          padding: 0 4px;
        }

        .desc {
          color: #ffffffff;
          font-size: 17px;
          line-height: 1.8;
          margin-bottom: 40px;
          opacity: 0.95;
          font-weight: 500;
        }

        .btn-primary {
          background: linear-gradient(90deg, #ff6ea8, #ffb547, #8f5cff);
          border: none;
          color: #fff;
          font-weight: 700;
          font-size: 16px;
          padding: 16px 44px;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.4s ease;
          box-shadow: 
            0 8px 25px rgba(255, 110, 168, 0.4),
            0 0 30px rgba(255, 110, 168, 0.3);
          position: relative;
          overflow: hidden;
          z-index: 1;
        }

        .btn-primary::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: 0.6s;
          z-index: -1;
        }

        .btn-primary:hover::before {
          left: 100%;
        }

        .btn-primary:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 
            0 15px 35px rgba(255, 110, 168, 0.6),
            0 0 40px rgba(255, 110, 168, 0.5);
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 992px) {
          .about-section {
            flex-direction: column;
            text-align: center;
            padding: 100px 5%;
            gap: 50px;
          }

          .video-wrapper {
            width: 100%;
            max-width: 500px;
            height: 320px;
          }

          .text-side {
            max-width: 100%;
          }

          .heading {
            font-size: 38px;
          }

          .desc {
            font-size: 16px;
          }
        }

        @media (max-width: 768px) {
          .about-section {
            padding: 60px 4%;
            gap: 40px;
          }

          .video-wrapper {
            width: 100%;
            max-width: 100%;
            height: 280px;
          }

          .heading {
            font-size: 32px;
            line-height: 1.3;
          }

          .desc {
            font-size: 15px;
            line-height: 1.7;
          }

          .btn-primary {
            padding: 14px 36px;
            font-size: 15px;
          }
        }

        @media (max-width: 600px) {
          .about-section {
            padding: 50px 3%;
            gap: 30px;
          }

          .heading {
            font-size: 28px;
          }

          .tag {
            font-size: 12px;
          }

          .desc {
            font-size: 14px;
          }

          .btn-primary {
            padding: 12px 30px;
            font-size: 14px;
            width: 100%;
          }

          .video-wrapper {
            height: 240px;
          }
        }
      `}</style>
    </section>
  );
}