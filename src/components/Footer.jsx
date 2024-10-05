import React from 'react';

const Footer = () => {
  return (
    <div className="footer-section3">
      {/* Quality, Shipping, Service Section */}
      <div className="service-section3">
        <div className="service-card3">
          <img src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-vnN9J4F1CHicon-ft-fd1.png?v=1716170405" alt="Quality Assurance" className="service-icon3" />
          <h3>Quality Assurance</h3>
          <p>Our bracelets are handcrafted with attention to detail and undergo rigorous quality checks.</p>
        </div>
        <div className="service-card3">
          <img src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-XhPHwGo61bicon-ft-fd2.png?v=1716170424" alt="Fast Shipping" className="service-icon3" />
          <h3>Fast Shipping</h3>
          <p>Enjoy fast and reliable shipping to ensure your gift arrives in time for Father’s Day.</p>
        </div>
        <div className="service-card3">
          <img src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-wrAg6dbRkCicon-ft-fd3.png" alt="Exceptional Service" className="service-icon3" />
          <h3>Exceptional Service</h3>
          <p>Our friendly customer support team is available to assist you with any questions or concerns.</p>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="newsletter-section3">
        <h2>Subscribe to our newsletter for<br/>special discounts</h2>
        <div className="newsletter-form3">
          <input type="email" placeholder="Enter your email..." className="newsletter-input3" />
          <button className="newsletter-button3">SUBSCRIBE</button>
        </div>

        <div className="payment-icons3">
          {/* Add payment method icons (use real image paths for icons) */}
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHCS7Nzf2AlX5BXFAaOTjALPC9_689H8XQZA&s" alt="Visa" />
          <img src="https://w7.pngwing.com/pngs/530/165/png-transparent-logo-mastercard-pentagram-flat-design-brand-mastercard-text-trademark-orange-thumbnail.png" alt="MasterCard" />
          <img src="https://e7.pngegg.com/pngimages/943/142/png-clipart-logo-american-express-computer-icons-sign-payment-american-express-blue-text-thumbnail.png" alt="Amex" />
          <img src="data:image/png;base64,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" alt="Apple Pay" />
        </div>
        <div className="footer-links3">
          <a href="#">Our Story</a>
          <a href="#">Visit Our Store</a>
          <a href="#">Contact Us</a>
          <a href="#">Account</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
