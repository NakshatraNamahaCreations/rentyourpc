// src/pages/LaptopRentalsPage.jsx
import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import p1 from "../assets/c1.jpg";
import p2 from "../assets/c2.jpg";
import p3 from "../assets/c3.jpg";
import p4 from "../assets/c4.jpg";
import p5 from "../assets/c5.jpg";

const LaptopRentalsPage = () => {
  // Data
  const laptops = [
    {
      id: 1,
      title: "Dell Latitude Pro 5420 (Intel i7, 16GB RAM)",
      spec: "Intel i7 • 16GB RAM • Business Pro",
      img: p1,
      
    },
    {
      id: 2,
      title: "HP EliteBook 840 G7 (Intel i5/i7, 8–16GB RAM)",
      spec: "Intel i5/i7 • 8–16GB RAM",
    
    
      img: p2,
      tag: "Office & Remote Work",
 
    },
    {
      id: 3,
      title: "Lenovo ThinkPad X1 Carbon Gen 9",
      spec: "Ultra-Light • Premium Build",
   
    
      img: p3,
      tag: "Executive Series",
  
    },
    {
      id: 4,
      title: 'Apple MacBook Pro 14" M1 / M2',
      spec: "M1/M2 • Creator Ready",
   
  
      img: p4,
      tag: "Video & Design",
    
    },
    {
      id: 5,
      title: "Acer Aspire 7 (Ryzen 5 / GTX 1650)",
      spec: "Ryzen 5 • GTX 1650 • Gaming",

     
      img: p5,
      tag: "Gaming & Editing",
     
    },
  ];

  // Helper
  const getStatusClass = (status) => {
    if (status === "Limited Stock") return "badge badge-warning";
    if (status === "Last in stock") return "badge badge-danger";
    return "badge badge-success";
  };

  // Build cards safely
  let cardsToRender = [];
  try {
    cardsToRender = laptops.map((item, index) => ({
      ...item,
      delay: index * 80, // animation delay
    }));
  } catch (err) {
    // If data fails, provide an empty fallback
    console.error("Failed to prepare laptop cards:", err);
    cardsToRender = [];
  }

  return (
    <section className="lr-page">
      {/* HERO */}
      <div className="lr-hero">
        <div className="lr-hero-bg" />
        <div className="lr-hero-content">
          <p className="lr-badge">Laptop Rentals</p>
          <h1>
            Power-Packed <span>Laptops</span> for Work & Play
          </h1>

          {/* Single-line banner description (required) */}
          <p className="lr-hero-line">
            Rent premium laptops for work, study or gaming — pay only for the days you use.
          </p>
        </div>
      </div>

      {/* GRID */}
      <div className="lr-container">
        <div className="lr-header-row">
       
         
        </div>

        <div className="lr-grid">
          {cardsToRender.length === 0 && (
            <div className="lr-empty">No items available right now. Please check back later.</div>
          )}

          {cardsToRender.map((item) => (
            <article
              key={item.id}
              className="lr-card"
              style={{ animationDelay: `${item.delay}ms` }}
            >
              <div className="lr-img-wrap" aria-hidden>
                <img src={item.img} alt={item.title} />
                <div className="lr-tag">{item.tag}</div>
              </div>

              <div className="lr-card-body">
                <div className="lr-status-row">
                  <span className={getStatusClass(item.status)}>{item.status}</span>
                
                </div>

                <h3 className="lr-title">{item.title}</h3>
                <p className="lr-spec">{item.spec}</p>

                <div className="lr-bottom-row">
                  <div className="lr-price-block">
                    <span className="lr-price">{item.price}</span>
              
                  </div>

                  <div className="lr-actions" role="group" aria-label={`Actions for ${item.title}`}>
                    {/* WhatsApp icon button */}
                    <a
                      className="lr-icon-btn whatsapp"
                      href={`https://wa.me/919019677359?text=Hi! I want to rent this laptop: ${encodeURIComponent(
                        item.title
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Contact via WhatsApp"
                      title="WhatsApp"
                    >
                      <FaWhatsapp />
                    </a>

                    {/* Phone icon button */}
                    <a
                      className="lr-icon-btn call"
                      href="tel:+919019677359"
                      aria-label="Call us"
                      title="Call"
                    >
                      <FaPhoneAlt />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        
      </div>

      {/* Styles */}
      <style>{`
        :root{
          --pink: #ff6ea8;
          --orange: #ffb547;
          --cyan: #47dfff;
          --purple: #8f5cff;
          --glass: rgba(255,255,255,0.06);
          --glass-2: rgba(255,255,255,0.08);
        }

        .lr-page{
          min-height: 100vh;
          background: radial-gradient(circle at top left, #0f0820 0%, #03020a 50%);
          color: #fff;
          font-family: "Poppins", sans-serif;
          padding-bottom: 80px;
        }

        /* HERO */
        .lr-hero{
          position: relative;
          padding: 100px 6% 40px;
          overflow: hidden;
        }
        .lr-hero-bg{
          position: absolute;
          inset: 0;
          background:
            radial-gradient(500px 300px at 5% 20%, rgba(255,110,168,0.08), transparent 20%),
            radial-gradient(400px 260px at 90% 30%, rgba(143,92,255,0.06), transparent 25%);
          pointer-events: none;
          z-index: 0;
        }
        .lr-hero-content{
          position: relative;
          z-index: 2;
          max-width: 900px;
        }
        .lr-badge{
          display:inline-block;
          padding:6px 14px;
          border-radius:999px;
          font-size:12px;
          border:1px solid rgba(255,255,255,0.08);
          background: rgba(0,0,0,0.35);
          margin-bottom:12px;
        }
        .lr-hero-content h1{
          font-size:48px;
          line-height:1.05;
          margin:6px 0 12px;
          font-weight:800;
        }
        .lr-hero-content h1 span{
          background: linear-gradient(90deg, var(--pink), var(--orange), var(--cyan), var(--purple));
          -webkit-background-clip:text;
          -webkit-text-fill-color: transparent;
        }

        /* Single-line hero description */
        .lr-hero-line{
          font-size:16px;
          color: #d1d5db;
          max-width: 760px;
          margin-top: 6px;
        }

        /* Container & header row */
        .lr-container{
          padding: 24px 6%;
          margin-top: 6px;
        }
        .lr-header-row{
          display:flex;
          justify-content:space-between;
          align-items:baseline;
          gap: 12px;
          margin-bottom: 18px;
        }
        .lr-header-row h2{
          margin:0;
          font-size:24px;
          font-weight:700;
        }
        .lr-header-row p{ margin:0; color:#9ca3af; font-size:14px; }

        /* GRID */
        .lr-grid{
          display:grid;
          grid-template-columns: repeat(3, minmax(0,1fr));
          gap: 22px;
        }

        /* Card */
        .lr-card{
          background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.04);
          overflow: hidden;
          display:flex;
          flex-direction:column;
          transition: transform .28s ease, box-shadow .28s ease, border-color .28s;
          will-change: transform;
          box-shadow: 0 8px 30px rgba(2,2,6,0.6);
          opacity:0;
          transform: translateY(18px);
          animation: lrFadeUp .6s ease forwards;
        }
        .lr-card:hover{
          transform: translateY(-8px);
          box-shadow: 0 26px 70px rgba(38,20,80,0.6);
          border-color: rgba(255,255,255,0.08);
        }

        /* Image */
        .lr-img-wrap{
          position:relative;
          height:220px;
          overflow:hidden;
          background: linear-gradient(90deg, rgba(255,110,168,0.04), rgba(143,92,255,0.03));
        }
        .lr-img-wrap img{
          width:100%;
          height:100%;
          object-fit:cover;
          transition: transform .9s cubic-bezier(.2,.9,.2,1);
        }
        .lr-card:hover .lr-img-wrap img{
          transform: scale(1.06);
        }
        .lr-tag{
          position:absolute;
          left:14px;
          bottom:12px;
          padding:6px 10px;
          border-radius:999px;
          font-size:12px;
          background: rgba(0,0,0,0.5);
          border: 1px solid rgba(255,255,255,0.06);
          color: #fff;
          backdrop-filter: blur(4px);
        }

        /* Body */
        .lr-card-body{
          padding:16px;
          display:flex;
          flex-direction:column;
          gap:10px;
        }
        .lr-status-row{
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:10px;
        }
        .badge{
          padding:6px 10px;
          border-radius:999px;
          font-size:12px;
          font-weight:700;
          letter-spacing:0.2px;
        }
        .badge-success{ background: rgba(34,197,94,0.12); color:#4ade80; border:1px solid rgba(34,197,94,0.06); }
        .badge-warning{ background: rgba(250,204,21,0.12); color:#facc15; border:1px solid rgba(250,204,21,0.06); }
        .badge-danger{ background: rgba(248,113,113,0.10); color:#fca5a5; border:1px solid rgba(248,113,113,0.06); }

        .lr-title{ font-size:16px; margin:0; font-weight:700; }
        .lr-spec{ margin:0; font-size:13px; color:#a5b4fc; }

        .lr-bottom-row{
          display:flex;
          justify-content:space-between;
          align-items:flex-end;
          gap:12px;
        }
        .lr-price-block{ display:flex; flex-direction:column; }
        .lr-price{ font-size:16px; font-weight:800; color: var(--orange); }
        .lr-price-note{ font-size:11px; color:#9ca3af; margin-top:4px; }

        /* Icon buttons (circle) */
        .lr-actions{
          display:flex;
          gap:10px;
          align-items:center;
        }
        .lr-icon-btn{
          width:44px;
          height:44px;
          display:inline-flex;
          align-items:center;
          justify-content:center;
          border-radius:50%;
          color:#fff;
          font-size:18px;
          transition: transform .18s ease, box-shadow .18s ease;
          border:1px solid rgba(255,255,255,0.06);
          background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
          cursor:pointer;
          text-decoration:none;
        }
        .lr-icon-btn.whatsapp{ background: linear-gradient(180deg, #25D366, #1fae4b); box-shadow: 0 6px 18px rgba(37,211,102,0.18); }
        .lr-icon-btn.call{ background: linear-gradient(180deg, #ff6ea8, #ff3f7a); box-shadow: 0 6px 18px rgba(255,110,168,0.18); }
        .lr-icon-btn:hover{ transform: translateY(-4px) scale(1.03); }

        .lr-footnote{ color:#9ca3af; font-size:13px; margin-top:22px; }

        .lr-empty{ padding:40px; text-align:center; color:#9ca3af; }

        @keyframes lrFadeUp{
          to { opacity:1; transform: translateY(0); }
        }

        /* Responsive */
        @media (max-width: 1100px){
          .lr-grid{ grid-template-columns: repeat(2, minmax(0,1fr)); }
          .lr-hero-content h1{ font-size:40px; }
        }
        @media (max-width: 768px){
          .lr-hero{ 
            padding: 70px 4% 30px; 
          }

          .lr-hero-content h1{ 
            font-size: 32px;
            line-height: 1.2;
          }

          .lr-hero-line {
            font-size: 14px;
          }

          .lr-container {
            padding: 20px 4%;
          }

          .lr-grid{ 
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .lr-card {
            margin-bottom: 10px;
          }

          .lr-img-wrap {
            height: 200px;
          }

          .lr-title {
            font-size: 15px;
          }

          .lr-spec {
            font-size: 12px;
          }

          .lr-icon-btn {
            width: 40px;
            height: 40px;
            font-size: 16px;
          }
        }

        @media (max-width: 480px){
          .lr-hero{ 
            padding: 60px 3% 25px; 
          }

          .lr-hero-content h1{ 
            font-size: 26px;
          }

          .lr-hero-line {
            font-size: 13px;
          }

          .lr-container {
            padding: 15px 3%;
          }
        }
      `}</style>
    </section>
  );
};

export default LaptopRentalsPage;
