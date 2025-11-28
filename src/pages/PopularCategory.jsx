import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// IMAGES
import c1 from "../assets/c1.jpg";
import c2 from "../assets/c2.jpg";
import c3 from "../assets/c3.jpg";

const data = [
  { name: "Laptop Rentals", count: "+40", img: c1 },
  { name: "Gaming PC / Graphic Workstation Rentals", count: "+28", img: c2 },
  { name: "Monitor Rentals", count: "+35", img: c3 },
];

export default function PopularCategory() {
  return (
    <section className="pop-section">
      {/* LEFT SIDE – TEXT */}
      <div className="left-box">
        <h2 className="title">Our Category</h2>
        <p
          style={{
            color: "white",
            fontSize: "18px",
            lineHeight: "1.7",
            marginBottom: "40px",
          }}
        >
          Choose from our most popular rental categories — whether you're a
          gamer, designer, or business user, we have the perfect system for your
          needs.
        </p>
      </div>

      {/* RIGHT SIDE – SLIDER */}
      <div className="slider-wrapper">
        <Swiper
          className="pop-swiper"
          modules={[Autoplay]}
          loop={true}
          grabCursor={true}
          spaceBetween={40}
          slidesPerView={3}
          speed={900}
          autoplay={{ delay: 2200, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1.1, spaceBetween: 16 },
            480: { slidesPerView: 1.4, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          {data.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="cat-card">
                <div className="circle">
                  <img src={item.img} alt={item.name} />
                  <span className="count">{item.count}</span>
                </div>
                <p className="cat-name">{item.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* TRANSPARENT GLASS STYLES */}
      <style jsx>{`
        .pop-section {
          width: 100%;
          padding: 30px 20px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          font-family: "Poppins", sans-serif;
          background: transparent !important;
          position: relative;
          z-index: 1;
        }

        /* LEFT TEXT */
        .left-box {
          width: 28%;
          min-width: 260px;
          padding-right: 20px;
        }

        .title {
          font-size: 45px;
          font-weight: 700;
          background: linear-gradient(90deg, #ffb547, #ff6ea8, #8f5cff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 18px;
        }

        /* RIGHT SLIDER */
        .slider-wrapper {
          width: 65%;
        }

        .pop-swiper {
          padding: 60px 10px;
        }

        /* CARD – GLASS EFFECT */
        .cat-card {
          text-align: center;
          cursor: pointer;
          transition: all 0.35s ease;
          padding: 16px;
          border-radius: 20px;
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.28);
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        .cat-card:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.14);
          box-shadow: 0 15px 35px rgba(255, 105, 180, 0.25);
          border-color: rgba(255, 105, 180, 0.3);
        }

        .circle {
          width: 210px;
          height: 210px;
          margin: 0 auto;
          border-radius: 50%;
          overflow: hidden;
          position: relative;
          border: 2px solid rgba(255, 255, 255, 0.2);
          transition: all 0.4s ease;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
        }

        .circle img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .cat-card:hover .circle img {
          transform: scale(1.1);
        }

        .count {
          position: absolute;
          top: 10px;
          right: -8px;
          background: linear-gradient(90deg, #ffb547, #ff6ea8, #8f5cff);
          color: #fff;
          font-weight: 600;
          font-size: 12px;
          padding: 8px 12px;
          border-radius: 999px;
          box-shadow: 0 0 12px rgba(255, 110, 168, 0.5);
        }

        .cat-name {
          margin-top: 18px;
          font-size: 20px;
          font-weight: 700;
          color: #ffffffff;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        }

        /* RESPONSIVE */
        @media (max-width: 992px) {
          .pop-section {
            flex-direction: column;
            text-align: center;
            padding: 60px 20px;
          }
          .left-box {
            width: 100%;
            margin-bottom: 40px;
          }
          .slider-wrapper {
            width: 100%;
          }
          .circle {
            width: 180px;
            height: 180px;
          }
        }

        @media (max-width: 480px) {
          .title {
            font-size: 32px;
          }
          .circle {
            width: 150px;
            height: 150px;
          }
        }
      `}</style>
    </section>
  );
}