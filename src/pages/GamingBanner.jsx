// import React from "react";
// import { FiStar } from "react-icons/fi";
// import videoFile from "../assets/v3.mp4";
// import gamingSetup from "../assets/c1.jpg";

// export default function GamingBanner() {
//   // ⭐ UPDATED PREMIUM 3-COLOR GRADIENT
//   const gradient = "linear-gradient(90deg, #ffb547, #ff6ea8, #8f5cff)";

//   return (
//     <section
//       style={{
//         width: "100%",
//         height: "100vh",
//         background: "radial-gradient(circle at 20% 20%, #0b0b13, #02050a 80%)",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         overflow: "hidden",
//         fontFamily: "Poppins, sans-serif",
//         color: "#fff",
//         position: "relative",
//       }}
//     >
//       {/* Animated Glow Background */}
//       <div
//         style={{
//           position: "absolute",
//           width: "600px",
//           height: "600px",
//           borderRadius: "50%",
//           background:
//             "radial-gradient(circle, rgba(255,181,71,0.28) 0%, rgba(0,0,0,0) 70%)",
//           top: "-120px",
//           left: "-100px",
//           filter: "blur(120px)",
//           animation: "floatGlow 12s ease-in-out infinite alternate",
//         }}
//       ></div>

//       <div
//         style={{
//           position: "absolute",
//           width: "450px",
//           height: "450px",
//           borderRadius: "50%",
//           background:
//             "radial-gradient(circle, rgba(143,92,255,0.25) 0%, rgba(0,0,0,0) 70%)",
//           bottom: "-120px",
//           right: "-100px",
//           filter: "blur(120px)",
//           animation: "floatGlow 14s ease-in-out infinite alternate-reverse",
//         }}
//       ></div>

//       {/* Grid Layout */}
//       <div
//         style={{
//           width: "100%",
//           height: "100%",
//           display: "grid",
//           gridTemplateColumns: "1.2fr 1fr 1.2fr",
//           gap: "25px",
//           padding: "40px 50px",
//           position: "relative",
//           zIndex: 3,
//         }}
//       >
//         {/* LEFT — VIDEO */}
//         <div
//           style={{
//             borderRadius: "20px",
//             overflow: "hidden",
//             position: "relative",
//             boxShadow: "0 0 45px rgba(255,110,168,0.35)",
//             transform: "translateY(0)",
//             animation: "floatY 6s ease-in-out infinite alternate",
//           }}
//         >
//           <video
//             src={videoFile}
//             muted
//             autoPlay
//             loop
//             playsInline
//             style={{
//               width: "100%",
//               height: "100%",
//               objectFit: "cover",
//             }}
//           />
//         </div>

//         {/* MIDDLE — FLOATING CARDS */}
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             gap: "20px",
//             justifyContent: "center",
//           }}
//         >
//           {/* UPDATED CARDS DATA */}
//           {[
//             {
//               title: "High Performance Graphic Workstation Rentals",
//               desc: (
//                 <>
//                   Rent the latest Graphic Workstation for a wide 
//                   variety of applications.
//                 </>
//               ),
//             },
//             {
//               title: "Instant Delivery",
//               desc: (
//                 <>
//                   Get high-end gaming PCs delivered
//                   <br />
//                   within <b>24 hours</b>.
//                 </>
//               ),
//             },
//             {
//               title: "Free Hardware Support",
//               desc: "Support available all over Bangalore city.",
//               icon: true,
//             },
//           ].map((card, i) => (
//             <div
//               key={i}
//               style={{
//                 background: "rgba(255,255,255,0.05)",
//                 padding: "28px",
//                 borderRadius: "18px",
//                 backdropFilter: "blur(12px)",
//                 border: "1px solid rgba(255,255,255,0.08)",
//                 boxShadow: "0 0 20px rgba(255,110,168,0.15)",
//                 transition: "transform 0.3s ease, box-shadow 0.3s ease",
//                 animation: `floatY ${8 + i * 2}s ease-in-out infinite alternate`,
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = "translateY(-6px)";
//                 e.currentTarget.style.boxShadow =
//                   "0 0 25px rgba(255,110,168,0.45)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = "translateY(0)";
//                 e.currentTarget.style.boxShadow =
//                   "0 0 20px rgba(255,110,168,0.2)";
//               }}
//             >
//               <h2
//                 style={{
//                   fontSize: card.icon ? "22px" : i === 0 ? "32px" : "26px",
//                   margin: 0,
//                   background: gradient,
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "10px",
//                   fontWeight: 700,
//                 }}
//               >
//                 {card.icon && <FiStar color="#ff6ea8" size={22} />}
//                 {card.title}
//               </h2>

//               <p style={{ marginTop: 10, color: "#ccc" }}>{card.desc}</p>
//             </div>
//           ))}
//         </div>

//         {/* RIGHT — HERO TEXT + IMAGE */}
//         <div
//           style={{
//             background: "rgba(12,12,12,0.85)",
//             borderRadius: "22px",
//             padding: "40px",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             boxShadow: "0 0 40px rgba(255,110,168,0.35)",
//             animation: "floatY 7s ease-in-out infinite alternate",
//             overflow: "hidden",
//           }}
//         >
//           <h1
//             style={{
//               fontSize: "48px",
//               fontWeight: 700,
//               lineHeight: "58px",
//               marginBottom: "20px",
//               background: gradient,
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               animation: "gradientMove 6s linear infinite",
//               backgroundSize: "250% auto",
//             }}
//           >
//             Gaming PC Rentals In Bangalore
//             <br />
//         Monitor <i>Rentals</i>
//             <br />
//           In  <b>Bangalore</b>
//           </h1>

//           <img
//             src={gamingSetup}
//             alt="Gaming Setup"
//             style={{
//               width: "100%",
//               marginTop: "20px",
//               borderRadius: "18px",
//               boxShadow: "0 0 25px rgba(255,110,168,0.4)",
//               transition: "transform 0.4s ease",
//             }}
//             onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
//             onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
//           />
//         </div>
//       </div>

//       {/* KEYFRAMES */}
//       <style>
//         {`
//           @keyframes floatY {
//             0% { transform: translateY(0px); }
//             100% { transform: translateY(-15px); }
//           }

//           @keyframes gradientMove {
//             0% { background-position: 0% 50%; }
//             100% { background-position: 200% 50%; }
//           }

//           @keyframes floatGlow {
//             0% { transform: translateY(0px) scale(1); opacity: 0.8; }
//             100% { transform: translateY(25px) scale(1.15); opacity: 1; }
//           }
//         `}
//       </style>
//     </section>
//   );
// }
import React from "react";
import { FiStar } from "react-icons/fi";
import videoFile from "../assets/v3.mp4";
import gamingSetup from "../assets/c1.jpg";

export default function GamingBanner() {
  const gradient = "linear-gradient(90deg, #ffb547, #ff6ea8, #8f5cff)";

  return (
    <section
      style={{
        width: "100%",
        minHeight: "100vh",      // ⭐ FIXED
        height: "auto",          // ⭐ FIXED
        padding: "30px 0",       // ⭐ FIXED
        background: "radial-gradient(circle at 20% 20%, #0b0b13, #02050a 80%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        overflow: "hidden",
        fontFamily: "Poppins, sans-serif",
        color: "#fff",
        position: "relative",
        marginBottom:'-100px'
      }}
    >

      {/* FLOATING LIGHTS */}
      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,181,71,0.28) 0%, rgba(0,0,0,0) 70%)",
          top: "-120px",
          left: "-80px",
          filter: "blur(120px)",
          animation: "floatGlow 12s ease-in-out infinite alternate",
          zIndex: 1,
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(143,92,255,0.25) 0%, rgba(0,0,0,0) 70%)",
          bottom: "-80px",
          right: "-100px",
          filter: "blur(120px)",
          animation: "floatGlow 14s ease-in-out infinite alternate-reverse",
          zIndex: 1,
        }}
      ></div>

      {/* GRID LAYOUT */}
      <div
        className="gaming-banner-grid"
        style={{
          width: "100%",
          maxWidth: "1500px",
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr 1.2fr",
          gap: "30px",
          padding: "40px 50px",
          position: "relative",
          zIndex: 5,
        }}
      >

        {/* LEFT — VIDEO */}
        <div
          className="video-container"
          style={{
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 0 45px rgba(255,110,168,0.35)",
            animation: "floatY 6s ease-in-out infinite alternate",
            minHeight: "250px",     // ⭐ prevents clipping
          }}
        >
          <video
            src={videoFile}
            muted
            autoPlay
            loop
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* MIDDLE — CARDS */}
        <div
          className="cards-container"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            justifyContent: "center",
            minHeight: "300px",
            marginTop:'-150px',   
            
            // ⭐ ensures correct height
          }}
        >
          {[
            {
              title: "High Performance Graphic Workstation Rentals",
              desc: "Rent the latest Graphic Workstation for a wide variety of applications.",
            },
            {
              title: "Instant Delivery",
              desc: "Get high-end gaming PCs delivered within 24 hours.",
            },
            {
              title: "Free Hardware Support",
              desc: "Support available all over Bangalore city.",
              icon: true,
            },
          ].map((card, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.05)",
                padding: "25px",
                borderRadius: "18px",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 20px rgba(255,110,168,0.15)",
                transition: "0.3s ease",
                animation: `floatY ${8 + i * 2}s ease-in-out infinite alternate`,
              }}
            >
              <h2
                style={{
                  fontSize: card.icon ? "22px" : i === 0 ? "28px" : "24px",
                  background: gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                {card.icon && <FiStar size={22} color="#ff6ea8" />} {card.title}
              </h2>

              <p style={{ marginTop: 10, color: "#ccc", fontSize: "15px" }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* RIGHT — HERO TEXT + IMAGE */}
        <div
          className="hero-text-container"
          style={{
            background: "rgba(12,12,12,0.85)",
            borderRadius: "22px",
           paddingTop:'25px',
           paddingBottom:"25px",
           paddingRight:"25px",
           paddingLeft:'25px',
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            boxShadow: "0 0 40px rgba(255,110,168,0.35)",
            animation: "floatY 7s ease-in-out infinite alternate",
            minHeight: "280px",     // ⭐ FIX
            overflow: "hidden",
          }}
        >
          <h1
            style={{
              fontSize: "42px",
              fontWeight: 700,
              lineHeight: "52px",
              background: gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundSize: "200% auto",
              animation: "gradientMove 6s linear infinite",
            }}
          >
            Gaming PC Rentals In Bangalore<br />
            Monitor Rentals<br />
            In <b>Bangalore</b>
          </h1>

          <img
            src={gamingSetup}
            alt="Gaming Setup"
            style={{
              width: "100%",
              borderRadius: "16px",
              marginTop: "15px",
              boxShadow: "0 0 25px rgba(255,110,168,0.4)",
              transition: "0.4s",
            }}
          />
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>
        {`
          @keyframes floatY {
            0% { transform: translateY(0); }
            100% { transform: translateY(-15px); }
          }
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
          }
          @keyframes floatGlow {
            0% { transform: translateY(0) scale(1); opacity: 0.8; }
            100% { transform: translateY(25px) scale(1.15); opacity: 1; }
          }

          @media (max-width: 1024px) {
            .gaming-banner-grid {
              grid-template-columns: 1fr !important;
              gap: 25px !important;
              padding: 30px 30px !important;
            }
          }

          @media (max-width: 768px) {
            section[style*="minHeight"] {
              min-height: auto !important;
              padding: 20px 0 !important;
            }

            .gaming-banner-grid {
              padding: 20px 15px !important;
              gap: 25px !important;
              display: flex !important;
              flex-direction: column !important;
            }
            
            .hero-text-container {
              order: 1 !important;
              width: calc(100% + 20px) !important;
              margin-top: 0 !important;
              margin-left: -10px !important;
              min-height: 220px !important;
              padding: 22px 12px !important;
            }

            .video-container {
              max-height: 250px !important;
              min-height: 200px !important;
              height: 250px !important;
              width: 100% !important;
              order: 2 !important;
            }

            .video-container video {
              height: 100% !important;
              object-fit: cover !important;
            }

            .cards-container {
              margin-top: 0 !important;
              min-height: auto !important;
              order: 3 !important;
              width: 100% !important;
            }

            

            .hero-text-container h1 {
              font-size: 24px !important;
              line-height: 32px !important;
              margin-bottom: 10px !important;
            }

            .hero-text-container img {
              margin-top: 10px !important;
              max-height: 250px !important;
              object-fit: cover !important;
            }

            section[style*="minHeight"] h1 {
              font-size: 28px !important;
              line-height: 36px !important;
            }

            section[style*="minHeight"] h2 {
              font-size: 20px !important;
            }

            section[style*="minHeight"] p {
              font-size: 14px !important;
            }
          }

          @media (max-width: 480px) {
            .hero-text-container {
              padding: 15px 18px !important;
              margin-left: -8px !important;
              width: calc(100% + 16px) !important;
            }

            .hero-text-container h1 {
              font-size: 20px !important;
              line-height: 28px !important;
            }

            .hero-text-container img {
              margin-top: 8px !important;
              max-height: 120px !important;
            }
          }

          @media (max-width: 480px) {
            .hero-text-container {
              min-height: 200px !important;
              padding: 20px 12px !important;
            }

            .video-container {
              max-height: 200px !important;
              min-height: 180px !important;
              height: 200px !important;
            }

            .cards-container {
              gap: 15px !important;
            }

            .cards-container > div {
              padding: 20px !important;
            }
          }
        `}
      </style>
    </section>
  );
}
