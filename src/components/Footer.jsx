
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const [showNumber, setShowNumber] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCall = () => {
    setShowNumber(!showNumber);
  };

  return (
    <footer className="footer-main">

      {/* 🔹 TOP INFO BAR */}
      <div className="footer-topbar">
        <div className="footer-top-content">

          <div className="footer-contact-item">
            <FaPhoneAlt />
            <span>+91 9019677359</span>
          </div>

          <div className="footer-contact-item">
            <FaEnvelope />
            <span>sales@rentyourpc.com</span>
          </div>

          <div className="footer-contact-item">
            <FaMapMarkerAlt />
            <span>
              Cabin no. 1,4th floor,marvin leather experience centre,arekempanahalli, mavalli 560011
            </span>
          </div>

        </div>
      </div>

      {/* 🔹 MAIN FOOTER CONTENT */}
      <div className="footer-container">

        {/* LEFT SIDE */}
        <div className="footer-left">
          <Link to="/" className="footer-logo">
            rent<span>your</span>pc
          </Link>

          <p className="footer-desc">
            Rent Your PC delivers high performance laptops, workstations,
            gaming PCs, and premium monitors at affordable rental plans.
          </p>

          
        </div>

        {/* RIGHT SIDE LINKS */}
        <div className="footer-right">
          <div className="footer-col">
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/products">Products</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          <div className="footer-col">
            <h4>Laptop Rentals</h4>
            <Link to="/products/laptops">Office Laptops Rentals</Link>
            <Link to="/products/laptops">Editing Laptops Rentals</Link>
            <Link to="/products/laptops">High-Performance Laptops Rentals</Link>
          </div>

          <div className="footer-col">
            <h4>Gaming PCs Rentals</h4>
            <Link to="/products/gaming-pcs">Gaming PCs Rentals</Link>
            <Link to="/products/gaming-pcs">Editing Workstations Rentals</Link>
            <Link to="/products/gaming-pcs">Custom Builds Rentals</Link>
          </div>

          <div className="footer-col">
            <h4>Monitors Rentals</h4>
            <Link to="/products/monitors">Full HD Rentals</Link>
            <Link to="/products/monitors">144Hz Rentals</Link>
            <Link to="/products/monitors">4K UHD Rentals</Link>
          </div>
        </div>
      </div>

      {/* 🔹 BOTTOM COPYRIGHT & POLICIES */}
      <div className="footer-bottom">
        <p>© 2025 Rent Your PC. All rights reserved.</p>

        <div className="footer-policies">
          <Link to="/refund-policy">Refund Policy</Link>
          <Link to="/terms-conditions">Terms & Conditions</Link>
          <Link to="/shipping-policy">Shipping Policy</Link>
          <Link to="/return-policy">Return Policy</Link>
        </div>
      </div>

      {/* 🔹 FIXED FLOATING ACTION BUTTONS */}
      <button onClick={scrollToTop} className="floating-btn scroll-top-btn">
        <FaArrowUp />
      </button>

      <div className="call-btn-wrapper">
        <button 
          className="floating-btn call-btn"
          onClick={handleCall}
        >
          <FaPhoneAlt />
        </button>
        {showNumber && (
          <div className="call-number-display">
            +91 9019677359
          </div>
        )}
      </div>

      <a
        href="https://wa.me/919019677359?text=Hi! I want to rent a device."
        target="_blank"
        className="floating-btn whatsapp-btn"
      >
        <FaWhatsapp />
      </a>

      {/* 🔹 CSS */}
      <style jsx>{`
        .footer-main {
          background: #000;
          color: white;
          font-family: "Poppins", sans-serif;
          position: relative;
        }

        .footer-topbar {
          background: rgba(255, 110, 168, 0.1);
          padding: 12px 5%;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .footer-top-content {
          max-width: 1300px;
          margin: auto;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
        }

        .footer-contact-item {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #ccc;
          font-size: 14px;
        }

        .footer-contact-item svg {
          color: #ff6ea8;
        }

        .footer-container {
          max-width: 1300px;
          margin: auto;
          padding: 60px 5%;
          display: flex;
          justify-content: space-between;
          gap: 60px;
          flex-wrap: wrap;
        }

        .footer-left {
          width: 30%;
          min-width: 250px;
        }

        .footer-logo {
          font-size: 40px;
          font-weight: 900;
          background: linear-gradient(90deg, #ffb547, #ff6ea8, #8f5cff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-decoration: none;
        }

        .footer-logo span {
          background: linear-gradient(90deg, #ff6ea8, #a762ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .footer-desc {
          margin-top: 15px;
          color: #bfbfbf;
          line-height: 1.7;
        }

        .footer-contact-info {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-contact-link {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #ccc;
          text-decoration: none;
          font-size: 14px;
          transition: 0.2s;
        }

        .footer-contact-link:hover {
          color: #ff6ea8;
          transform: translateX(4px);
        }

        .footer-contact-link svg {
          color: #ff6ea8;
          flex-shrink: 0;
        }

        .footer-right {
          display: flex;
          // gap: 50px;
          flex-wrap: wrap;
        }

        .footer-col h4 {
          font-size: 18px !important;
          margin-bottom: 12px;
        }

        .footer-col a {
          display: block;
          margin: 8px 0;
          color: #ccc;
          font-size: 16px !important;
          text-decoration: none;
          transition: 0.2s;
        }

        .footer-col a:hover {
          color: #ff6ea8;
          transform: translateX(4px);
        }

        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding: 18px 5%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
        }

        .footer-policies {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .footer-policies a {
          color: #ff6ea8;
          font-size: 14px;
          text-decoration: none;
        }

        .footer-policies a:hover {
          color: #fff;
          text-decoration: underline;
        }

        /* Floating Buttons */
        .floating-btn {
          position: fixed;
          right: 20px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          font-size: 22px;
          box-shadow: 0 6px 15px rgba(0,0,0,0.3);
          z-index: 999;
          cursor: pointer;
          transition: transform 0.3s;
        }

        .floating-btn:hover {
          transform: scale(1.1);
        }

        .scroll-top-btn {
          bottom: 200px;
          background: #6c5ce7;
        }

        .call-btn {
          bottom: 130px;
          background: #00b894;
        }

        .whatsapp-btn {
          bottom: 60px;
          background: #25D366;
        }

        @media (max-width: 768px) {
          .footer-topbar {
            padding: 6px 3%;
          }

          .footer-top-content {
            flex-direction: column;
            align-items: flex-start;
            gap: 5px;
          }

          .footer-contact-item {
            font-size: 11px;
          }

          .footer-contact-item span {
            word-break: break-word;
          }

          .footer-container {
            padding: 25px 3%;
            flex-direction: column;
            gap: 20px;
          }

          .footer-left {
            width: 100%;
            min-width: auto;
            text-align: center;
          }

          .footer-logo {
            font-size: 24px;
          }

          .footer-desc {
            font-size: 12px;
            margin-top: 8px;
            line-height: 1.5;
          }

          .footer-contact-info {
            margin-top: 15px;
            gap: 8px;
            align-items: center;
          }

          .footer-contact-link {
            font-size: 11px;
            gap: 6px;
          }

          .footer-contact-link svg {
            width: 12px;
            height: 12px;
          }

          .footer-right {
            width: 100%;
            flex-direction: column;
            gap: 18px;
            align-items: flex-start;
          }

          .footer-col {
            width: 100%;
            min-width: auto;
          }

          .footer-col h4 {
            font-size: 13px;
            margin-bottom: 6px;
          }

          .footer-col a {
            font-size: 11px;
            margin: 3px 0;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
            gap: 8px;
            padding: 12px 3%;
          }

          .footer-bottom p {
            font-size: 11px;
          }

          .footer-policies {
            flex-direction: row;
            justify-content: center;
            gap: 10px;
            flex-wrap: wrap;
          }

          .footer-policies a {
            font-size: 10px;
          }

          .floating-btn {
            width: 45px;
            height: 45px;
            font-size: 18px;
            right: 15px;
          }

          .scroll-top-btn {
            bottom: 170px;
          }

          .call-btn {
            bottom: 90px;
            top:20px;
            left:5px;
          }

          .call-btn-wrapper {
            bottom: 90px;
            right: 15px;
          }

          .whatsapp-btn {
            bottom: 50px;
          }
        }

        @media (max-width: 480px) {
          .footer-topbar {
            padding: 3px 2%;
          }

          .footer-contact-item {
            font-size: 10px;
          }

          .footer-container {
            padding: 20px 2%;
            gap: 18px;
          }

          .footer-logo {
            font-size: 22px;
          }

          .footer-desc {
            font-size: 11px;
            margin-top: 6px;
          }

          .footer-contact-info {
            margin-top: 12px;
            gap: 6px;
          }

          .footer-contact-link {
            font-size: 10px;
            gap: 5px;
          }

          .footer-contact-link svg {
            width: 11px;
            height: 11px;
          }

          .footer-right {
            gap: 15px;
          }

          .footer-col h4 {
            font-size: 12px;
            margin-bottom: 5px;
          }

          .footer-col a {
            font-size: 10px;
            margin: 2px 0;
          }

          .footer-bottom {
            padding: 10px 2%;
            gap: 6px;
          }

          .footer-bottom p {
            font-size: 10px;
          }

          .footer-policies {
            gap: 8px;
          }

          .footer-policies a {
            font-size: 9px;
          }
        }

        /* CALL NUMBER DISPLAY */
        .call-btn-wrapper {
          position: fixed;
          right: 20px;
          bottom: 130px;
          z-index: 999;
        }

        .call-btn-wrapper .call-btn {
          position: relative;
          right: auto;
          bottom: auto;
        }

        .call-number-display {
          position: absolute;
          bottom: 60px;
          right: 0;
          background: linear-gradient(135deg, rgba(10, 0, 31, 0.95), rgba(20, 0, 50, 0.95));
          backdrop-filter: blur(10px);
          color: #ff6ea8;
          padding: 10px 15px;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 600;
          white-space: nowrap;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255, 110, 168, 0.3);
          animation: fadeInUp 0.3s ease;
          z-index: 1000;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .call-number-display::after {
          content: '';
          position: absolute;
          bottom: -5px;
          right: 20px;
          width: 10px;
          height: 10px;
          background: linear-gradient(135deg, rgba(10, 0, 31, 0.95), rgba(20, 0, 50, 0.95));
          border-right: 1px solid rgba(255, 110, 168, 0.3);
          border-bottom: 1px solid rgba(255, 110, 168, 0.3);
          transform: rotate(45deg);
        }

        @media (max-width: 480px) {
          .call-number-display {
            font-size: 14px;
            padding: 8px 12px;
            bottom: 55px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
