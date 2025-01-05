import React, { useState, useEffect } from "react";
import "./About.css";
import BackgroundImage from "../../assets/back_home.png";
import AboutImage1 from "../../assets/about_img_1.png";
import AboutImage2 from "../../assets/about_img_2.png";
import AboutImage3 from "../../assets/about_img_3.png";

const About = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const images = [AboutImage1, AboutImage2, AboutImage3];

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const handleImageChange = (index) => {
    setCurrentImage(index);
    setIsAutoPlaying(false);
  };

  return (
    <div
      className="about-section"
      id="about"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${BackgroundImage})`,
      }}
    >
      <div className="about-container">
        <div className="about-content">
          <div className="about-header">
            <h2 className="about-title">About Us</h2>
            <div className="title-underline"></div>
          </div>

          <p className="about-description">
            At Vidyutrenz, we're at the forefront of electrical engineering and
            technology, committed to delivering innovative solutions that drive
            progress and efficiency. Our mission is to revolutionize the
            industry by providing cutting-edge products and services designed to
            meet the highest standards of performance and reliability.
          </p>

          <div className="feature-cards">
            <div className="feature-card">
              <div className="feature-icon innovation">
                <i className="fas fa-bolt"></i>
              </div>
              <div className="feature-text">
                <h3>Innovation</h3>
                <p>Cutting-edge solutions</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon reliability">
                <i className="fas fa-shield-alt"></i>
              </div>
              <div className="feature-text">
                <h3>Reliability</h3>
                <p>Trusted performance</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-slider">
          <div className="slider-container">
            <img
              src={images[currentImage]}
              alt={`About us ${currentImage + 1}`}
              className="slider-image"
            />

            <div className="slider-controls">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleImageChange(index)}
                  className={`slider-dot ${
                    currentImage === index ? "active" : ""
                  }`}
                  aria-label={`Show image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
