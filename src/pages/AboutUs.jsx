
import React, { useEffect, useRef } from "react";

import heroImg from "../assets/b1 .jpg";
import aboutImg from "../assets/c7.jpg";

import {
  FaBolt,
  FaLaptop,
  FaTools,
  FaShieldAlt,
  FaRocket,
  FaEye,
  FaGem,
  FaTruck,
  FaHeadset,
  FaUndo,
  FaLock,
  FaCogs ,
} from "react-icons/fa";

import FAQSection from "./FAQSection";

export default function AboutUs() {
  const heroRef = useRef(null);

  /* ───────── SCROLL REVEAL ───────── */
  useEffect(() => {
    const reveal = () => {
      document.querySelectorAll(".reveal").forEach((el) => {
        const winH = window.innerHeight;
        const top = el.getBoundingClientRect().top;
        const point = 120;
        if (top < winH - point) el.classList.add("active");
      });
    };

    const parallax = () => {
      if (heroRef.current) {
        const s = window.pageYOffset;
        heroRef.current.style.transform = `translateY(${s * 0.4}px)`;
      }
    };

    window.addEventListener("scroll", reveal);
    window.addEventListener("scroll", parallax);
    reveal();

    return () => {
      window.removeEventListener("scroll", reveal);
      window.removeEventListener("scroll", parallax);
    };
  }, []);

  return (
    <>
      {/* ================================
          HERO
      ================================ */}
      <section className="hero-section">
        <div className="hero-bg" ref={heroRef}></div>
        <div className="hero-overlay"></div>

        <div className="hero-content reveal">
          <h1 className="hero-title">
            <span className="gradient-text">ABOUT US</span>
          </h1>
        </div>

        <div className="hero-glow"></div>
      </section>

   

      {/* ===============================                     
          ABOUT COMPANY
      ================================ */}
      <section className="about-section reveal">
        <div className="about-grid">
          <div className="about-text">
              <p className="tag">ABOUT US</p>
            <h2 className="section-title">
              Smart Rentals For <span>Smarter Productivity</span>
            </h2>

            <p className="about-desc">
              Rent Your PC is India’s most reliable source for high-performance computer rentals.
Whether you're a gamer, developer, designer, or a corporate team, our systems deliver unmatched speed and stability.
            </p>

            <p className="about-desc">
            Our mission is to make premium technology accessible for everyone at affordable rental plans supported by exceptional service, premium components, and expert assistance.
            </p>
          </div>

          <div className="about-image reveal">
            <img src={aboutImg} alt="About Rent A PC" />
          </div>
        </div>
      </section>
   {/* ================================
          TRUST BAR  (SECOND SECTION)
      ================================ */}
      <section className="trust-section reveal">
        <div className="trust-container">
          {[
            {
              icon: <FaTruck size={26} />,
              title: "Fast Delivery",
              text: "Your devices delivered safely & on time.",
            },
           {
  icon: <FaTools size={22} />,
  title: "Optimized Performance",
  text: "Max speed tuning.",
},

            {
              icon: <FaUndo size={26} />,
              title: "Easy Returns",
              text: "Hassle-free return & replacement process.",
            },
            {
              icon: <FaLock size={26} />,
              title: "Secure Payments",
              text: "Your transactions are encrypted & protected.",
            },
          ].map((item, i) => (
            <div className="trust-box" key={i}>
              <div className="trust-icon">{item.icon}</div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* ================================
          MISSION – VISION – VALUES
      ================================ */}
      <section className="mvv-section reveal">
        <h2 className="section-title text-center">
          Our <span>Foundation</span>
        </h2>

        <div className="mvv-grid">
          {[
            {
              icon: <FaRocket size={40} />,
              title: "Mission",
              text: "Empowering individuals & businesses with powerful technology without heavy purchase costs.",
            },
            {
              icon: <FaEye size={40} />,
              title: "Vision",
              text: "To become India’s most trusted rental-tech brand through innovation, reliability & service.",
            },
            {
              icon: <FaGem size={40} />,
              title: "Values",
              text: "Transparency, performance, trust, and exceptional customer satisfaction.",
            },
          ].map((item, i) => (
            <div className="mvv-card" key={i}>
              <div className="mvv-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================================
          WHY CHOOSE US (PERFECT DESIGN)
      ================================ */}
      <section className="why-section reveal">
        <h2 className="section-title text-center">
          Why <span>Choose Us</span>
        </h2>

        <div className="why-grid">
          {[
            {
              icon: <FaLaptop size={40} />,
              title: "High-Performance Systems",
              text: "Each device is stress-tested & optimized for professional workloads.",
              color: "#ff6ea8",
            },
            {
              icon: <FaBolt size={40} />,
              title: "Flexible Rental Plans",
              text: "Choose daily, weekly or monthly rental plans as per your needs.",
              color: "#ffb547",
            },
            {
              icon: <FaTools size={40} />,
              title: "Pro-Level Assistance",
              text: "Expert technicians available for instant remote or onsite support.",
              color: "#47dfff",
            },
            {
              icon: <FaCogs  size={40} />,
              title: "Custom-Configured PCs",
              text: "Gaming PCs, and Graphic Workstations tailored to your needs and requirements.",
              color: "#8f5cff",
            },
          ].map((item, i) => (
            <div className="why-card" key={i} style={{ "--clr": item.color }}>
              <div className="why-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <div className="faq-wrapper reveal">
        <FAQSection />
      </div>

      {/* ================================
          STYLES
      ================================ */}
      <style>{`
        body { background:#000; color:#fff; font-family:'Poppins'; }

        /* HERO */
        .hero-section {
          height:45vh;
          position:relative;
          overflow:hidden;
          display:flex;
          justify-content:center;
          align-items:center;
          text-align:center;
        }

        .hero-bg {
          position:absolute;
          inset:0;
          background:url(${heroImg}) center/cover no-repeat;
          filter:brightness(0.4);
          transition:transform .3s ease;
        }

        .hero-overlay {
          position:absolute;
          inset:0;
        }

        .hero-title {
          font-size:52px;
          font-weight:bold;
        }

        .gradient-text {
          background:linear-gradient(90deg,#ff6ea8,#ffb547,#47dfff,#8f5cff);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
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

        .hero-subtitle {
          margin-top:12px;
          font-size:22px;
          color:#dbeafe;
        }

        .hero-glow {
          position:absolute;
          width:600px;
          height:600px;
          top:50%;
          left:50%;
          transform:translate(-50%, -50%);
          filter:blur(80px);
        }

 /* ==========================
      TRUST SECTION
========================== */
.trust-section {
  padding: 50px 6%;
  background: linear-gradient(135deg, #0a0a1f, #02010c);
  display: flex;
  justify-content: center;
}

.trust-container {
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  gap: 10px;
}

.trust-box {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  padding: 28px;
  border-radius: 18px;
  display: flex;
  gap: 10px;
  align-items: center;
  transition: all 0.35s ease;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

/* Hover Glow Border */
.trust-box::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 18px;
  padding: 2px;
  background: linear-gradient(90deg, #ff6ea8, #ffb547, #47dfff, #8f5cff);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: 0.4s ease;
}

.trust-box:hover::after {
  opacity: 1;
}

.trust-box:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 25px rgba(143, 92, 255, 0.35);
}

/* Icon Circle */
.trust-icon {
  width: 58px;
  height: 58px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.08);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffffff;
  font-size: 22px;
  transition: 0.3s;
  box-shadow: 0 0 12px rgba(255, 110, 168, 0.35);
 
}

.trust-box:hover .trust-icon {
  transform: scale(1.1);
  box-shadow: 0 0 25px rgba(255, 110, 168, 0.5);
}

/* Text */
.trust-box h4 {
  margin: 0;
  font-size: 18px;
  color: #ffffffff;
  font-weight: 600;
}

.trust-box p {
  margin: 2px 0 0;
  font-size: 14px;
  color: #ffffffff;
  line-height: 1.5;
}

/* Responsive */
@media (max-width: 1024px) {
  .trust-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .trust-container {
    grid-template-columns: 1fr;
  }
  .trust-section {
    padding: 50px 20px;
  }
}


        /* ABOUT */
        .about-section { padding:70px 6%; }
        .about-grid {
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:30px;
          align-items:center;
          max-width:1300px;
          margin:auto;
        }

        .section-title {
          font-size:42px;
          font-weight:800;
          margin-bottom:20px;
        }

        .section-title span {
          background:linear-gradient(90deg,#ff6ea8,#47dfff);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        .about-desc {
          font-size:17px;
          color:#cbd5e1;
          margin-bottom:20px;
          line-height:1.7;
        }

        .about-image img {
          width:100%;
          border-radius:20px;
          box-shadow:0 20px 40px rgba(0,0,0,0.4);
        }

        /* MVV */
        .mvv-section {
          padding:2px 30px;
          background:linear-gradient(135deg,#050315,#0a0a1f);
          margin-top:0px;
        }

        .mvv-grid {
          margin-top:50px;
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:10px;
        }

        .mvv-card {
          background:rgba(255,255,255,.06);
          border:1px solid rgba(255,255,255,.12);
          padding:25px;
          text-align:center;
          border-radius:20px;
        }

        .mvv-icon {
          width:70px;
          height:70px;
          border-radius:18px;
          background:rgba(255,255,255,0.1);
          margin:auto;
          margin-bottom:20px;
          display:flex;
          justify-content:center;
          align-items:center;
        }

        .mvv-card h3 {
          font-size:22px;
          margin-bottom:10px;
        }

        .mvv-card p {
          color:#cbd5e1;
          font-size:15px;
          line-height:1.6;
        }

        /* WHY CHOOSE US */
        .why-section {
          padding:0px 6%;
        }

        .why-grid {
          margin-top:50px;
          display:grid;
          grid-template-columns:repeat(4,1fr);
          gap:10px;
        }

        .why-card {
          background:rgba(255,255,255,0.05);
          border:1px solid rgba(255,255,255,0.1);
          padding:35px;
          text-align:center;
          border-radius:20px;
          transition:.3s;
        }

        .why-card:hover {
          transform:translateY(-10px);
          box-shadow:0 0 20px var(--clr);
          border-color:var(--clr);
        }

        .why-icon {
          width:75px;
          height:75px;
          border-radius:18px;
          background:rgba(255,255,255,0.1);
          display:flex;
          justify-content:center;
          align-items:center;
          margin:auto;
          margin-bottom:20px;
          color:var(--clr);
          box-shadow:0 0 16px var(--clr);
        }

        .why-card h3 {
          font-size:20px;
          margin-bottom:10px;
        }

        .why-card p {
          color:#cbd5e1;
          font-size:15px;
        }

        /* FAQ */
        .faq-wrapper {
          max-width:1500;
          margin:50px auto;
          padding:0 6%;
        }
.faq-section {
    width: 100%;
    background: #050511;
    color: #fff;
    font-family: "Poppins", sans-serif;
    padding: 0px 40px;
    display: flex;
    justify-content: center;
}
    .mvv-grid {
    margin-top: 22px;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 10px;
}
        /* REVEAL */
        .reveal { opacity:0; transform:translateY(50px); transition:1s; }
        .reveal.active { opacity:1; transform:translateY(0); }

        @media(max-width:1024px){
          .mvv-grid, .about-grid, .why-grid {
            grid-template-columns:1fr 1fr;
          }
          .hero-title { font-size:52px; }
        }

        @media(max-width:768px){
          .hero-section {
            height: 35vh;
          }

          .hero-title {
            font-size: 32px;
          }

          .about-section {
            padding: 50px 4%;
          }

          .mvv-grid, .about-grid, .why-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .section-title {
            font-size: 32px;
          }

          .about-desc {
            font-size: 15px;
          }

          .trust-section {
            padding: 40px 4%;
          }

          .trust-container {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .trust-box {
            padding: 20px;
          }

          .trust-icon {
            width: 50px;
            height: 50px;
            font-size: 20px;
          }

          .trust-box h4 {
            font-size: 16px;
          }

          .trust-box p {
            font-size: 13px;
          }

          .mvv-section {
            padding: 40px 4%;
          }

          .mvv-card {
            padding: 20px;
          }

          .mvv-icon {
            width: 60px;
            height: 60px;
          }

          .mvv-card h3 {
            font-size: 20px;
          }

          .mvv-card p {
            font-size: 14px;
          }

          .why-section {
            padding: 40px 4%;
          }

          .why-card {
            padding: 25px;
          }

          .why-icon {
            width: 65px;
            height: 65px;
          }

          .why-card h3 {
            font-size: 18px;
          }

          .why-card p {
            font-size: 14px;
          }

          .faq-wrapper {
            padding: 0 4%;
            margin: 40px auto;
          }

          .faq-section {
            padding: 0px 0px !important;
          }
        }

        @media(max-width: 480px) {
          .hero-title {
            font-size: 28px;
          }

          .section-title {
            font-size: 26px;
          }

          .about-section {
            padding: 40px 3%;
          }

          .trust-section {
            padding: 30px 3%;
          }

          .mvv-section {
            padding: 30px 3%;
          }

          .why-section {
            padding: 30px 3%;
          }

          .faq-wrapper {
            padding: 0 3%;
            margin: 30px auto;
          }

          .faq-section {
            padding: 0px 0px !important;
          }
        }
      `}</style>
    </>
  );
}
