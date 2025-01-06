import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./EventsCard.css";
import BackgroundImage from "./../../assets/backup.png";

const EventsCard = () => {
  const { eventType } = useParams();
  const [events, setEvents] = useState([]);

  const eventData = {
    technical: [
      {
        id: 1,
        title: "Code Combat",
        description:
          "Dive into an intense coding battle where your programming skills will be put to the ultimate test. Solve complex algorithms and optimize your code against the clock!",
        date: "2024-02-15",
        time: "10:00 AM",
        prize: "₹10,000",
        registrationFee: "₹200",
        teamSize: "2 Members",
        venue: "Main Auditorium",
        coordinators: "John (1234567890), Sarah (0987654321)",
      },
      {
        id: 2,
        title: "Hack Fusion",
        description:
          "A 24-hour hackathon challenging you to build innovative solutions for real-world problems. Showcase your creativity and technical expertise!",
        date: "2024-02-16",
        time: "9:00 AM",
        prize: "₹15,000",
        registrationFee: "₹300",
        teamSize: "4 Members",
        venue: "Tech Hub",
        coordinators: "Mike (1234567890), Emma (0987654321)",
      },
    ],
    nontechnical: [
      {
        id: 1,
        title: "Treasure Hunt",
        description:
          "Embark on an exciting adventure across campus, solving riddles and finding hidden clues. Test your wit and teamwork skills!",
        date: "2024-02-15",
        time: "2:00 PM",
        prize: "₹5,000",
        registrationFee: "₹100",
        teamSize: "3 Members",
        venue: "College Campus",
        coordinators: "Alex (1234567890), Lisa (0987654321)",
      },
      {
        id: 2,
        title: "Cultural Night",
        description:
          "A grand celebration of talents featuring music, dance, and theatrical performances. Let your creativity shine on stage!",
        date: "2024-02-16",
        time: "6:00 PM",
        prize: "₹8,000",
        registrationFee: "₹150",
        teamSize: "Individual/Group",
        venue: "Open Air Theatre",
        coordinators: "David (1234567890), Maya (0987654321)",
      },
    ],
    workshop: [
      {
        id: 1,
        title: "AI/ML Workshop",
        description:
          "Get hands-on experience with cutting-edge AI and ML technologies. Learn from industry experts and build your first ML model!",
        date: "2024-02-17",
        time: "11:00 AM",
        prize: "Certification + Internship Opportunity",
        registrationFee: "₹500",
        teamSize: "Individual",
        venue: "Seminar Hall",
        coordinators: "Prof. James (1234567890), Dr. Anna (0987654321)",
      },
      {
        id: 2,
        title: "Web Development",
        description:
          "Master modern web technologies and frameworks. Build responsive websites and deploy your first full-stack application!",
        date: "2024-02-18",
        time: "10:00 AM",
        prize: "Certification + Project Showcase",
        registrationFee: "₹400",
        teamSize: "Individual",
        venue: "Computer Lab",
        coordinators: "Tom (1234567890), Julia (0987654321)",
      },
    ],
  };

  useEffect(() => {
    setEvents(eventData[eventType.toLowerCase()] || []);
  }, [eventType]);

  return (
    <div
      className="ecards-main-container"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="ecards-header">
        <Link to="/events" className="ecards-back-btn">
          <span className="ecards-back-arrow">←</span>
          <span className="ecards-back-text">Back to Events</span>
        </Link>
        <h1 className="ecards-title">{eventType} Events</h1>
      </div>

      <div className="ecards-grid">
        {events.map((event) => (
          <div key={event.id} className="ecards-detail-container">
            <div className="ecards-content-wrapper">
              <div className="ecards-header-section">
                <h2 className="ecards-event-title">{event.title}</h2>
                <span className="ecards-prize-badge">Prize: {event.prize}</span>
              </div>

              <p className="ecards-description">{event.description}</p>

              <div className="ecards-info-grid">
                <div className="ecards-info-item">
                  <span className="ecards-info-icon">📅</span>
                  <span className="ecards-info-label">Date:</span>
                  <span className="ecards-info-value">{event.date}</span>
                </div>
                <div className="ecards-info-item">
                  <span className="ecards-info-icon">⏰</span>
                  <span className="ecards-info-label">Time:</span>
                  <span className="ecards-info-value">{event.time}</span>
                </div>
                <div className="ecards-info-item">
                  <span className="ecards-info-icon">💰</span>
                  <span className="ecards-info-label">Fee:</span>
                  <span className="ecards-info-value">
                    {event.registrationFee}
                  </span>
                </div>
                <div className="ecards-info-item">
                  <span className="ecards-info-icon">👥</span>
                  <span className="ecards-info-label">Team:</span>
                  <span className="ecards-info-value">{event.teamSize}</span>
                </div>
                <div className="ecards-info-item">
                  <span className="ecards-info-icon">📍</span>
                  <span className="ecards-info-label">Venue:</span>
                  <span className="ecards-info-value">{event.venue}</span>
                </div>
                <div className="ecards-info-item">
                  <span className="ecards-info-icon">👤</span>
                  <span className="ecards-info-label">Contact:</span>
                  <span className="ecards-info-value">
                    {event.coordinators}
                  </span>
                </div>
              </div>

              <Link to="/register" className="ecards-reg">
                <button className="ecards-register-btn">
                  <span className="ecards-btn-text">Register Now</span>
                  <span className="ecards-btn-icon">→</span>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsCard;
