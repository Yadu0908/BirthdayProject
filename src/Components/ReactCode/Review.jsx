import React, { useState } from "react";
import "../CssCode/Review.css"

function Review() {
  const [review, setReview] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("review", review);

    try {
      const response = await fetch("https://formbold.com/s/67pwB", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Review Submitted!");
        setReview("");
      } else {
        alert("Failed to submit review.");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    <div className="review-container">
      {/* Blob Background */}
      <div className="blobContainer">
        <div className="blob-c">
          <div className="shape-blob"></div>
          <div className="shape-blob one"></div>
          <div className="shape-blob two"></div>
          <div className="shape-blob three"></div>
          <div className="shape-blob four"></div>
          <div className="shape-blob five"></div>
          <div className="shape-blob six"></div>
        </div>
      </div>

      {/* Review Box */}
      <div className="review-box">
        <h2 className="review-title"> "Kida lagya mere kutte ?" </h2>

        {/* Form for review submission */}
        <form onSubmit={handleSubmit} className="review-form">
          <textarea
            className="input-field textarea-field"
            placeholder="Write your review..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          ></textarea>

          <button type="submit" className="submit-btn">
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
}

export default Review;
