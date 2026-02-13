import React from "react";
import { Gift, Heart } from "lucide-react";
import "../CssCode/LoadingScreen.css";

const LoadingScreen = () => {
  return (
    <div className="loading-container">
      <div className="loading-content">
        {/* Bouncing Gift Icon */}
        <div className="loading-icon-wrapper">
          <Gift size={60} className="loading-gift" color="#cc241d" />
          <Heart size={24} className="loading-heart" color="#ff8fa3" fill="#ff8fa3" />
        </div>

        {/* Text */}
        <h2 className="loading-text">Preparing your surprise...</h2>

        {/* Progress Bar */}
        <div className="progress-bar-container">
          <div className="progress-bar-fill"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;