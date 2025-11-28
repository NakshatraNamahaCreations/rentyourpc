import React from "react";
import bgVideo from "../assets/video3.mp4";

const HomePageWrapper = ({ children }) => {
  return (
    <div className="home-wrapper">
      <video
        className="home-bg-video"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="home-content">{children}</div>
    </div>
  );
};

export default HomePageWrapper;
