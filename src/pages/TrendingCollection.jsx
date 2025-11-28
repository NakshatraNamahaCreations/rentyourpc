// import React, { useState, useEffect, useRef } from "react";
// import "./TrendingCollection.css";

// // Images
// import p1 from "../assets/c1.jpg";
// import p2 from "../assets/c2.jpg";
// import p3 from "../assets/c3.jpg";
// import p4 from "../assets/c4.jpg";
// import p5 from "../assets/c5.jpg";
// import p11 from "../assets/c11.jpg";
// import p12 from "../assets/c12.png";
// import p13 from "../assets/c13.png";
// import p14 from "../assets/c14.jpg";
// import p15 from "../assets/c15.jpg";

// const TrendingCollection = () => {
//   const categories = [
//     "All",
//     "Laptop Rentals",
//     "Gaming PC / Workstation Rentals",
//     "Monitor Rentals",
//   ];

//   const [active, setActive] = useState("All");
//   const sectionRef = useRef(null);

//   // NORMAL PRODUCTS
//   const normalProducts = [
//     { id: 1, title: "Dell Latitude Pro 5420 (Intel i7, 16GB RAM)", category: "Laptop Rentals", status: "Available", img: p1 },
//     { id: 2, title: "HP EliteBook 840 G7 (Intel i5/i7, 8–16GB RAM)", category: "Laptop Rentals", status: "Limited Stock", img: p2 },
//     { id: 3, title: "Lenovo ThinkPad X1 Carbon Gen 9", category: "Laptop Rentals", status: "Available", img: p3 },
//     { id: 4, title: "Apple MacBook Pro 14\" M1/M2", category: "Laptop Rentals", status: "Last in stock", img: p4 },
//     { id: 5, title: "Acer Aspire 7 (Ryzen 5 / GTX 1650)", category: "Laptop Rentals", status: "Available", img: p5 },

//     // Monitor Rentals
//     { id: 11, title: "Dell UltraSharp U2419H – 24\" IPS Full HD", category: "Monitor Rentals", status: "Available", img: p11 },
//     { id: 12, title: "Samsung Curved LED 27\" Gaming (144Hz)", category: "Monitor Rentals", status: "Available", img: p12 },
//     { id: 13, title: "LG 32\" UHD 4K UltraFine Monitor", category: "Monitor Rentals", status: "Limited Stock", img: p13 },
//     { id: 14, title: "AOC 24\" Frameless IPS Full HD", category: "Monitor Rentals", status: "Available", img: p14 },
//     { id: 15, title: "BenQ DesignVue 27\" QHD Designer Monitor", category: "Monitor Rentals", status: "Available", img: p15 },
//   ];

//   // NEW ADVANCED WORKSTATION PACKAGES
//   const workstationPackages = [
//     {
//       packageName: "🚀 STARTER PACKAGE",
//       description: "Best for beginners in editing, CAD, development & light 3D work.",
//       color: "#4da3ff",
//       options: [
//         {
//           name: "Starter 1",
//           cpu: "Intel i7-8700",
//           ram: "16GB / 32GB / 64GB DDR4",
//           ssd: "512GB / 1TB SSD",
//           gpu: "4GB GTX 1050 Ti",
//           bestFor: "CAD modeling, basic editing, programming",
//         },
//         {
//           name: "Starter 2",
//           cpu: "Intel i5-8600 / i5-8500",
//           ram: "8GB / 16GB / 32GB DDR4",
//           ssd: "512GB / 1TB SSD",
//           gpu: "4GB GT 730",
//           bestFor: "Office work, simple CAD drawings",
//         },
//       ],
//     },

//     {
//       packageName: "💼 VALUE PACKAGE",
//       description: "Ideal for developers, engineers, designers, & 4K video editors.",
//       color: "#ffa24d",
//       options: [
//         {
//           name: "Value 1",
//           cpu: "Intel i7-10700",
//           ram: "16GB / 32GB / 64GB DDR4",
//           ssd: "512GB / 1TB SSD",
//           gpu: "RTX 3050 / RX 580 / RTX 4060 / RTX 4070 / 5060 Ti",
//           bestFor: "4K editing, mid-level 3D, BIM, game dev",
//         },
//         {
//           name: "Value 2",
//           cpu: "Intel i7-8700",
//           ram: "16GB / 32GB / 64GB DDR4",
//           ssd: "512GB / 1TB SSD",
//           gpu: "RTX 3050 / RX 580 / RTX 4060 / RTX 4070",
//           bestFor: "Rendering, motion graphics, engineering design",
//         },
//       ],
//     },

//     {
//       packageName: "🔥 PRO PACKAGE",
//       description: "Perfect for AI/ML, 8K editing, Unreal Engine & heavy simulation work.",
//       color: "#ff4d4d",
//       options: [
//         {
//           name: "Pro 1",
//           cpu: "Intel i7-13700 / i7-14700",
//           ram: "32GB / 64GB / 128GB DDR5",
//           ssd: "1TB / 2TB SSD",
//           gpu: "RTX 4060 / 4070 / 4070 Ti / 5060 Ti / 5070 Ti / 5080 / 5090",
//           bestFor: "AI training, VFX, 8K editing, ray tracing",
//         },
//         {
//           name: "Pro 2",
//           cpu: "Intel i9-13900K / i9-14900K",
//           ram: "32GB / 64GB / 128GB DDR5",
//           ssd: "1TB / 2TB SSD",
//           gpu: "RTX 4070 / 4070 Ti / 5060 Ti / 5070 Ti / 5080 / 5090",
//           bestFor: "Professional VFX, ML workloads, simulations",
//         },
//       ],
//     },
//   ];

//   // Scroll animation
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting)
//           entries[0].target.classList.add("in-view");
//       },
//       { threshold: 0.1 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="trending-section" ref={sectionRef}>
//       <div className="trending-header">
//         <h2>
//           <span className="gradient-text">OUR</span> PRODUCTS
//         </h2>
//         <p>Choose the perfect laptop, workstation, or monitor for your needs.</p>
//       </div>

//       {/* CATEGORY TABS */}
//       <div className="category-tabs">
//         {categories.map((c, i) => (
//           <button
//             key={c}
//             className={`tab-btn ${active === c ? "active" : ""}`}
//             onClick={() => setActive(c)}
//           >
//             {c}
//           </button>
//         ))}
//       </div>

//       {/* WORKSTATION PACKAGE UI */}
//       {active === "Gaming PC / Workstation Rentals" && (
//         <div className="package-container">
//           {workstationPackages.map((pkg, index) => (
//             <div className="package-card" key={index}>
              
//               <div
//                 className="package-header"
//                 style={{ background: pkg.color }}
//               >
//                 {pkg.packageName}
//               </div>

//               <p className="package-desc">{pkg.description}</p>

//               <div className="options-grid">
//                 {pkg.options.map((op, j) => (
//                   <div className="option-card" key={j}>
//                     <h3>{op.name}</h3>
//                     <ul className="spec-list">
//                       <li><strong>CPU:</strong> {op.cpu}</li>
//                       <li><strong>RAM:</strong> {op.ram}</li>
//                       <li><strong>Storage:</strong> {op.ssd}</li>
//                       <li><strong>Graphics:</strong> {op.gpu}</li>
//                     </ul>

//                     <p className="bestfor">
//                       <strong>Best For:</strong> {op.bestFor}
//                     </p>

//                     {/* Icons Row */}
//                     <div className="option-contact-row">
                      
//                       {/* WhatsApp */}
//                       <a
//                         href="https://wa.me/919019677359?text=Hi! I want details about your workstation packages."
//                         target="_blank"
//                         className="option-icon whatsapp"
//                       >
//                         <svg viewBox="0 0 24 24" fill="currentColor">
//                           <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.884 3.488" />
//                         </svg>
//                       </a>

//                       {/* Call */}
//                       <a href="tel:+919019677359" className="option-icon call">
//                         <svg viewBox="0 0 24 24" fill="currentColor">
//                           <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.75-.24 1.02l-2.2 2.2z" />
//                         </svg>
//                       </a>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//             </div>
//           ))}
//         </div>
//       )}

//       {/* NORMAL GRID */}
//       {active !== "Gaming PC / Workstation Rentals" && (
//         <div className="trending-grid">
//           {normalProducts
//             .filter((item) =>
//               active === "All" ? true : item.category === active
//             )
//             .slice(0, active === "All" ? 8 : 100)
//             .map((item, i) => (
//               <div className="trend-card" key={i}>
//                 <img src={item.img} alt="" />
//                 <h3>{item.title}</h3>
//                 <p className="stock">{item.status}</p>
//               </div>
//             ))}
//         </div>
//       )}
//     </section>
//   );
// };

// export default TrendingCollection;
import React, { useState, useEffect, useRef } from "react";
import "./TrendingCollection.css";

// Images – Normal Grid
import p1 from "../assets/c1.jpg";
import p2 from "../assets/c2.jpg";
import p3 from "../assets/c3.jpg";
import p4 from "../assets/c4.jpg";
import p5 from "../assets/c5.jpg";
import p11 from "../assets/c11.jpg";
import p12 from "../assets/c12.png";
import p13 from "../assets/c13.png";
import p14 from "../assets/c14.jpg";
import p15 from "../assets/c15.jpg";

const TrendingCollection = () => {
  const categories = [
    "Laptop Rentals",
    "Gaming PC / Workstation Rentals",
    "Monitor Rentals",
  ];

  const [active, setActive] = useState("Laptop Rentals");
  const sectionRef = useRef(null);

  // ================= LAPTOP CARDS ==================
  const laptopCategories = [
    {
      title: "💻 BASIC LAPTOPS",
      specs: ["Intel i5 (4th–6th Gen)", "8–16GB RAM", "256GB SSD", "14-inch Display"],
      brands: "Dell, HP, Lenovo",
      bestFor: "Online classes, MS Office, browsing, Zoom calls",
      features: "Lightweight, good battery, smooth performance",
      color: "#4da3ff",
    },
    {
      title: "🚀 MID-LEVEL LAPTOPS",
      specs: ["Intel i5 (6th–8th Gen)", "16GB RAM", "512GB SSD", "14-inch Display"],
      brands: "Dell, HP, Lenovo",
      bestFor: "Coding, accounting, multitasking, office work",
      features: "Fast SSD, great multitasking, business-ready",
      color: "#ffa24d",
    },
    {
      title: "🔥 GRAPHICS / DESIGNER LAPTOPS",
      specs: ["Intel i7 (7th–12th Gen)", "4–8GB Dedicated GPU", "SSD Storage"],
      brands: "Dell, Lenovo",
      bestFor: "Video editing, AutoCAD, 3D modeling, Photoshop",
      features: "High performance, dedicated GPU, fast rendering",
      color: "#ff4d4d",
    },
  ];

  // ================= MONITOR OPTIONS ==================
  const fullHDMonitors = [
    {
      title: `22" Full HD Monitor`,
      specs: ["1080p", "60Hz", "Brands: ViewSonic, Dell, Lenovo"],
      bestFor:
        "Office work, online classes, browsing, basic editing, CCTV monitoring",
    },
    {
      title: `24" Full HD Monitor`,
      specs: ["1080p", "60Hz", "Brands: Dell, ViewSonic, Acer"],
      bestFor: "Productivity, coding, accounting, document work",
    },
    {
      title: `27" Full HD Monitor`,
      specs: ["1080p", "100Hz", "Brands: ViewSonic, Acer"],
      bestFor: "Light gaming, content viewing, design previews",
    },
    {
      title: `27" Full HD Gaming Monitor`,
      specs: ["1080p", "144Hz", "Brands: ViewSonic, Acer"],
      bestFor: "Esports gaming, smooth motion video editing",
    },
  ];

  const twoKMonitors = [
    {
      title: `27" 2K Monitor`,
      specs: ["1440p", "120–144Hz", "Brands: ViewSonic, Acer"],
      bestFor: "Graphic design, video editing, high FPS gaming",
    },
    {
      title: `32" 2K Monitor`,
      specs: ["1440p", "120–144Hz", "Brands: ViewSonic, Acer"],
      bestFor: "Multitasking, CAD work, content creation",
    },
  ];

  // ================= GAMING PC PACKAGES ==================
  const workstationPackages = [
    {
      packageName: "🚀 STARTER PACKAGE",
      description: "Best for beginners in editing, CAD & development.",
      color: "#4da3ff",
      options: [
        {
          name: "Starter 1",
          cpu: "Intel i7-8700",
          ram: "16GB / 32GB / 64GB",
          ssd: "512GB / 1TB SSD",
          gpu: "4GB NVIDIA GTX 1050 Ti",
          bestFor: "Beginners in editing, CAD modeling, light rendering, programming",
        },
        {
          name: "Starter 2",
          cpu: "Intel i5-8600",
          ram: "8GB / 16GB / 32GB",
          ssd: "512GB / 1TB SSD",
          gpu: "4GB NVIDIA GT 730",
          bestFor: "Office work, basic design, small applications, simple CAD drawings",
        },
      ],
    },

    {
      packageName: "💼 VALUE PACKAGE",
      description: "Ideal for developers, designers & 4K editors.",
      color: "#ffa24d",
      options: [
        {
          name: "Value 1",
          cpu: "Intel i7-10700",
          ram: "16GB / 32GB / 64GB",
          ssd: "512GB / 1TB SSD",
          gpu: "8GB RTX 3050, 8GB RX 580, 8GB RTX 4060, 12GB RTX 4070, 16GB RTX 5060 Ti",
          bestFor: "4K editing, mid-level 3D work, professional design, game development, BIM",
        },
        {
          name: "Value 2",
          cpu: "Intel i7-8700",
          ram: "16GB / 32GB / 64GB",
          ssd: "512GB / 1TB SSD",
          gpu: "8GB RTX 3050, 8GB RX 580, 8GB RTX 4060, 12GB RTX 4070",
          bestFor: "High-performance design workloads, moderate rendering, 4K timelines",
        },
      ],
    },

    {
      packageName: "🔥 PRO PACKAGE",
      description: "Perfect for AI/ML, Unreal Engine & VFX.",
      color: "#ff4d4d",
      options: [
        {
          name: "Pro 1",
          cpu: "Intel i7-13700 / 14700",
          ram: "32GB / 64GB / 128GB DDR5",
          ssd: "1TB / 2TB SSD",
          gpu: "8GB RTX 4060, 12GB RTX 4070, 12GB 4070 Ti, 16GB 5060 Ti, 16GB 5070 Ti, 16GB 5080, 32GB 5090",
          bestFor: "8K editing, AI model training, complex engineering rendering, real-time ray tracing, Unreal Engine development",
        },
        {
          name: "Pro 2",
          cpu: "Intel i9-13900K / 14900K",
          ram: "32GB / 64GB / 128GB DDR5",
          ssd: "1TB / 2TB SSD",
          gpu: "12GB 4070, 12GB 4070 Ti, 16GB 5060 Ti, 16GB 5070 Ti, 16GB 5080, 32GB 5090",
          bestFor: "Maximum-power workstation tasks, large simulations, VFX, multi-layer compositing, ML workloads",
        },
      ],
    },
  ];

  // ================= SCROLL ==================
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) entries[0].target.classList.add("in-view");
    });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="trending-section" ref={sectionRef}>
      <div className="trending-header">
        <h2>
          <span className="gradient-text">OUR</span> PRODUCTS
        </h2>
        <p>Choose the perfect laptop rentals, workstation rentals, or monitor rentals for your needs.</p>
      </div>

      {/* CATEGORY TABS */}
      <div className="category-tabs">
        {categories.map((c) => (
          <button
            key={c}
            className={`tab-btn ${active === c ? "active" : ""}`}
            onClick={() => setActive(c)}
          >
            {c}
          </button>
        ))}
      </div>

      {/* ================= MONITOR TAB ================= */}
      {active === "Monitor Rentals" && (
        <>
          <h2 className="monitor-heading">1️⃣ FULL HD MONITORS (1080p)</h2>

          <div className="monitor-grid">
            {fullHDMonitors.map((m, i) => (
              <div className="monitor-card" key={i}>
                <h3 className="monitor-title">{m.title}</h3>

                <ul className="monitor-specs">
                  {m.specs.map((s, idx) => (
                    <li key={idx}>{s}</li>
                  ))}
                </ul>

                <p className="bestfor">
                  <strong>Best For:</strong> {m.bestFor}
                </p>

                <div className="option-contact-row">
                  <a href="https://wa.me/919019677359" target="_blank" className="option-icon whatsapp">
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                  <a href="tel:+919019677359" className="option-icon call">
                    <i className="fa-solid fa-phone"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <h2 className="monitor-heading">2️⃣ 2K MONITORS (1440p)</h2>

          <div className="monitor-grid">
            {twoKMonitors.map((m, i) => (
              <div className="monitor-card" key={i}>
                <h3 className="monitor-title">{m.title}</h3>

                <ul className="monitor-specs">
                  {m.specs.map((s, idx) => (
                    <li key={idx}>{s}</li>
                  ))}
                </ul>

                <p className="bestfor">
                  <strong>Best For:</strong> {m.bestFor}
                </p>

                <div className="option-contact-row">
                  <a href="https://wa.me/919019677359" target="_blank" className="option-icon whatsapp">
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                  <a href="tel:+919019677359" className="option-icon call">
                    <i className="fa-solid fa-phone"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* ================= LAPTOP TAB ================= */}
      {active === "Laptop Rentals" && (
        <div className="laptop-category-grid">
          {laptopCategories.map((item, index) => (
            <div className="laptop-card" key={index}>
              <div className="laptop-card-header" style={{ background: item.color }}>
                {item.title}
              </div>

              <ul className="laptop-details">
                <li><strong>Specs:</strong> {item.specs.join(", ")}</li>
                <li><strong>Brands:</strong> {item.brands}</li>
                <li><strong>Best For:</strong> {item.bestFor}</li>
                <li><strong>Features:</strong> {item.features}</li>
              </ul>

              <div className="option-contact-row laptop-contact">
                <a href="https://wa.me/919019677359" target="_blank" className="option-icon whatsapp">
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
                <a href="tel:+919019677359" className="option-icon call">
                  <i className="fa-solid fa-phone"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ================= GAMING ================= */}
      {active === "Gaming PC / Workstation Rentals" && (
        <div className="package-container">
          {workstationPackages.map((pkg, index) => (
            <div className="package-card" key={index}>
              <div className="package-header" style={{ background: pkg.color }}>
                {pkg.packageName}
              </div>

              <p className="package-desc">{pkg.description}</p>

              <div className="options-grid">
                {pkg.options.map((op, j) => (
                  <div className="option-card" key={j}>
                    <h3>{op.name}</h3>

                    <ul className="spec-list">
                      <li><strong>CPU :</strong> {op.cpu}</li>
                      <li><strong>RAM :</strong> {op.ram}</li>
                      <li><strong>Storage :</strong> {op.ssd}</li>
                      <li><strong>Graphics Options :</strong> {op.gpu}</li>
                    </ul>

                    <p className="bestfor"><strong>Best For :</strong> {op.bestFor}</p>

                    <div className="option-contact-row">
                      <a href="https://wa.me/919019677359" target="_blank" className="option-icon whatsapp">
                        <i className="fa-brands fa-whatsapp"></i>
                      </a>
                      <a href="tel:+919019677359" className="option-icon call">
                        <i className="fa-solid fa-phone"></i>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default TrendingCollection;
