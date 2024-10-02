// src/components/Home.js
import React from 'react';
import './PageStyles.css'; // For page-wide styling
import heroImage from '../assets/hero-image.jpg'; // Replace with your hero image
import chartImage from '../assets/chart-image.jpg'; // Replace with your chart image
import consultationImage from '../assets/consultation-image.jpg'; // Replace with your consultation image

const Home = () => {
  return (
    <div className="page-container">
      <header className="hero-section">
        <img src={heroImage} alt="Hero" className="hero-image" />
        <h1>Welcome to Onco.ai!</h1>
        <h2>Detect Early, Save Lives</h2>
        <p className="page-description">
          Explore charts, make predictions, and book consultations.
        </p>
        <button className="primary-button">Get Started</button>
      </header>

      <section className="features-section">
        <h2>Our Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <img src={chartImage} alt="Charts" className="feature-image" />
            <h3>Data Visualization</h3>
            <p>Access comprehensive cancer statistics and trends.</p>
          </div>
          <div className="feature-card">
            <img src={consultationImage} alt="Consultation" className="feature-image" />
            <h3>AI Predictions</h3>
            <p>Utilize advanced AI algorithms for accurate predictions.</p>
          </div>
          <div className="feature-card">
            <img src={consultationImage} alt="Consultation" className="feature-image" />
            <h3>Doctor Consultations</h3>
            <p>Book appointments with experienced oncologists.</p>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>"Onco.ai helped me understand my health better. The predictions were accurate!"</p>
            <h4>- Sarah J.</h4>
          </div>
          <div className="testimonial-card">
            <p>"I found the consultations easy to book and very informative."</p>
            <h4>- Mark T.</h4>
          </div>
          <div className="testimonial-card">
            <p>"The data visualizations are incredible and really helped me see the trends."</p>
            <h4>- Emily R.</h4>
          </div>
        </div>
      </section>

      <section className="events-section">
        <h2>Upcoming Events</h2>
        {/* <img src="https://www.canadahelps.org/media/Canadian-Breast-Cancer-Foundation-Featured-Image.jpg" alt="Event" className="EventClass" /> */}
        
        <ul className="events-list">
          <li>Webinar: Advances in Cancer Research - April 15, 2024</li>
          <li>Health Camp: Free Check-ups - May 20, 2024</li>
          <li>Conference: Innovations in Oncology - June 10, 2024</li>
        </ul>
      </section>

      <section className="newsletter-section">
        <h2>Stay Updated!</h2>
        <p>Subscribe to our newsletter for the latest updates and events.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Your email address" required />
          <button className="primary-button" type="submit">Subscribe</button>
        </form>
      </section>

      <section className="cta-section">
        <h2>Join Us in the Fight Against Cancer</h2>
        <p>Together, we can make a difference!</p>
        <button className="primary-button">Learn More</button>
      </section>
    </div>
  );
};

export default Home;
