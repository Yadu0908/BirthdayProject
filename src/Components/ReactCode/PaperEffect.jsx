import React, { useEffect } from "react";
import "../CssCode/PaperEffect.css";

import image1 from "../../assets/images/kiran/kiran1.png"
import image2 from "../../assets/images/kiran/kiran2.png"
import image3 from "../../assets/images/kiran/kiran3.png"
import image4 from "../../assets/images/kiran/kiran4.png"
import image5 from "../../assets/images/kiran/kiran5.png"
import image6 from "../../assets/images/kiran/kiran6.png"
import image7 from "../../assets/images/kiran/kiran7.png"
import image8 from "../../assets/images/kiran/kiran8.png" 
import image12 from "../../assets/images/kiran/kiran12.png"
import image13 from "../../assets/images/kiran/kiran13.png"
import image14 from "../../assets/images/kiran/kiran14.png"
import image15 from "../../assets/images/kiran/kiran15.png"
import image16 from "../../assets/images/kiran/kiran16.png"
import image17 from "../../assets/images/kiran/kiran17.png"
import image18 from "../../assets/images/kiran/kiran18.png"
import image19 from "../../assets/images/kiran/kiran19.png"
import image20 from "../../assets/images/kiran/kiran20.png"
import image22 from "../../assets/images/kiran/kiran22.png"
const PaperEffect = () => {
  useEffect(() => {
    let highestZ = 1;

    class Paper {
      holdingPaper = false;
      mouseTouchX = 0;
      mouseTouchY = 0;
      mouseX = 0;
      mouseY = 0;
      prevMouseX = 0;
      prevMouseY = 0;
      velX = 0;
      velY = 0;
      rotation = Math.random() * 30 - 15;
      currentPaperX = 0;
      currentPaperY = 0;
      rotating = false;

      init(paper) {
        document.addEventListener("mousemove", (e) => {
          if (!this.rotating) {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;

            this.velX = this.mouseX - this.prevMouseX;
            this.velY = this.mouseY - this.prevMouseY;
          }

          const dirX = e.clientX - this.mouseTouchX;
          const dirY = e.clientY - this.mouseTouchY;
          const dirLength = Math.sqrt(dirX * dirX + dirY * dirY);
          const dirNormalizedX = dirX / dirLength;
          const dirNormalizedY = dirY / dirLength;

          const angle = Math.atan2(dirNormalizedY, dirNormalizedX);
          let degrees = (180 * angle) / Math.PI;
          degrees = (360 + Math.round(degrees)) % 360;
          if (this.rotating) {
            this.rotation = degrees;
          }

          if (this.holdingPaper) {
            if (!this.rotating) {
              this.currentPaperX += this.velX;
              this.currentPaperY += this.velY;
            }
            this.prevMouseX = this.mouseX;
            this.prevMouseY = this.mouseY;

            paper.style.transform = `translateX(${this.currentPaperX}px) translateY(${this.currentPaperY}px) rotateZ(${this.rotation}deg)`;
          }
        });

        paper.addEventListener("mousedown", (e) => {
          if (this.holdingPaper) return;
          this.holdingPaper = true;

          paper.style.zIndex = highestZ;
          highestZ += 1;

          if (e.button === 0) {
            this.mouseTouchX = this.mouseX;
            this.mouseTouchY = this.mouseY;
            this.prevMouseX = this.mouseX;
            this.prevMouseY = this.mouseY;
          }
          if (e.button === 2) {
            this.rotating = true;
          }
        });
        window.addEventListener("mouseup", () => {
          this.holdingPaper = false;
          this.rotating = false;
        });
      }
    }

    const papers = Array.from(document.querySelectorAll(".paper"));
    papers.forEach((paper) => {
      const p = new Paper();
      p.init(paper);
    });
  }, []);

  return (

    <>
     <h1 className="title">Khelegi ?? FreeFire</h1>

      <h1 className="title"></h1>

    <div className="mainDiv">
      <div className="paper heart"></div>
      <div className="paper image">
        <p>Happy birthday kutte</p>
        <p>Always be happy😍</p>
        <img src={image18} alt={image22} className="image2"/>
      </div>
      <div className="paper image">
        <img src={image12} alt={image12} />
      </div>
      <div className="paper image">
        <p>Bas yeah wala last</p>
        <p> Hehehe ❤️</p>
        <img src={image8} alt={image8} className="image2"/>
      </div>
      <div className="paper red">
        <p className="p1">Bas ek baar hor </p>
        <p className="p2"> 😁 </p>
      </div>
      <div className="paper">
        <p className="p1">Jor laga ke Haisaaa !</p>
        <p className="p1">
          Amazing <span style={{ color: "red" }}>❤️</span>
        </p>
      </div>
      <div className="paper">
        <p className="p1">Drag the papers to move!</p>
      </div>
    </div>
  </>
  
  );
};

export default PaperEffect;
