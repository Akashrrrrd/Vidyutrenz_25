import React from "react";
import "./Events.css";
import Tech from "./../../assets/tech_logo.png";
import NonTech from "./../../assets/nontech_logo.png";
import Workshop from "./../../assets/workshop_logo.png";
import BackgroundImage from "./../../assets/back_home.png";

const Events = () => {
  return (
    <div
      className="events-container"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      {/* Technical Event */}
      <div className="event-card" style={{ backgroundImage: `url(${Tech})` }}>
        <div className="event-overlay">
          <h3>Technical</h3>
          <p>Register for our Technical Events and Win Exciting Prizes</p>
        </div>
      </div>

      {/* Non-Technical Event */}
      <div
        className="event-card"
        style={{ backgroundImage: `url(${NonTech})` }}
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
