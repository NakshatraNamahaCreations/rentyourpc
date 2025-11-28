import React, { useState, useEffect, useRef } from "react";
import {
  FiHeadphones,
  FiMail,
  FiMapPin,
  FiMonitor,
  FiCpu,
  FiSmartphone,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef();

  // CLOSE DROPDOWN WHEN CLICKING OUTSIDE
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <header className="header">

      {/* MOBILE MENU BACKDROP */}
      {mobileMenuOpen && (
        <div 
          className="mobile-menu-backdrop"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* TOP INFO BAR */}
      <div className="top-info-bar">
        <a href="tel:+919019677359" className="top-info-item">
          <FiHeadphones size={18} />
          <span>+91 9019677359</span>
        </a>

        <a href="mailto:sales@rentyourpc.com" className="top-info-item">
          <FiMail size={18} />
          <span>sales@rentyourpc.com</span>
        </a>

        <div className="top-info-item">
          <FiMapPin size={18} />
          <span>
           Cabin no. 1,4th floor,marvin leather experience centre,arekempanahalli, mavalli 5600119
          </span>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="main-header">

        {/* LOGO */}
        <Link to="/" className="gradient-logo">
          rent<span>your</span>pc
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* NAVIGATION */}
        <nav className={`nav-links ${mobileMenuOpen ? "mobile-open" : ""}`}>

          <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link>

          {/* PRODUCT DROPDOWN */}
          <div className="dropdown-wrapper" ref={dropdownRef}>
            <div
              className="dropdown-trigger"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Products
              <span className={`arrow ${dropdownOpen ? "open" : ""}`}></span>
            </div>

            {/* DROPDOWN MENU */}
            <div className={`menu ${dropdownOpen ? "show" : ""}`}>
              <Link
                to="/products/laptops"
                className="menu-item"
                onClick={() => {
                  setDropdownOpen(false);
                  setMobileMenuOpen(false);
                }}
              >
                <FiSmartphone className="menu-icon" />
                <span>Laptop Rentals</span>
              </Link>

              <Link
                to="/products/gaming-pcs"
                className="menu-item"
                onClick={() => {
                  setDropdownOpen(false);
                  setMobileMenuOpen(false);
                }}
              >
                <FiCpu className="menu-icon" />
                <span>Gaming PC / Workstation Rentals</span>
              </Link>

              <Link
                to="/products/monitors"
                className="menu-item"
                onClick={() => {
                  setDropdownOpen(false);
                  setMobileMenuOpen(false);
                }}
              >
                <FiMonitor className="menu-icon" />
                <span>Monitor Rentals</span>
              </Link>
            </div>
          </div>

          <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </nav>
      </div>

      {/* STYLES */}
      <style>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 5000 !important;
          background: rgba(10, 0, 31, 0.7);
          backdrop-filter: blur(12px);
          font-family: "Poppins", sans-serif;
        }

        /* TOP BAR */
        .top-info-bar {
          background: #111827;
          color: white;
          display: flex;
          justify-content: flex-end;
          gap: 35px;
          padding: 15px 40px;
          font-size: 14px;
        }

        @media (max-width: 768px) {
          .top-info-bar {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 8px 12px;
            padding: 6px 12px;
            font-size: 9px;
            justify-content: flex-start;
            align-items: flex-start;
          }

          .top-info-item {
            font-size: 9px;
            gap: 4px;
            flex-shrink: 0;
            align-items: flex-start;
            min-width: fit-content;
          }

          .top-info-item:last-child {
            flex: 1 1 100%;
            min-width: 100%;
          }

          .top-info-item span {
            font-size: 9px;
            line-height: 1.3;
            word-break: break-word;
            white-space: normal;
          }

          .top-info-item:not(:last-child) span {
            white-space: nowrap;
          }

          .top-info-item svg {
            flex-shrink: 0;
            width: 10px;
            height: 10px;
            margin-top: 2px;
          }
        }

        .top-info-item {
          display: flex;
          align-items: center;
          gap: 6px;
          opacity: 0.9;
          color: #fff;
          text-decoration: none;
        }

        /* MAIN HEADER */
        .main-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 40px;
          background: rgb(53, 52, 52);
          box-shadow: 0 2px 10px rgba(0,0,0,0.06);
          position: relative;
        }

        @media (max-width: 768px) {
          .main-header {
            padding: 12px 20px;
          }
        }

        @media (max-width: 480px) {
          .top-info-bar {
            padding: 5px 10px;
            font-size: 8px;
            gap: 6px 10px;
          }

          .top-info-item {
            font-size: 8px;
            gap: 3px;
          }

          .top-info-item span {
            font-size: 8px;
            line-height: 1.3;
          }

          .top-info-item svg {
            width: 9px;
            height: 9px;
            margin-top: 2px;
          }
        }

        /* LOGO */
        .gradient-logo {
          font-size: 34px;
          font-weight: 800;
          letter-spacing: 1px;
          text-decoration: none;
          background: linear-gradient(90deg, #ffb547, #ff6ea8, #8f5cff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .gradient-logo span {
          background: linear-gradient(90deg, #ff6ea8, #a762ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @media (max-width: 768px) {
          .gradient-logo {
            font-size: 24px;
          }
        }

         /* MOBILE MENU BUTTON */
         .mobile-menu-btn {
           display: none;
           background: rgba(255, 255, 255, 0.1);
           border: 1px solid rgba(255, 255, 255, 0.2);
           border-radius: 8px;
           color: #fff;
           cursor: pointer;
           z-index: 10001;
           padding: 8px 10px;
           transition: all 0.3s ease;
         }

         @media (max-width: 768px) {
           .mobile-menu-btn {
             display: flex;
             align-items: center;
             justify-content: center;
           }

           .mobile-menu-btn:hover {
             background: rgba(255, 110, 168, 0.2);
             border-color: rgba(255, 110, 168, 0.4);
             transform: scale(1.05);
             box-shadow: 0 4px 12px rgba(255, 110, 168, 0.3);
           }

           .mobile-menu-btn:active {
             transform: scale(0.95);
           }
         }

        /* NAV LINKS */
        .nav-links {
          display: flex;
          gap: 40px;
          align-items: center;
        }

        @media (max-width: 768px) {
          .nav-links {
            position: fixed;
            top: 70px;
            right: -400px;
            width: 320px;
            max-height: calc(100vh - 90px);
            background: linear-gradient(135deg, rgba(20, 0, 50, 0.95), rgba(10, 0, 31, 0.98));
            backdrop-filter: blur(25px);
            -webkit-backdrop-filter: blur(25px);
            flex-direction: column;
            align-items: flex-start;
            padding: 25px 0;
            gap: 8px;
            border-radius: 10px;
            border: 1px solid rgba(255, 110, 168, 0.3);
            box-shadow: 
              0 20px 60px rgba(0, 0, 0, 0.7),
              0 0 40px rgba(255, 110, 168, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.1);
            transition: right 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            z-index: 10000;
            overflow-y: auto;
            overflow-x: hidden;
            opacity: 0;
            transform: scale(0.9) translateX(20px);
          }

          .nav-links.mobile-open {
            right: 15px;
            opacity: 1;
            transform: scale(1) translateX(0);
          }

          /* Animated background glow effect */
          .nav-links::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: linear-gradient(45deg, #ff6ea8, #ffb547, #8f5cff, #ff6ea8);
            border-radius: 20px;
            opacity: 0;
            z-index: -1;
            filter: blur(8px);
            transition: opacity 0.3s ease;
          }

          .nav-links.mobile-open::before {
            opacity: 0.3;
            animation: borderGlow 3s ease-in-out infinite;
          }

          @keyframes borderGlow {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.5; }
          }
        }

        .nav-links a {
          text-decoration: none;
          color: #ffffff;
          font-weight: 500;
          font-size: 17px;
          transition: color 0.3s ease;
        }

        @media (max-width: 768px) {
          .nav-links a {
            width: calc(100% - 40px);
            margin: 0 20px;
            padding: 14px 18px;
            border-radius: 12px;
            font-size: 15px;
            font-weight: 500;
            position: relative;
            opacity: 0;
            transform: translateX(-20px);
            transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            border: 1px solid transparent;
            background: rgba(255, 255, 255, 0.03);
          }

          .nav-links.mobile-open a {
            opacity: 1;
            transform: translateX(0);
          }

          .nav-links.mobile-open a:nth-child(1) {
            transition-delay: 0.1s;
          }

          .nav-links.mobile-open a:nth-child(2) {
            transition-delay: 0.15s;
          }

          .nav-links.mobile-open a:nth-child(3) {
            transition-delay: 0.2s;
          }

          .nav-links.mobile-open a:nth-child(4) {
            transition-delay: 0.25s;
          }

          .nav-links a::before {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 3px;
            height: 0;
            background: linear-gradient(180deg, #ff6ea8, #8f5cff);
            border-radius: 0 3px 3px 0;
            transition: height 0.3s ease;
          }

          .nav-links a:hover {
            color: #fff;
            background: rgba(255, 110, 168, 0.18);
            border-color: rgba(255, 110, 168, 0.3);
            padding-left: 30px;
            transform: translateX(0);
            box-shadow: 0 4px 15px rgba(255, 110, 168, 0.2);
          }

          .nav-links a:hover::before {
            height: 60%;
          }
        }

         /* DROPDOWN */
         .dropdown-wrapper {
           position: relative;
           margin: 0;
           padding: 0;
         }

         @media (max-width: 768px) {
           .dropdown-wrapper {
             width: 100%;
             margin: 0;
             padding: 0;
           }
         }

         .dropdown-trigger {
           display: flex;
           align-items: center;
           gap: 6px;
           cursor: pointer;
           color: #ffffff;
           font-size: 17px;
           font-weight: 500;
           margin: 0;
           padding: 0;
         }

         @media (max-width: 768px) {
           .dropdown-trigger {
             width: calc(100% - 40px);
             margin: 0 20px;
             padding: 14px 18px;
             border-radius: 12px;
             font-size: 15px;
             margin-bottom: 8px;
             border: 1px solid transparent;
             background: rgba(255, 255, 255, 0.03);
             opacity: 0;
             transform: translateX(-20px);
             transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
           }

           .nav-links.mobile-open .dropdown-trigger {
             opacity: 1;
             transform: translateX(0);
             transition-delay: 0.2s;
           }

           .dropdown-trigger:hover {
             background: rgba(255, 110, 168, 0.18);
             border-color: rgba(255, 110, 168, 0.3);
             padding-left: 30px;
             transform: translateX(0);
           }
         }

        .arrow {
          width: 0;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 6px solid #ff6ea8;
          transition: transform 0.3s ease;
        }
        .arrow.open {
          transform: rotate(180deg);
        }

         /* DROPDOWN MENU */
         .menu {
           position: absolute;
           top: 100%;
           left: 50%;
           transform: translateX(-50%);
           width: 350px;
           background: rgba(20, 0, 50, 0.9);
           backdrop-filter: blur(20px);
           border: 1px solid rgba(255, 110, 168, 0.3);
           border-radius: 18px;
           padding: 10px 0;
           box-shadow: 0 20px 40px rgba(0,0,0,0.5);
           opacity: 0;
           visibility: hidden;
           pointer-events: none;
           transition: all 0.35s ease;
           z-index: 9999;
           margin: 0;
           max-height: 0;
           overflow: hidden;
         }

         @media (max-width: 768px) {
           .menu {
             position: static;
             transform: none;
             width: calc(100% - 40px);
             margin: 8px 20px 0;
             border-radius: 12px;
             background: rgba(255, 110, 168, 0.08);
             backdrop-filter: blur(10px);
             border: 1px solid rgba(255, 110, 168, 0.2);
             max-height: 0;
             padding: 0;
             overflow: hidden;
           }
         }

         .menu.show {
           opacity: 1;
           visibility: visible;
           pointer-events: auto;
           transform: translateX(-50%) translateY(10px);
           max-height: 500px;
           padding: 10px 0;
         }

         @media (max-width: 768px) {
           .menu.show {
             transform: none;
             margin-top: 8px;
             max-height: 500px;
             padding: 12px 0;
             animation: slideDown 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
           }

           @keyframes slideDown {
             from {
               opacity: 0;
               max-height: 0;
               transform: translateY(-10px);
             }
             to {
               opacity: 1;
               max-height: 500px;
               transform: translateY(0);
             }
           }
         }

         /* MENU ITEMS */
         .menu-item {
           padding: 14px 22px;
           display: flex;
           gap: 14px;
           align-items: center;
           text-decoration: none;
           color: #e0d9ff;
           transition: all 0.25s ease;
         }

         @media (max-width: 768px) {
           .menu-item {
             padding: 12px 18px;
             margin: 4px 8px;
             border-radius: 10px;
             opacity: 0;
             transform: translateX(-15px);
             transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
           }

           .menu.show .menu-item {
             opacity: 1;
             transform: translateX(0);
           }

           .menu.show .menu-item:nth-child(1) {
             transition-delay: 0.1s;
           }

           .menu.show .menu-item:nth-child(2) {
             transition-delay: 0.15s;
           }

           .menu.show .menu-item:nth-child(3) {
             transition-delay: 0.2s;
           }

           .menu-item:hover {
             background: rgba(255,110,168,0.18);
             color: white;
             padding-left: 30px;
             transform: translateX(0);
           }
         }

         .menu-item:hover {
           background: rgba(255,110,168,0.18);
           color: white;
           padding-left: 30px;
         }

         .menu-icon {
           font-size: 20px;
           background: linear-gradient(135deg, #ff6ea8, #8f5cff);
           -webkit-background-clip: text;
           -webkit-text-fill-color: transparent;
         }

         /* MOBILE MENU BACKDROP */
         .mobile-menu-backdrop {
           position: fixed;
           top: 0;
           left: 0;
           width: 100%;
           height: 100vh;
           background: rgba(0, 0, 0, 0.6);
           backdrop-filter: blur(4px);
           z-index: 9999;
           animation: fadeIn 0.3s ease;
         }

         @keyframes fadeIn {
           from {
             opacity: 0;
           }
           to {
             opacity: 1;
           }
         }
       `}</style>

    </header>
  );
};

export default Header;
