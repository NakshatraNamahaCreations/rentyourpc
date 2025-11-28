// import React from "react";
// import {
//   FaShieldAlt,
//   FaBolt,
//   FaHeadset,
//   FaCheckCircle,
// } from "react-icons/fa";

// export default function WhyChooseUs() {
//   const features = [
//     {
//       icon: <FaShieldAlt size={38} color="#b47cff" />,
//       title: "Damage Protection",
//       text: "Play freely with full protection — accidental damage coverage ensures your gaming never stops.",
//     },
//     {
//       icon: <FaBolt size={38} color="#b47cff" />,
//       title: "Instant Delivery",
//       text: "Need a setup today? Get your high-performance rig delivered within hours, ready to dominate.",
//     },
//     {
//       icon: <FaHeadset size={38} color="#b47cff" />,
//       title: "24/7 Tech Support",
//       text: "Our real specialists (not bots) are online round-the-clock to keep your gameplay flawless.",
//     },
//     {
//       icon: <FaCheckCircle size={38} color="#b47cff" />,
//       title: "Premium Checked PCs",
//       text: "Each system is stress-tested, cleaned and benchmarked before delivery for ultimate reliability.",
//     },
//   ];

//   return (
//     <section className="why-choose-wrapper">
//       <div className="content">
//         {/* TITLE */}
//         <h2 className="neon-title">Stay relaxed. While you rent</h2>
//         <p className="subtitle">
//           For us, quality isn’t just a service — it’s a commitment. Every product we rent reflects
//           our mission to make sharing exceptional, reliable, and truly worth experiencing.
//         </p>

//         {/* FEATURES GRID */}
//         <div className="grid">
//           {features.map((f, i) => (
//             <div
//               key={i}
//               className="feature-card"
//               style={{ animationDelay: `${i * 0.25}s` }}
//             >
//               <div className="icon-wrap">{f.icon}</div>
//               <div>
//                 <h3>{f.title}</h3>
//                 <p>{f.text}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* STYLES */}
//       <style>{`
//         .why-choose-wrapper {
//           position: relative;
//           width: 100%;
//           padding: 30px 0;
//           background: radial-gradient(circle at 30% 20%, #080510 0%, #000000 100%);
//           font-family: 'Poppins', sans-serif;
//           display: flex;
//           justify-content: center;
//           color: #fff;
//           overflow: hidden;
//         }

//         .content {
//           width: 85%;
//           max-width: 1150px;
//           text-align: center;
//           position: relative;
//           z-index: 2;
//         }

//         /* BACKGROUND LIGHT EFFECTS */
//         .why-choose-wrapper::before,
//         .why-choose-wrapper::after {
//           content: "";
//           position: absolute;
//           border-radius: 50%;
//           filter: blur(100px);
//           z-index: 0;
//         }

//         .why-choose-wrapper::before {
//           width: 400px;
//           height: 400px;
//           top: -80px;
//           left: -100px;
//           background: radial-gradient(circle, rgba(180,124,255,0.2), transparent 70%);
//           animation: floatGlow 7s ease-in-out infinite alternate;
//         }

//         .why-choose-wrapper::after {
//           width: 400px;
//           height: 400px;
//           bottom: -120px;
//           right: -100px;
//           background: radial-gradient(circle, rgba(109,62,255,0.2), transparent 70%);
//           animation: floatGlow 9s ease-in-out infinite alternate;
//         }

//         @keyframes floatGlow {
//           0% { transform: translateY(0); opacity: 0.8; }
//           100% { transform: translateY(-20px); opacity: 1; }
//         }

//         /* TITLE */
//         .neon-title {
//           font-size: 36px;
//           font-weight: 700;
//           background: linear-gradient(90deg, #b47cff, #6d3eff);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           margin-bottom: 18px;
//           animation: fadeDown 0.8s ease forwards;
//           text-transform: uppercase;
//           letter-spacing: 0.5px;
//         }

//         .subtitle {
//           color: #b8c4cf;
//           font-size: 16px;
//           line-height: 1.7;
//           max-width: 780px;
//           margin: 0 auto 60px;
//           animation: fadeDown 1s ease forwards;
//         }

//         /* GRID */
//         .grid {
//           display: grid;
//           grid-template-columns: repeat(2, 1fr);
//           gap: 50px 80px;
//           justify-items: start;
//         }

//         .feature-card {
//           display: flex;
//           align-items: flex-start;
//           gap: 22px;
//           text-align: left;
//           opacity: 0;
//           animation: fadeUp 0.8s ease forwards;
//           transition: transform 0.4s ease;
//           padding: 10px;
//           border-left: 3px solid transparent;
//         }

//         .feature-card:hover {
//           transform: translateY(-6px);
//           border-left: 3px solid #b47cff;
//         }

//         .icon-wrap {
//           background: linear-gradient(135deg, #b47cff, #6d3eff);
//           width: 56px;
//           height: 56px;
//           border-radius: 14px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           box-shadow: 0 0 25px rgba(180, 124, 255, 0.35);
//           flex-shrink: 0;
//           transition: transform 0.4s ease, box-shadow 0.4s ease;
//         }

//         .feature-card:hover .icon-wrap {
//           transform: scale(1.1) rotate(6deg);
//           box-shadow: 0 0 35px rgba(109, 62, 255, 0.6);
//         }

//         .feature-card h3 {
//           font-size: 18px;
//           font-weight: 600;
//           margin: 0 0 8px 0;
//           color: #fff;
//           transition: color 0.3s ease;
//         }

//         .feature-card p {
//           font-size: 15px;
//           line-height: 1.6;
//           color: #b8c4cf;
//         }

//         .feature-card:hover h3 {
//           color: #b47cff;
//         }

//         /* ANIMATIONS */
//         @keyframes fadeUp {
//           0% { opacity: 0; transform: translateY(25px); }
//           100% { opacity: 1; transform: translateY(0); }
//         }

//         @keyframes fadeDown {
//           0% { opacity: 0; transform: translateY(-20px); }
//           100% { opacity: 1; transform: translateY(0); }
//         }

//         /* RESPONSIVE */
//         @media (max-width: 900px) {
//           .grid { grid-template-columns: 1fr; gap: 40px; }
//           .neon-title { font-size: 30px; }
//           .subtitle { font-size: 15px; margin-bottom: 45px; }
//         }
//       `}</style>
//     </section>
//   );
// }
import React from "react";
import {
  FaShieldAlt,
  FaBolt,
FaTools,
  FaCheckCircle,
  FaCogs,
} from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaCogs size={38} color="#ff6ea8" />, // Pink gradient tone
      title: "Custom-Configured PCs",
      text: "Gaming PCs, and Graphic Workstations tailored to your needs and requirements.",
    },
    {
      icon: <FaBolt size={38} color="#ffb547" />, // Yellow-orange glow
      title: "Instant Delivery",
      text: "Need a setup today? Get your high-performance rig delivered within hours, ready to dominate.",
    },
  {
  icon: <FaTools size={38} color="#47dfff" />, // Technical Assistance Icon
  title: "Pro-Level Technical Assistance",
  text: "Get instant help from trained professionals who optimize your device for esports-level performance, anytime you need it.",
},

    {
      icon: <FaCheckCircle size={38} color="#8f5cff" />, // Purple highlight
      title: "Premium Checked PCs",
      text: "Each system is stress tested, cleaned and benchmarked before delivery for ultimate reliability.",
    },
  ];

  return (
    <section className="why-choose-wrapper">
      <div className="content">
        {/* TITLE */}
        <h2 className="neon-title">Stay relaxed. While you rent</h2>
        <p className="subtitle">
          For us, quality isn’t just a service it’s a commitment. Every product we rent reflects
          our mission to make sharing exceptional, reliable, and truly worth experiencing.
        </p>

        {/* FEATURES GRID */}
        <div className="grid">
          {features.map((f, i) => (
            <div
              key={i}
              className="feature-card"
              style={{ animationDelay: `${i * 0.25}s` }}
            >
              <div className="icon-wrap">{f.icon}</div>
              <div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* STYLES */}
      <style>{`
        .why-choose-wrapper {
          position: relative;
          width: 100%;
          padding: 30px 0 50px 0px;
          background: linear-gradient(180deg, #020202 0%, #090513 40%, #000000 100%);
          font-family: 'Poppins', sans-serif;
          display: flex;
          justify-content: center;
          color: #fff;
          overflow: hidden;
        }

        /* Soft RGB Glows in Background */
        .why-choose-wrapper::before,
        .why-choose-wrapper::after {
          content: "";
          position: absolute;
          width: 480px;
          height: 480px;
          border-radius: 50%;
          filter: blur(150px);
          opacity: 0.35;
        }

        .why-choose-wrapper::before {
          top: -120px;
          left: -130px;
          background: radial-gradient(circle, rgba(255,110,168,0.5), transparent 70%);
          animation: floatGlow 6s ease-in-out infinite alternate;
        }

        .why-choose-wrapper::after {
          bottom: -150px;
          right: -130px;
          background: radial-gradient(circle, rgba(143,92,255,0.4), transparent 70%);
          animation: floatGlow 8s ease-in-out infinite alternate;
        }

        @keyframes floatGlow {
          0% { transform: translateY(0); }
          100% { transform: translateY(-25px); }
        }

        .content {
          width: 85%;
          max-width: 1150px;
          text-align: center;
          position: relative;
          z-index: 2;
        }

        /* TITLE */
        .neon-title {
          font-size: 42px;
          font-weight: 800;
          background: linear-gradient(90deg, #ff6ea8, #ffb547, #8f5cff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 18px;
          animation: fadeDown 0.8s ease forwards;
          text-transform: uppercase;
        }

        .subtitle {
          color: #c0cad8;
          font-size: 17px;
          line-height: 1.8;
          max-width: 780px;
          margin: 0 auto 65px;
          animation: fadeDown 1s ease forwards;
        }

        /* GRID */
        .grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 55px 90px;
          justify-items: start;
        }

        .feature-card {
          display: flex;
          align-items: flex-start;
          gap: 25px;
          text-align: left;
          opacity: 0;
          animation: fadeUp 0.8s ease forwards;
          padding: 16px;
          border-left: 3px solid transparent;
          transition: all 0.4s ease;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          border-left: 3px solid #ff6ea8;
        }

        .icon-wrap {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 25px rgba(255, 110, 168, 0.25);
          transition: all 0.4s ease;
        }

        .feature-card:hover .icon-wrap {
          transform: scale(1.12) rotate(4deg);
          box-shadow: 0 0 28px rgba(255,110,168,0.6);
        }

        .feature-card h3 {
          font-size: 20px;
          font-weight: 600;
          margin: 0 0 10px 0;
          color: #ffffff;
          transition: color 0.3s ease;
        }

        .feature-card:hover h3 {
          color: #ff6ea8;
        }

        .feature-card p {
          font-size: 15.5px;
          line-height: 1.7;
          color: #c0cad8;
        }

        /* ANIMATIONS */
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeDown {
          0% { opacity: 0; transform: translateY(-25px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .neon-title { font-size: 32px; }
          .subtitle { font-size: 15px; margin-bottom: 45px; }
        }
      `}</style>
    </section>
  );
}
