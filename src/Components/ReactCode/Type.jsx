import React from "react";
import { TypeAnimation } from "react-type-animation";
import imgBack from "../../assets/images/coolImg.png";

import "../CssCode/Type.css";

function Type() {
  return (
    <div className="waveWrapper waveAnimation">
      
      <div className="waveWrapperInner bgTop">
        <div
          className="wave waveTop"
          style={{ backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-top.png')" }}
        ></div>

<div className="typeAnimationContainer">
      <img src={imgBack} alt="Book Cover" />
      {/* Animated Subtext */}
      <div className="animatedTextWrapper">
      
        <TypeAnimation
          sequence={[
            "Happy birthday Kutte",
            2000,
            "Happy birthday Kinder Dog",
            2000,
            "Happy birthday To you",
            2000,
          ]}
          wrapper="span"
          speed={60}
          repeat={Infinity}
          className="animatedText"
        />
      </div>
    </div>


      </div>
      <div className="waveWrapperInner bgMiddle">
        <div
          className="wave waveMiddle"
          style={{ backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-mid.png')" }}
        ></div>
      </div>

      
      <div className="waveWrapperInner bgBottom">
        <div
          className="wave waveBottom"
          style={{ backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-bot.png')" }}
        ></div>
      </div>
    </div>
  );
}

export default Type;
