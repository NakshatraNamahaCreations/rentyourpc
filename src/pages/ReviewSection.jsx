import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

/* ✅ Dummy Reviews — Replace with your actual data */
const reviews = [
  {
    name: "Arjun Prakash",
    img: "https://i.pravatar.cc/120?img=11",
    rating: 5,
    text: "Amazing experience renting a gaming PC! Got an RTX 4060 system and it performed flawlessly. Delivery was smooth and support team helped with setup instantly.",
    date: "2 weeks ago",
  },
  {
    name: "Megha R",
    img: "https://i.pravatar.cc/120?img=32",
    rating: 4,
    text: "Rented a high-end workstation for my project. Extremely clean system, top performance and no heating issues. Highly recommended!",
    date: "1 month ago",
  },
  {
    name: "Rahul Sharma",
    img: "https://i.pravatar.cc/120?img=48",
    rating: 5,
    text: "Super fast delivery! Got the PC within 3 hours. Customer service was very polite and helped me choose the right configuration for gaming.",
    date: "3 weeks ago",
  },
  {
    name: "Nikita B",
    img: "https://i.pravatar.cc/120?img=27",
    rating: 5,
    text: "This is the best PC rental service I’ve used! Smooth performance and zero lag even while streaming. Returning was also easy.",
    date: "5 weeks ago",
  },
  {
    name: "Karthik M",
    img: "https://i.pravatar.cc/120?img=18",
    rating: 4,
    text: "Affordable pricing and excellent quality systems. I rented for a tournament setup and everything worked perfectly.",
    date: "4 weeks ago",
  },
];

export default function ReviewSection() {
  return (
    <section
      style={{
        width: "100%",
        padding: "40px 0",
        background:
          "radial-gradient(circle at 20% 20%, #0a021a, #020008 80%)",
        color: "#fff",
        fontFamily: "Poppins, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* glowing background gradient blobs */}
      <div
        style={{
          position: "absolute",
          top: "-150px",
          right: "-120px",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(180,124,255,0.3), transparent 70%)",
          filter: "blur(120px)",
          zIndex: 0,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "-180px",
          left: "-120px",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(109,62,255,0.25), transparent 70%)",
          filter: "blur(120px)",
          zIndex: 0,
        }}
      ></div>

      {/* ✅ Heading */}
      <div style={{ textAlign: "center", marginBottom: 60, position: "relative", zIndex: 2 }}>
        <h2
          style={{
            fontSize: 36,
            fontWeight: 800,
            background: "linear-gradient(90deg, #b47cff, #6d3eff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 25px rgba(180,124,255,0.4)",
          }}
        >
          Loved by <span style={{ color: "#fff" }}>50K+ Customers</span> Across India!
        </h2>
        <p style={{ color: "#c4b8e9", marginTop: 10, fontSize: 15 }}>
          Average Rating <b>4.9 ⭐</b> — Trusted by 450+ verified users.
        </p>
      </div>

      {/* ✅ Review Carousel */}
      <div style={{ width: "90%", margin: "auto", position: "relative", zIndex: 2 }}>
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={3}
          spaceBetween={40}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            650: { slidesPerView: 2 },
            1100: { slidesPerView: 3 },
          }}
        >
          {reviews.map((rev, index) => (
            <SwiperSlide key={index}>
              <div
                className="review-card"
                style={{
                  background: "rgba(25, 15, 40, 0.8)",
                  padding: "40px 28px",
                  borderRadius: 20,
                  minHeight: 340,
                  border: "1px solid rgba(180,124,255,0.2)",
                  boxShadow: "0 10px 35px rgba(0,0,0,0.4)",
                  textAlign: "center",
                  transition: "0.4s ease",
                  position: "relative",
                  overflow: "hidden",
                  backdropFilter: "blur(8px)",
                }}
              >
                {/* Glow border gradient */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(135deg, rgba(180,124,255,0.15), rgba(109,62,255,0.1))",
                    opacity: 0,
                    transition: "0.4s ease",
                    zIndex: 0,
                  }}
                  className="review-hover-bg"
                ></div>

                {/* Profile */}
                <img
                  src={rev.img}
                  alt={rev.name}
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    margin: "auto",
                    marginBottom: 15,
                    border: "3px solid transparent",
                    background:
                      "linear-gradient(90deg, #b47cff, #6d3eff) border-box",
                    backgroundClip: "padding-box, border-box",
                    boxShadow: "0 0 20px rgba(180,124,255,0.25)",
                    position: "relative",
                    zIndex: 1,
                  }}
                />

                {/* Name */}
                <h4 style={{ margin: 0, fontSize: 18, zIndex: 1, position: "relative" }}>
                  {rev.name}
                </h4>

                {/* Rating */}
                <p
                  style={{
                    color: "#FFD542",
                    marginTop: 5,
                    fontSize: 16,
                    letterSpacing: 1,
                  }}
                >
                  {"⭐".repeat(rev.rating)}
                </p>

                {/* Review text */}
                <p
                  style={{
                    marginTop: 12,
                    fontSize: 14,
                    color: "#d9d1f3",
                    lineHeight: "22px",
                    zIndex: 1,
                    position: "relative",
                  }}
                >
                  {rev.text}
                </p>

                {/* Date */}
                <p
                  style={{
                    marginTop: 15,
                    color: "#a394c7",
                    fontSize: 13,
                    zIndex: 1,
                    position: "relative",
                  }}
                >
                  {rev.date}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ✅ Hover & Pagination Styles */}
      <style>{`
        .review-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 15px 45px rgba(180,124,255,0.35);
          border-color: rgba(180,124,255,0.6);
        }
        .review-card:hover .review-hover-bg {
          opacity: 1;
        }

        .swiper-pagination-bullet {
          background: linear-gradient(90deg, #b47cff, #6d3eff) !important;
          opacity: 0.4;
          transition: 0.3s;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          box-shadow: 0 0 10px rgba(180,124,255,0.7);
        }

        @media (max-width: 992px) {
          .review-card {
            padding: 30px 20px;
            min-height: 300px;
          }

          h2[style*="fontSize: 36"] {
            font-size: 28px !important;
          }

          p[style*="color: #c4b8e9"] {
            font-size: 14px !important;
          }
        }

        @media (max-width: 768px) {
          section[style*="padding: 40px 0"] {
            padding: 30px 0 !important;
          }

          div[style*="width: 90%"] {
            width: 95% !important;
          }

          .review-card {
            padding: 25px 18px;
            min-height: 280px;
          }

          h2[style*="fontSize: 36"] {
            font-size: 24px !important;
            padding: 0 15px;
          }

          p[style*="color: #c4b8e9"] {
            font-size: 13px !important;
            padding: 0 15px;
          }

          img[style*="width: 80"] {
            width: 70px !important;
            height: 70px !important;
          }

          h4[style*="fontSize: 18"] {
            font-size: 16px !important;
          }

          p[style*="fontSize: 14"][style*="color: #d9d1f3"] {
            font-size: 13px !important;
            line-height: 20px !important;
          }
        }

        @media (max-width: 480px) {
          .review-card {
            padding: 20px 15px;
            min-height: 260px;
          }

          h2[style*="fontSize: 36"] {
            font-size: 22px !important;
          }
        }
      `}</style>
    </section>
  );
}
