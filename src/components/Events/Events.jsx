import React from "react";
import { useNavigate } from "react-router-dom";
import "./Events.css";
import Tech from "./../../assets/tech_logo.png";
import NonTech from "./../../assets/nontech_logo.png";
import Workshop from "./../../assets/workshop_logo.png";
import BackgroundImage from "./../../assets/backup.png";

const Events = () => {
  const navigate = useNavigate();

  // Function to handle event card clicks
  const handleEventClick = (eventType) => {
    navigate(`/events/${eventType.toLowerCase()}`);
  };

  return (
    <div
      className="events-container"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      {/* Technical Event */}
      <div
        className="event-card"
        style={{ backgroundImage: `url(${Tech})` }}
        onClick={() => handleEventClick("Technical")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && handleEventClick("Technical")}
      >
        <div className="event-overlay">
          <h3>Technical</h3>
          <p>Register for our Technical Events and Win Exciting Prizes</p>
        </div>
      </div>

      {/* Non-Technical Event */}
      <div
        className="event-card"
        style={{ backgroundImage: `url(${NonTech})` }}
        onClick={() => handleEventClick("NonTechnical")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && handleEventClick("NonTechnical")}
      >
        <div className="event-overlay">
          <h3>Non-Technical</h3>
          <p>Register for our Non-Technical Events and Win Exciting Prizes</p>
        </div>
      </div>

      {/* Workshop Event */}
      <div
        className="event-card"
        style={{ backgroundImage: `url(${Workshop})` }}
        onClick={() => handleEventClick("Workshop")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && handleEventClick("Workshop")}
      >
        <div className="event-overlay">
          <h3>Workshop</h3>
          <p>Register for our Workshop Events and Win Exciting Prizes</p>
        </div>
      </div>
    </div>
  );
};

export default Events;
