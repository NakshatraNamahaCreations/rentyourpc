

// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

// // PAGES
// import GamingBanner from "./pages/GamingBanner";
// import PopularCategory from "./pages/PopularCategory";
// import PromoCards from "./pages/PromoCards";
// import ReviewSection from "./pages/ReviewSection";
// import FeaturedOn from "./pages/FeaturedOn";
// import WhyChooseUs from "./pages/WhyChooseUs";
// import GamingShowcase from "./pages/GamingShowcase";
// import HeroGamingBanner from "./pages/HeroGamingBanner";
// import AboutRentPCSection from "./pages/AboutRentPCSection";
// import TrendingCollection from "./pages/TrendingCollection";
// import FAQSection from "./pages/FAQSection";

// // CUSTOM PAGES
// import AboutUs from "./pages/AboutUs";
// import Products from "./pages/Products";
// import Contact from "./pages/Contact";
// import LaptopRentalsPage from "../src/products/LaptopRentals";
// import GamingPCRentals from "../src/products/GamingPcRentals";
// import MonitorsRentals from "../src/products/MonitorsRentals";

// // POLICY PAGES (ADD THESE FILES)
// import RefundPolicy from "../src/policy/RefundPolicy";
// import TermsConditions from "../src/policy/TermsConditions";
// import ShippingPolicy from "../src/policy/ShippingPolicy";
// import ReturnPolicy from "../src/policy/ReturnPolicy";

// // VIDEO
// import VideoBackground from "./assets/video5.mp4";

// function App() {
//   return (
//     <>
//       <Header />

//       <Routes>

//         {/* HOME PAGE */}
//         <Route
//           path="/"
//           element={
//             <>
//               <GamingBanner />

//               {/* OPTIMIZED VIDEO BACKGROUND */}
//               <div className="video-background-container">
//                <video
//   className="video-bg"
//   preload="metadata"
//   playsInline
//   autoPlay
//   muted
//   loop
// >
//   <source src={VideoBackground} type="video/mp4" />
// </video>


//                 <div className="video-overlay"></div>

//                 <div className="video-content">
//                   <TrendingCollection />
//                   <AboutRentPCSection />
//                 </div>
//               </div>

//               <WhyChooseUs />
//               {/* <GamingShowcase /> */}
//               <HeroGamingBanner />
//               <FAQSection />
//               <FeaturedOn />
//               <ReviewSection />
//             </>
//           }
//         />

//         {/* ABOUT PAGE */}
//         <Route path="/about" element={<AboutUs />} />

//         {/* PRODUCT PAGES */}
//         <Route path="/products" element={<Products />} />
//         <Route path="/products/laptops" element={<LaptopRentalsPage />} />
//         <Route path="/products/gaming-pcs" element={<GamingPCRentals />} />
//         <Route path="/products/monitors" element={<MonitorsRentals />} />

//         {/* CONTACT */}
//         <Route path="/contact" element={<Contact />} />

//         {/* POLICY PAGES (NEW) */}
//         <Route path="/refund-policy" element={<RefundPolicy />} />
//         <Route path="/terms-conditions" element={<TermsConditions />} />
//         <Route path="/shipping-policy" element={<ShippingPolicy />} />
//         <Route path="/return-policy" element={<ReturnPolicy />} />

//       </Routes>

//       <Footer />
//     </>
//   );
// }

// export default App;
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";  // ⭐ Add this line

// PAGES
import GamingBanner from "./pages/GamingBanner";
import PopularCategory from "./pages/PopularCategory";
import PromoCards from "./pages/PromoCards";
import ReviewSection from "./pages/ReviewSection";
import FeaturedOn from "./pages/FeaturedOn";
import WhyChooseUs from "./pages/WhyChooseUs";
import GamingShowcase from "./pages/GamingShowcase";
import HeroGamingBanner from "./pages/HeroGamingBanner";
import AboutRentPCSection from "./pages/AboutRentPCSection";
import TrendingCollection from "./pages/TrendingCollection";
import FAQSection from "./pages/FAQSection";

// CUSTOM PAGES
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import LaptopRentalsPage from "../src/products/LaptopRentals";
import GamingPCRentals from "../src/products/GamingPcRentals";
import MonitorsRentals from "../src/products/MonitorsRentals";

// POLICY PAGES
import RefundPolicy from "../src/policy/RefundPolicy";
import TermsConditions from "../src/policy/TermsConditions";
import ShippingPolicy from "../src/policy/ShippingPolicy";
import ReturnPolicy from "../src/policy/ReturnPolicy";

// VIDEO
import VideoBackground from "./assets/video5.mp4";

function App() {
  return (
    <>
      <ScrollToTop /> {/* ⭐ FIXES OPEN FROM BOTTOM ISSUE */}

      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <GamingBanner />

              <div className="video-background-container">
                <video
                  className="video-bg"
                  preload="metadata"
                  playsInline
                  muted
                  autoPlay   // ⭐ add autoplay
                  loop
                >
                  <source src={VideoBackground} type="video/mp4" />
                </video>

           

                <div className="video-content">
                  <TrendingCollection />
                  <AboutRentPCSection />
                </div>
              </div>

              <WhyChooseUs />
              {/* <GamingShowcase /> */}
              <HeroGamingBanner />
              <FAQSection />
              <FeaturedOn />
              <ReviewSection />
            </>
          }
        />

        {/* OTHER ROUTES */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/laptops" element={<LaptopRentalsPage />} />
        <Route path="/products/gaming-pcs" element={<GamingPCRentals />} />
        <Route path="/products/monitors" element={<MonitorsRentals />} />
        <Route path="/contact" element={<Contact />} />

        {/* POLICY PAGES */}
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/return-policy" element={<ReturnPolicy />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
