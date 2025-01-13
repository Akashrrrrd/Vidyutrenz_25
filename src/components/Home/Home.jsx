import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
// Import your background image
import BackgroundImage from "../../assets/backup.png";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const targetDate = new Date("2025-02-04T00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
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
            Vidyutrenz 2K25
          </h1>
        </div>

        <div className="subtitle-container">
          <h2 className="subtitle">
            Blending the Boundaries of Utopia and Dystopia
          </h2>
        </div>

        <div className="description-container">
          <p className="description">
            Immerse yourself in a world where innovation meets creativity at the
            ultimate technical symposium, where ideas and technologies come to
            life.
          </p>
        </div>

        <div className="countdown-container">
          <div className="countdown-item">
            <span className="countdown-value">{timeLeft.days}</span>
            <span className="countdown-label">Days</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-value">{timeLeft.hours}</span>
            <span className="countdown-label">Hours</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-value">{timeLeft.minutes}</span>
            <span className="countdown-label">Minutes</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-value">{timeLeft.seconds}</span>
            <span className="countdown-label">Seconds</span>
          </div>
        </div>

        <Link to="/events" className="register-button-home">
          <span className="button-text">View Events</span>
          <span className="button-glitch"></span>
        </Link>

        <div className="event-details">
          <div className="detail-item">
            <span className="detail-label">Date</span>
            <time className="detail-value" dateTime="2025-02-04">
              February 04, 2025 Tuesday
            </time>
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
