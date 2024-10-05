import './SeasonalHoliday.css';
import React, { useState } from 'react'; 
import ProductGrid from "./components/ProductGrid";
import CustomerReview from './components/CustomerReview';
import ReviewGrid from './components/ReviewGrid';
import Footer from './components/Footer';


// New Component for Product Showcase
const ProductShowcase = () => {
  // Adding state to track the number value for the increment-decrement input
  const [numberValue, setNumberValue] = useState(1);
  
  // Function to handle increment
  const handleIncrement = () => {
    if (numberValue < 10) { // Limiting maximum value to 10
      setNumberValue(numberValue + 1);
    }
  };

  // Function to handle decrement
  const handleDecrement = () => {
    if (numberValue > 1) { // Limiting minimum value to 1
      setNumberValue(numberValue - 1);
    }
  };

  return (
    <div className="product-showcase-container">
      <div className="product-image-gallery">
        <img src="https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/p-m-fd1.png?v=1715927326&width=246" alt="Bracelet Image 1" className="gallery-thumb" />
        <img src="https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/p-m-fd2.png?v=1715927327&width=246" alt="Bracelet Image 2" className="gallery-thumb" />
        <img src="https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/p-m-fd3.png?v=1715927326&width=246" alt="Bracelet Image 3" className="gallery-thumb" />
        <img src="https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/p-m-fd4.png?v=1715927327&width=246" alt="Bracelet Image 4" className="gallery-thumb" />
      </div>

      <div className="product-main-section">
        <img src="https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/p-m-fd1.png?v=1715927326&width=246" alt="Main Bracelet" className="main-product-image" />
      </div>

      <div className="product-details">
        <div className="rating-section">
          <div className="star-rating">
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
          </div>
          <span className="review-text">(100+ ratings)</span>
        </div>
        <h2>Personalize Daddy Bracelet, Family<br/> Bracelet</h2>
        <p>Only 6 left in stock</p>
        <span className="price">$399.00</span> <span className="old-price">$499.00</span>

        <div className="dropdown">
          <div>
            <label className='bnum'>Beads Number:</label>
            <div>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
          </div>

          <label className='bcolor'>Bracelet color & Wrist size:</label>
          <div>
            <select>
              <option value="silver-6">Silver 6"-6.5"</option>
              <option value="gold-6">Gold 6"-6.5"</option>
            </select>
          </div>
        </div>

        <div className="engraving-info">
          <h3>Add your personalization</h3>
          <p>Engraving Information:</p>
          <ul>
            <li>I can engrave 8 characters on each bead.</li>
            <li>Space is a character too.</li>
            <li>I can engrave names, initials, dates, roman numerals.</li>
            <li>Personalized as typed out.</li>
          </ul>

        </div>

        <div>
          <input type="text" placeholder="    Your personalization" className="personalization-input" />
        </div>
          {/* Increment-Decrement functionality */}
          <div className="number-input">
            <button className="decrement" onClick={handleDecrement}>-</button>
            <input 
              type="number" 
              value={numberValue} 
              min="1" 
              max="10" 
              className="input-number" 
              readOnly 
            />
            <button className="increment" onClick={handleIncrement}>+</button>
          </div>
        <button className="add-to-cart-btn">Add to Cart</button>  
      </div>
    </div>
  );
};

function SeasonalHoliday() {
  return (
    <div>
      <div className='sec1'>
        <img src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-MsqN2b0g87bn-hero-fdd.png?v=1715908876" alt="Descriptive Alt Text" className="background-image" />
        <img src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-ZhdKNaVpNNbn-hero-fd-layer.png?v=1715833881" className='background-image2'/>
        <img src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-UduL18V0TPbn-hero-fd-layer-2.png?v=1715844254" className='stars'/>
        <img src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-23hgB1ne1Xbn-hero-fd-layer-1.png" className='bstslr'/>
      </div>

      <div className=' sec2'>
        <h1>HURRY UP, DEALS END SOON!</h1>
        <p>PERFECT GIFT FOR <br/>FATHER'S DAY</p>
        <r>Celebrate Dad With Personalized Daddy Bracelets</r> <br/>
        <button>SHOP NOW</button>
      </div>   

      <div className="video-container">
        <video autoPlay loop muted width="140" height="660" className='vid1'>
          <source src="https://cdn.shopify.com/videos/c/o/v/f62cba1389b544d9ad16574e6c2c8cf3.mp4#t=," type="video/mp4" />
        </video>
      </div>

      <div className='sec3'>
        <img src='https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-TOgntF8Cgybn-gr-1.png?v=1715909522' className='bgimg3'/>
        <div className='contnt'>
          <h1>CUSTOMIZABLE DESIGNS</h1>
          <p>Explore our range of bracelet designs that can be personalized with Dad's <br/> name, initials, or special message.</p>
        </div>
      </div>

      <div className='sec4'>
        <img src='https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-xCUjIQXTuMbn-gr-2.png' className='bgimg4'/>
        <div className='content2'>
          <h1>MEANINGFUL SYMBOLS</h1>
          <p>Each bracelet features meaningful symbols or charms that symbolize the<br/> bond between father and child.</p>
        </div>
      </div>

      <div className='sec5'>
        <div className='cont'>
          <div>
            <div className='max'>
              <img src='https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-RWWFCpysS6icon-1.png?v=1715910823' className='maximg'/>
              <h1>MAXIMUM FIT</h1>
              <p>Set customized feeding schedules to<br/>ensure your cat gets the right amount<br/> of food at the right time.</p>
            </div>

            <div className='can'>
              <img src='https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-52Hi4FQwcIicon-2.png' className='canimg'/>
              <h1>CAN ADD MORE NAMES<br/>IN THE FUTURE</h1>
              <p>Rest assured that the bracelet is<br/>completely easy for adding names later<br/>on.</p>
            </div>
          </div>

          <div className='bracelet'>
            <img src='https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-EmpgwFXEsDbn-gr-layer-2-1.png?v=1715911229' className='bgimg5'/>
          </div>

          <div className='cont1'>
            <div className='eng'>
              <img src='https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-7tTUjeG6NBicon-3.png?v=1716606488' className='engimg'/>
              <h1>ENGRAVING UP TO 12 <br/>NAMES</h1>
              <p>A bracelet that can add up to 12 names<br/> you care about, that's wonderful.</p>
            </div>

            <div className='water'>
              <img src='https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-3v4uyZt54qicon-4.png?v=1716606504' className='waterimg'/>
              <h1>WATERPROOF</h1>
              <p>The water resistance and rust<br/>resistance are excellent, so you don't<br/>have to worry about your daily<br/>activities. </p>
            </div>
          </div>
        </div>
      </div>

      {/* Add the new ProductShowcase component here */}
      <div className='sec6'>
        <h1>PERSONALIZATION OPTIONS</h1>
        <ProductShowcase />
      </div>


      <div className="parent-image-container">
      {/* Parent image */}
      <img 
        src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-KciEziG9nrbg-ft.png?v=1715934170" 
        alt="Parent" 
        className="parent-image" 
      />

      {/* Text on parent image */}
      <div className="overlay-text">
       <h1>Gift Packaging</h1>
       <p>All bracelets come beautifully packaged,<br/> ready to be presented to Dad on Father's<br/> Day.</p>
      </div>

      {/* Overlapping child image */}
      <img 
        src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-XkWdb7h4IRbg-ft-img.png" 
        alt="Child" 
        className="child-image" 
      />
    </div>
      <div className='sec7'>
        <h1>Explore our top recommendations guaranteed<br/>
        to put a smile on Dad's face.</h1>
        <ProductGrid/>
      </div>

      <div className='sec8'>
        <CustomerReview/>
      </div>

      <div className='sec9'>
         <ReviewGrid/>
      </div>

      <div className='sec10'>
          <Footer/>
      </div>

    </div>
  );
}

export default SeasonalHoliday;
