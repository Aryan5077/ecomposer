import React, { useState } from 'react';
import './ContactUs.css';

function ContactUs() {
  // Accordion state and logic
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="contact-container">
      <img src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-2RgmJOxbvBbg-hr-search.png?v=1724402439" alt="Descriptive Alt Text" className="background-image" />
      <div className="content">
        <h1>HELP CENTER</h1>
        <p>Let us know how we may help you?</p>
        <div className="search-bar">
          <input type="text" placeholder="Search for answers..." className="search-item" />
          <button className="submit" type="submit">Search</button>
        </div>
      </div>
      
      <div className="boxes">
        <div className="box">
          <div className="box-text">
            <img src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-Te8cHLsQU8icon-hc-1.png?v=1724405573" alt="Logo 1" className="logo" />
            <h3>Order Tracking</h3>
            <p>Log in to check the status of your order</p>
          </div>
          <button className="shop-now-btn">Track your order</button>
        </div>

        <div className="box">
          <div className="box-text">
            <img src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-Cbwk5YMW5Dicon-hc-2.png?v=1724405681" alt="Logo 1" className="logo" />
            <h3>Return & Exchange</h3>
            <p>We make it easy to return and exchange styles</p>
          </div>
          <button className="shop-now-btn">Start a return</button>
        </div>

        <div className="heading">
          <h1>Browse Our Help Desk</h1>
          <div className="lowerboxes">
            <div className="box1 lowerbox">
              <div className="box-text1">
                <img src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-TSKqG0pC2uic-hp-1.png?v=1724407135" alt="Logo 1" className="logo1" />
                <h3>Size Guide</h3>
                <p>Ensure your customers get the right fit</p>
                <li>view more</li>
              </div>
            </div>

            <div className="box2 lowerbox">
              <div className="box-text1">
                <img src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-ry1vhOiRg8ic-hp-2.png?v=1724407185" alt="Logo 1" className="logo1" />
                <h3>Loyalty Program</h3>
                <p>Offer exclusive rewards</p>
                <li>view more</li>
              </div>
            </div>

            <div className="box3 lowerbox">
              <div className="box-text1">
                <img src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-1hx43OngFRic-hp-3.png?v=1724407203" alt="Logo 1" className="logo1" />
                <h3>Order & Shipping</h3>
                <p>Looking for your order status</p>
                <li>view more</li>
              </div>
            </div>

            <div className="box4 lowerbox">
              <div className="box-text1">
                <img src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-JYbi3Qpv20ic-hp-4.png?v=1724634293" alt="Logo 1" className="logo1" />
                <h3>Payment & Gift cards</h3>
                <p>Wonder of what payment we accept</p>
                <li>view more</li>
              </div>
            </div>

            <div className="box5 lowerbox">
              <div className="box-text1">
                <img src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-NcXYj3LOv3ic-hp-5.png?v=1724634338" alt="Logo 1" className="logo1" />
                <h3>Discount Codes</h3>
                <p>Have a discount you like to use?</p>
                <li>view more</li>
              </div>
            </div>

            <div className="box6 lowerbox">
              <div className="box-text1">
                <img src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-zO0BfEcTlSic-hp-6.png?v=1724634383 " alt="Logo 1" className="logo1" />
                <h3>Store Location</h3>
                <p>Want to find a store near you?</p>
                <li>view more</li>
              </div>
            </div>
          </div>

          <div className="heading2">
            <h1>Popular Searched Questions</h1>         

            <div className="faq-container">
  <div className={`faq-item ${openIndex === 0 ? 'open' : ''}`} onClick={() => toggleAccordion(0)}>
    <div className="faq-question">
      How do I join the affiliate program?
      <span className={`faq-icon ${openIndex === 0 ? 'open' : ''}`}>
        {openIndex === 0 ? '˄' : '˅'}
      </span>
    </div>
    <div className="faq-answer">
      Simply sign up through our affiliate program page by filling out the registration form. Once approved, 
      you'll receive a unique affiliate link to start promoting our products.
    </div>
  </div>

  <div className={`faq-item ${openIndex === 1 ? 'open' : ''}`} onClick={() => toggleAccordion(1)}>
    <div className="faq-question">
      What commission rates do you offer?
      <span className={`faq-icon ${openIndex === 1 ? 'open' : ''}`}>
        {openIndex === 1 ? '˄' : '˅'}
      </span>
    </div>
    <div className="faq-answer">
      We offer competitive commission rates depending on the sales made through your referrals.
    </div>
  </div>

  <div className={`faq-item ${openIndex === 2 ? 'open' : ''}`} onClick={() => toggleAccordion(2)}>
    <div className="faq-question">
      How and when do I get paid?
      <span className={`faq-icon ${openIndex === 2 ? 'open' : ''}`}>
        {openIndex === 2 ? '˄' : '˅'}
      </span>
    </div>
    <div className="faq-answer">
      Payments are made on a monthly basis via your chosen payment method.
    </div>
  </div>

  <div className={`faq-item ${openIndex === 3 ? 'open' : ''}`} onClick={() => toggleAccordion(3)}>
    <div className="faq-question">
      What marketing resources are available to affiliates?
      <span className={`faq-icon `} >
        {openIndex === 3 ? '˄' : '˅'}
      </span>
    </div>
    <div className="faq-answer">
      We provide various marketing resources, including banners, ads, and email templates.
    </div>
  </div>
</div>
           <div className='aoq'>
           <h1>Any Other Questions?</h1>
           <p>We’re here to help. You can contact us: Weekdays: 6am to 6pm PT, Weekends: 6am to 6pm PT.
          </p>
          <div class="container">
  <div class="section">
    <img src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-YGrRM9IVGXicon-lc-1.png?v=1724638892" alt="Placeholder Image 1" className='aoqimg'/>
    <h1>Call</h1>
    <li>012-345-6789</li>
  </div>
  <div class="section">
    <img src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-Lv4LCle25Yicon-lc-2.png?v=1724639488" alt="Placeholder Image 2" className='aoqimg'/>
    <h1>Email</h1>
    <li>Contact Us</li>
  </div>
  <div class="section">
    <img src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-nXKveOYRkzicon-lc-3.png?v=1724639522" alt="Placeholder Image 3" className='aoqimg'/>
    <h1>Chat</h1>
    <li>Chat Now</li>
  </div>
  <div class="section">
    <img src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-qX7d2R8frVicon-lc-4.png?v=1724639557" alt="Placeholder Image 4" className='aoqimg'/>
    <h1>Message</h1>
    <li>Support Now</li>
  </div>
</div>
<div className='wholefooter'>
               <div className='footer'>
               <img src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-4V9nWEPuPOlogo-hc-1.png?v=1724641994" alt="Placeholder Image 4" className='fimg'/>
               <p>Email: info@ecomposershop.com</p>
               <p>Phone: (212) 555-1234</p> <br/>
               <r>Sign up for sale, new arrivals & more</r>

               <div class="search-container">
               <img src="data:image/svg+xml,%3Csvg width='26' height='19' viewBox='0 0 26 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0.609375V18.3828H26V0.609375H0ZM23.2046 2.13281L13 11.0248L2.79536 2.13281H23.2046ZM1.52344 3.0452L8.3297 8.97589L1.52344 15.7822V3.0452ZM2.60066 16.8594L9.48096 9.97907L13 13.0455L16.519 9.97913L23.3993 16.8594H2.60066ZM24.4766 15.7822L17.6703 8.97589L24.4766 3.0452V15.7822Z' fill='%233F3F3F'/%3E%3C/svg%3E" alt="Search Icon" class="search-icon" />
               <input type="text" placeholder="Search..." class="search-input" />
               <button class="signup-button">Sign Up</button>
               </div>
               </div>
               <div className='footer1'>
               <div className='about us'>
            <h1>About Us</h1>
            <li>About Us</li>
            <li>Careers</li>
            <li>Blogs</li>
            <li>Affiliate</li>
            <li>Contact Us</li>
            <li>Terms of Use</li>
               </div>
               <div className='Resource'>
            <h1>Resource</h1>
            <li>Return policy</li>
            <li>My Account</li>
            <li>Find a store</li>
            <li>Legal & Privacy</li>
            <li>Contact</li>
               </div>
               <div className='Information'>
            <h1>Information</h1>
            <li>Our story</li>
            <li>Visit out stores</li>
            <li>Contact us</li>
            <li>Account</li>
               </div>
               <div className='help'>
            <h1>Help</h1>
            <li>FAQ</li>
            <li>Terms of use</li>
            <li>Privacy policy</li>
            <li>Cookie policy</li>
            <li>Sitemap</li>
               </div>
               </div>
            
</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
