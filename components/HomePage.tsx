// HomePage.jsx
import React from 'react';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Welcome Section */}
      <section className="welcome-section">
        <h1>Welcome to Shop.inn</h1>
        <p>Discover the Joy of Shopping at Shop.inn Where Style Meets Savings, Innovation Meets Inspiration, and Every Click Brings You Closer to What You Love!</p>
      </section>

      {/* Image Section */}
      <section className="image-section">
        <img 
          src="https://images.pexels.com/photos/5585837/pexels-photo-5585837.jpeg" 
          alt="Shopping Banner" 
          className="homepage-banner"
        />
      </section>
    </div>
  );
};

export default HomePage;
