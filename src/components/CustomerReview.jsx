import React from 'react';

const CustomerReview = () => {
  return (
    <div className="review-container">
      <h2>CUSTOMER REVIEWS</h2>
      <p>Read testimonials from satisfied customers who have found the perfect Father's Day gift with us.</p>

      <div className="review-box">
      <div className="star-rating2">
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
          </div>
        <h3>Exactly what I needed</h3>
        <p className="review-text">
          "I purchased a Daddy Bracelet for my husband for Father's Day, and he absolutely loves it!<br/> The personalized
          engraving made it such a special gift, and the quality is outstanding.<br/>Thank you for helping me make his day
          extra special!"
        </p>
        
        <div className="reviewer-info">
          <img
            src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-qPGIlunyESavt-rv.png?v=1715938695" 
            alt="Reviewer"
            className="reviewer-image"
          />
          <div className="reviewer-details">
            <span className="reviewer-name">Maika C.</span>
            <span className="verified-badge">✔ Verified Buyer</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
