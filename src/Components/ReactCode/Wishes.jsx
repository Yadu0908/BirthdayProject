import React from "react";
import "../CssCode/Wishes.css";
// import image2 from "../../assets/images/img2.png";

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

function Wishes() {
  return (
    <div className="container">
       <h1 className="title">Teri khud ki self obsessed pics.</h1>

      <h1 className="title"></h1>
      <section className="collage">
        <div>
          <img src={image1} alt="Image 1" />
        </div>
        <div>
          <img src={image3} alt="Image 2" />
        </div>
        <div>
          <img src={image3} alt="Image 3" />
        </div>
        <div aria-hidden="true"></div>
        
        <div>
          <img src={image20} alt="Image 4" />
        </div>
        <div aria-hidden="true"></div>
        <div>
          <img src={image5} alt="Image 5" />
        </div>
        <div aria-hidden="true"></div>
        <div aria-hidden="true"></div>
        <div>
          <img src={image6} alt="Image 6" />
        </div>
        <div>
          <img src={image7} alt="Image 7" />
        </div>
        <div>
          <img src={image8} alt="Image 8" />
        </div>

        <div aria-hidden="true"></div>
        <div>
          <img src={image12} alt="Image 6" />
        </div>
        <div>
          <img src={image13} alt="Image 7" />
        </div>
        <div>
          <img src={image14} alt="Image 8" />
        </div>
        <div>
          <img src={image15} alt="Image 1" />
        </div>
        <div>
          <img src={image16} alt="Image 2" />
        </div>
      </section>
    </div>
  );
}

export default Wishes;
