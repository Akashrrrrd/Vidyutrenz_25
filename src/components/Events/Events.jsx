import React from "react";
import "./Events.css";
import Tech from './../../assets/tech_logo.png';
import NonTech from './../../assets/nontech_logo.png';
import Workshop from './../../assets/workshop_logo.png';
import BackgroundImage from '../../assets/back_home.png'; // Corrected import name

const Events = () => {
  const events = [
    {
      title: "Technical",
      description: "Register for our Technical Events and Win Exciting Prizes",
      image: Tech,
    },
    {
      title: "Non-Technical",
      description: "Register for our Non-Technical Events and Win Exciting Prizes",
      image: NonTech,
    },
    {
      title: "Workshop",
      description: "Register for our Workshop Events and Win Exciting Prizes",
      image: Workshop,
    },
  ];

  return (
    <div
      className="events-container"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      {events.map((event, index) => (
        <div
          className="event-card"
          key={index}
          style={{ backgroundImage: `url(${event.image})` }}
        >
          <div className="event-overlay">
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;
