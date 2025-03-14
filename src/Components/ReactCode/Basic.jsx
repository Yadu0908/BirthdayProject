import React from "react";
import Book from "./Book";
import Type from "./Type";
import PaperEffect from "./PaperEffect";
import Wishes from "./Wishes";
import Test from "./Test";
import "../CssCode/Basic.css";
import "./Review"
import Navbar from "./Navbar";
import Review from "./Review";

function Basic() {
  return (
    <>
      <div className="mobile-warning">
        <h2>⚠️ Only available for desktop version</h2>
        <p>Aree yr chrome pe three dot's pe jaao, aur scroll krke Desktop mode pe switch kro. Website open ho jaayegi.</p>
      </div>

      <div className="container">
        <div className="box"></div>
        <Type />
        <Test />
        <Book />
        <PaperEffect />
        <Wishes className="wishesClass" />
        <Review />
        {/* <Music /> */}
        <Navbar />
      </div>
    </>
  );
}

export default Basic;
