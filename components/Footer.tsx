import React from 'react';
const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-content"> <section className="image-section">
        <img 
          src="https://images.pexels.com/photos/5585837/pexels-photo-5585837.jpeg" 
          alt="Shopping Banner" 
          className="homepage-banner"
        />
      </section>
      <div className="footer-section">
        
        <h3>Shope.Inn</h3>
        <div className="b">
         <p >your ultimate destination for all things shopping! We are a premium online shopping platform offering a wide range of high-quality products across various categories, including fashion, electronics, home essentials, and more.</p>
          </div> 
      </div>
      <div className="footer-section">
        <h4>Customer Support</h4>
        <div>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/returns">Returns</a></li>
          <li><a href="/shipping">Shipping</a></li>
          <li><a href="/track-order">Track Order</a></li>
        </div>
      </div>
      <div className="footer-section">
        <h4>Follow Us</h4>
        <ul>
          <li><a href="/facebook">Facebook</a></li>
          <li><a href="/instagram">Instagram</a></li>
          <li><a href="/twitter">Twitter</a></li>
          <li><a href="/linkedin">LinkedIn</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Contact US </h4>
        <ul>
          <p>Do you have any questions or suggestions?</p>
          <p>
          Do you need support? Give us a call.
         </p>
        </ul>
        <ul>contact@yourcompany.com</ul>
        <ul>
          +43 720115278

         </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2024 All Rights Reserved.</p>
    </div>
  </footer>
  );
};

export default Footer;
