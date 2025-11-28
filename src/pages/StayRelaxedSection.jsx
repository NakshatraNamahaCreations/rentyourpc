import React from "react";
import { FaShieldAlt, FaTruck, FaHeadset, FaCheckCircle } from "react-icons/fa";
import "./StayRelaxedSection.css";

const StayRelaxedSection = () => {
  const features = [
    {
      icon: <FaShieldAlt />,
      title: "Zero Deposit",
      text: "Starting out is tough. That’s why we offer premium gear with zero deposit — rent freely, no friction.",
    },
    {
      icon: <FaTruck />,
      title: "Instant Deliveries",
      text: "No logistics hassle — we handle pickup and drop-off citywide. Get your gear delivered in 2–4 hours.",
    },
    {
      icon: <FaHeadset />,
      title: "Instant Prompt Help & Support",
      text: "Last-minute question or “bro, help!” moment? Real people, fast replies, no bots, no Monday waits.",
    },
    {
      icon: <FaCheckCircle />,
      title: "7-Point Inspection",
      text: "Every product passes a 7-point check — cleaned, tested, packed, and double-checked.",
    },
  ];

  return (
    <section className="relaxed-wrapper">
      <div className="relaxed-container">
        <h2 className="relaxed-title">Stay relaxed. While you rent</h2>
        <p className="relaxed-subtitle">
          For us, quality isn’t just a service — it’s a commitment. Every product we rent
          reflects our mission to make sharing exceptional, reliable, and truly worth
          experiencing.
        </p>

        <div className="relaxed-grid">
          {features.map((f, i) => (
            <div
              key={i}
              className="relaxed-card"
              style={{ animationDelay: `${i * 0.25}s` }}
            >
              <div className="relaxed-icon">{f.icon}</div>
              <div className="relaxed-info">
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StayRelaxedSection;
