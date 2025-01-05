import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
// Import your background image
import BackgroundImage from "../../assets/back_home.png";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="hero-overlay"></div>
      <div className={`hero-content ${isVisible ? "visible" : ""}`}>
        <div className="glitch-container">
          <h1 className="main-title" data-text="Vidyutrenz 2025">
            Vidyutrenz 2025
          </h1>
        </div>

        <div className="subtitle-container">
          <h2 className="subtitle">
            Blending the Boundaries of Utopia and Dystopia
          </h2>
        </div>

        <div className="description-container">
          <p className="description">
            Experience the convergence of technology and imagination at Tamil
            Nadu's premier technical symposium.
          </p>
        </div>

        <Link to="/register" className="register-button">
          <span className="button-text">Register Now</span>
          <span className="button-glitch"></span>
        </Link>

        <div className="event-details">
          <div className="detail-item">
            <span className="detail-label">Date</span>
            <span className="detail-value">February 04, 2025</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Venue</span>
            <span className="detail-value">
              Chennai Institute of Technology, Kundrathur
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
