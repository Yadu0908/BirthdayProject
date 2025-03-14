import React, { useEffect } from "react";
import "../CssCode/Music.css"

function Music() {
  return (

    <div className="wrapper">
      <div className="scene">
        <div className="envelope">
          <div className="envelope__flap"></div>
          <div className="envelope__back"></div>
          <div className="letter">
            <div className="letter__content">
              <div className="letter__illustration">
                <svg viewBox="0 0 130 130">
                  <circle cx="65" cy="40" r="15" fill="#fff" stroke="#000" strokeWidth="2" />
                  <circle cx="65" cy="70" r="20" fill="#fff" stroke="#000" strokeWidth="2" />
                  <circle cx="65" cy="105" r="25" fill="#fff" stroke="#000" strokeWidth="2" />
                  <circle cx="60" cy="35" r="2" fill="#000" />
                  <circle cx="70" cy="35" r="2" fill="#000" />
                  <path d="M60 45 Q65 50, 70 45" stroke="#000" strokeWidth="2" fill="none" />
                  <line x1="65" y1="60" x2="65" y2="80" stroke="#000" strokeWidth="2" />
                  <line x1="50" y1="75" x2="80" y2="75" stroke="#000" strokeWidth="2" />
                </svg>
              </div>
              <p className="letter__text">Happy Holidays!</p>
            </div>
          </div>
        </div>
        <div className="stamp">
          <svg viewBox="0 0 50 50">
            <rect x="5" y="5" width="40" height="40" fill="#d33" stroke="#000" strokeWidth="2" />
            <text x="25" y="25" textAnchor="middle" fill="#fff" fontSize="12" fontFamily="Arial">
              Stamp
            </text>
          </svg>
        </div>
      </div>
    </div>

  );
}

export default Music;
