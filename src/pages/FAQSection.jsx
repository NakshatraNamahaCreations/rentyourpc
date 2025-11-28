import React, { useState } from "react";
import "./FAQSection.css";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What is Rent Your PC?",
    answer:
      "Rent Your PC is a performance rental platform offering high-end desktops, laptops, and gaming rigs for professionals, gamers, and creators — without the cost of ownership.",
  },
  {
    question: "Why should I rent instead of buying?",
    answer:
      "Renting helps you access premium hardware instantly without upfront investment. You can upgrade anytime, use it short-term, or return when not needed.",
  },
  {
    question: "Do you provide delivery and installation?",
    answer:
      "Yes, our team delivers and sets up your rented system at your location — plug, play, and you’re good to go!",
  },
  {
    question: "What are the rental duration options?",
    answer:
      "We offer flexible rental plans monthly and yearly. You can extend or change plans anytime before renewal.",
  },
  {
    question: "Is there technical support?",
    answer:
      "Absolutely! Our expert support team is available via chat, call, or email to resolve all your hardware issue",
  },
  {
    question: "Can I upgrade or swap devices mid-rental?",
    answer:
      "Yes, upgrades or swaps are allowed anytime based on availability. Just contact support to make changes seamlessly.",
  },
  {
    question: "Do you offer corporate or bulk rentals?",
    answer:
      "Yes, we cater to startups, studios, and enterprises for team setups, events, and training sessions with custom bulk pricing.",
  },
  {
    question: "Is data security ensured after return?",
    answer:
      "Every returned device is completely data-wiped and securely reset to protect your privacy and business data.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
        
          <h2 className="faq-title">Frequently Asked Questions</h2>
        </div>

        <div className="faq-grid">
          {faqs.map((faq, i) => (
            <div
              className={`faq-card ${openIndex === i ? "open" : ""}`}
              key={i}
              onClick={() => toggleFAQ(i)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <div className="icon-box">
                  <FaChevronDown />
                </div>
              </div>
              <div
                className="faq-answer"
                style={{
                  maxHeight: openIndex === i ? "200px" : "0px",
                  opacity: openIndex === i ? 1 : 0,
                }}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
