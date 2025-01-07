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
        title: "Hypothesis Hub",
        description:
          "Challenge yourself with real-world problem-solving scenarios. Use your analytical thinking and creativity to hypothesize solutions.",
        date: "2024-02-15",
        time: "10:00 AM",
        prize: "₹5,000",
        registrationFee: "₹100",
        teamSize: "2 Members",
        venue: "Main Auditorium",
        coordinators: "John (1234567890), Sarah (0987654321)",
      },
      {
        id: 2,
        title: "ElectroExpo",
        description:
          "Explore and present innovative ideas in electronics. Showcase your circuits, gadgets, and cutting-edge prototypes.",
        date: "2024-02-16",
        time: "11:00 AM",
        prize: "₹8,000",
        registrationFee: "₹150",
        teamSize: "3 Members",
        venue: "Tech Hub",
        coordinators: "Mike (1234567890), Emma (0987654321)",
      },
      {
        id: 3,
        title: "Circuit Wars",
        description:
          "Compete in an exciting race to design and debug electronic circuits. A thrilling event for electronics enthusiasts!",
        date: "2024-02-16",
        time: "2:00 PM",
        prize: "₹6,000",
        registrationFee: "₹120",
        teamSize: "2 Members",
        venue: "Electronics Lab",
        coordinators: "Alex (1234567890), Lisa (0987654321)",
      },
      {
        id: 4,
        title: "Debate Arena",
        description:
          "Showcase your debating skills and battle it out on trending tech topics. Convince the judges with your logic and arguments.",
        date: "2024-02-15",
        time: "4:00 PM",
        prize: "₹3,000",
        registrationFee: "₹80",
        teamSize: "Individual",
        venue: "Seminar Hall",
        coordinators: "David (1234567890), Maya (0987654321)",
      },
      {
        id: 5,
        title: "Brainiac",
        description:
          "An ultimate quiz competition for tech enthusiasts. Test your knowledge in various fields of science and technology.",
        date: "2024-02-17",
        time: "11:00 AM",
        prize: "₹4,000",
        registrationFee: "₹100",
        teamSize: "3 Members",
        venue: "Quiz Hall",
        coordinators: "Prof. James (1234567890), Dr. Anna (0987654321)",
      },
      {
        id: 6,
        title: "CodeInPhase",
        description:
          "Solve challenging coding problems and compete against the best minds. Optimize your solutions and climb the leaderboard!",
        date: "2024-02-18",
        time: "9:00 AM",
        prize: "₹7,000",
        registrationFee: "₹200",
        teamSize: "2 Members",
        venue: "Computer Lab",
        coordinators: "Tom (1234567890), Julia (0987654321)",
      },
    ],
    nontechnical: [
      {
        id: 1,
        title: "Movie Maniac",
        description:
          "Guess movies, answer trivia, and showcase your movie knowledge in this fun and interactive event.",
        date: "2024-02-15",
        time: "1:00 PM",
        prize: "₹2,000",
        registrationFee: "₹50",
        teamSize: "3 Members",
        venue: "Open Theatre",
        coordinators: "Alex (1234567890), Lisa (0987654321)",
      },
      {
        id: 2,
        title: "Music Galatta",
        description:
          "Sing, dance, or jam with your friends. A musical extravaganza to let your talents shine!",
        date: "2024-02-15",
        time: "6:00 PM",
        prize: "₹3,000",
        registrationFee: "₹80",
        teamSize: "Group",
        venue: "Auditorium",
        coordinators: "David (1234567890), Maya (0987654321)",
      },
      {
        id: 3,
        title: "Free Fire",
        description:
          "Gear up for an intense gaming showdown. Compete in the popular battle royale game and dominate the battlefield!",
        date: "2024-02-16",
        time: "3:00 PM",
        prize: "₹5,000",
        registrationFee: "₹100",
        teamSize: "4 Members",
        venue: "Gaming Zone",
        coordinators: "Tom (1234567890), Julia (0987654321)",
      },
      {
        id: 4,
        title: "Otaku Unleashed",
        description:
          "Celebrate anime culture with cosplay, trivia, and exciting games. A paradise for all anime enthusiasts!",
        date: "2024-02-16",
        time: "1:00 PM",
        prize: "₹4,000",
        registrationFee: "₹70",
        teamSize: "Individual",
        venue: "Cultural Hall",
        coordinators: "John (1234567890), Sarah (0987654321)",
      },
      {
        id: 5,
        title: "Genius Mindz",
        description:
          "Put your brain to the test with puzzles, riddles, and brain teasers. An event for the sharpest minds.",
        date: "2024-02-17",
        time: "11:00 AM",
        prize: "₹3,000",
        registrationFee: "₹60",
        teamSize: "2 Members",
        venue: "Quiz Hall",
        coordinators: "Mike (1234567890), Emma (0987654321)",
      },
      {
        id: 6,
        title: "IPL Auction",
        description:
          "Experience the thrill of managing a cricket team in a mock IPL auction. Build the perfect squad and compete for glory!",
        date: "2024-02-18",
        time: "10:00 AM",
        prize: "₹6,000",
        registrationFee: "₹120",
        teamSize: "4 Members",
        venue: "Sports Arena",
        coordinators: "Prof. James (1234567890), Dr. Anna (0987654321)",
      },
    ],
    workshop: [
      {
        id: 1,
        title: "IoT Workshop",
        description:
          "Learn the fundamentals of the Internet of Things. Build and deploy IoT devices to automate tasks.",
        date: "2024-02-17",
        time: "10:00 AM",
        prize: "Certification + IoT Kit",
        registrationFee: "₹300",
        teamSize: "Individual",
        venue: "Seminar Hall",
        coordinators: "Tom (1234567890), Julia (0987654321)",
      },
      {
        id: 2,
        title: "VLSI Design",
        description:
          "Explore the world of Very Large-Scale Integration. Learn to design and implement digital circuits.",
        date: "2024-02-18",
        time: "11:00 AM",
        prize: "Certification + Tools Access",
        registrationFee: "₹350",
        teamSize: "Individual",
        venue: "Tech Lab",
        coordinators: "Mike (1234567890), Emma (0987654321)",
      },
      {
        id: 3,
        title: "5G Technology",
        description:
          "Understand the future of connectivity with 5G. Gain insights into its architecture and applications.",
        date: "2024-02-18",
        time: "2:00 PM",
        prize: "Certification",
        registrationFee: "₹250",
        teamSize: "Individual",
        venue: "Conference Room",
        coordinators: "John (1234567890), Sarah (0987654321)",
      },
      {
        id: 4,
        title: "PCB Design",
        description:
          "Learn to design Printed Circuit Boards using modern tools. Bring your electronics projects to life.",
        date: "2024-02-17",
        time: "3:00 PM",
        prize: "Certification + Free Software",
        registrationFee: "₹300",
        teamSize: "Individual",
        venue: "Electronics Lab",
        coordinators: "David (1234567890), Maya (0987654321)",
      },
      {
        id: 5,
        title: "Generative AI",
        description:
          "Dive into the fascinating world of AI. Build your own generative AI models for creative and practical applications.",
        date: "2024-02-18",
        time: "10:00 AM",
        prize: "Certification + Project Showcase",
        registrationFee: "₹400",
        teamSize: "Individual",
        venue: "AI Lab",
        coordinators: "Prof. James (1234567890), Dr. Anna (0987654321)",
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
