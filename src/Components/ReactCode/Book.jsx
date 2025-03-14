import React from "react";
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

import "../CssCode/Book.css";

const Book = () => {
  return (
    <>
      <h1 className="title">Hehe, Tere pe kitab bhi likhi hai.</h1>

      <h1 className="title"></h1>

      

      <div className="hero-section-wrap">
      <div className="book-container">


        








        {/* Yaha se animation chalu hai */}


        
         

        <input type="checkbox" id="checkbox-cover" />
        <input type="checkbox" id="checkbox-page1" />
        <input type="checkbox" id="checkbox-page2" />
        <input type="checkbox" id="checkbox-page3" />

        <div className="book">
          <div className="cover">
            <h1 className="cover-title">Click me</h1>
            <label htmlFor="checkbox-cover"></label>
          </div>

          <div className="page" id="page1">
            <div className="front-page">
              <p>
              May your day be filled with love, laughter, and the company of those who cherish you. Wishing you all the success and happiness that life has to offer. Enjoy your special day to the fullest!
              </p>
              <label className="next" htmlFor="checkbox-page1">
                Right
              </label>
            </div>
            <div className="back-page">
              <img src={image1} alt="Page 1" />
              <label className="prev" htmlFor="checkbox-page1">
                Left
              </label>
            </div>
          </div>

          <div className="page" id="page2">
            <div className="front-page">
              <h2>Page 2</h2>
              <p>
                Hehe, phli slide pe jada hi professional ho gya i guess. Bakki khush rah, hmesa. Esi bhokte rhna, aur uper wala tuje, inni saari khusiya de. Jinni ni bhi dikh ri unni shaari. 
              </p>
              <label className="next" htmlFor="checkbox-page2">
                Right
              </label>
            </div>
            <div className="back-page">
              <img src={image7} alt="Page 2" />
              <label className="prev" htmlFor="checkbox-page2">
                Left
              </label>
            </div>
          </div>

          <div className="box diagnoal-top-to-right"></div>
          <div className="box diagnoal-top-to-left"></div>
          <div className="box diagnoal-bottom-to-right"></div>
          <div className="box diagnoal-bottom-to-left"></div>
          <div className="box center-to-top"></div>

          <div className="page" id="page3">
            <div className="front-page">
              <h2>Page 3</h2>
              <p>
                Chal, ab is last slide pe aa hi gyi hai toh. It means ki tuje surprise pasnd aara hoga. Hope so, jsa bhi bna hai, im just trying this shit for the first time. Aur maybe i guess mai is se better tuje kya hi de sakta hu. Aur Yeah website tere pass hmesaa rahegi, as Yadu aur Kiran ki dosti ke naam, Hehe. Bye Bye.
              </p>
            </div>
          </div>

          <div className="back-cover"></div>
        </div>

        
        </div>
      </div>
    </>
  );
};

export default Book;
