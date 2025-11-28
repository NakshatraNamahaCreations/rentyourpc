import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import "./Contact.css";
import bannerImg from "../assets/contacts.jpg"; // Add your banner image

const Contact = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -12,
      scale: 1.08,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const iconPulse = {
    pulse: {
      scale: [1, 1.2, 1],
      transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <section className="contact-section">
      {/* Animated Gradient Banner */}
      <div className="contact-banner" style={{ backgroundImage: `url(${bannerImg})` }}>
        <div className="banner-overlay"></div>
        <motion.h1
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="banner-title"
        >
          Get in Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="banner-subtitle"
        >
          We’re here to help — anytime, anywhere.
        </motion.p>
      </div>

      {/* Contact Info Cards */}
      <div className="contact-cards-container">
        {[
          {
            icon: FiPhone,
            title: "Phone",
            value: "+91 9019677359",
            color: "#b47cff",
            glow: "rgba(180, 124, 255, 0.6)",
          },
          {
            icon: FiMail,
            title: "Email",
            value: "sales@rentyourpc.com",
            color: "#ffe600",
            glow: "rgba(255, 230, 0, 0.6)",
          },
          {
            icon: FiMapPin,
            title: "Location",
            value: "Shop No 1, 15, 13th Cross Rd, Arekempanahalli, Wilson Garden, Bengaluru, Karnataka 560029",
            color: "#32984D",
            glow: "rgba(50, 152, 77, 0.6)",
          },
        ].map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: "-100px" }}
              className="contact-card"
              style={{
                "--card-glow": item.glow,
                "--icon-color": item.color,
              }}
            >
              <motion.div variants={iconPulse} animate="pulse" className="icon-wrapper">
                <Icon className="contact-icon" />
              </motion.div>
              <h3>{item.title}</h3>
              <p>{item.value}</p>
              <div className="card-glow"></div>
            </motion.div>
          );
        })}
      </div>
  {/* ⭐ GOOGLE MAP SECTION */}
      <div className="map-section">

        <div className="map-container">
          <iframe
            title="Google Map"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Shop%20No%201,%2015,%2013th%20Cross%20Rd,%20Arekempanahalli,%20Wilson%20Garden,%20Bengaluru,%20Karnataka%20560029&output=embed"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;