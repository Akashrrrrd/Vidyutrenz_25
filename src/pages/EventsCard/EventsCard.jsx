import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./EventsCard.css";
import BackgroundImage from "./../../assets/backup.png";
import tech_1 from "./../../assets/tech_1.png";
import tech_2 from "./../../assets/tech_2.png";
import tech_3 from "./../../assets/tech_3.png";
import tech_4 from "./../../assets/tech_4.png";
import tech_5 from "./../../assets/tech_5.png";
import tech_6 from "./../../assets/tech_6.png";
import nontech_1 from "./../../assets/nontech_1.png";
import nontech_2 from "./../../assets/nontech_2.png";
import nontech_3 from "./../../assets/nontech_3.png";
import nontech_4 from "./../../assets/nontech_4.png";
import nontech_5 from "./../../assets/nontech_5.png";
import nontech_6 from "./../../assets/nontech_6.png";
import work_1 from "./../../assets/work_1.png";
import work_2 from "./../../assets/work_2.png";
import work_3 from "./../../assets/work_3.png";
import work_4 from "./../../assets/work_4.png";
import work_5 from "./../../assets/work_5.png";

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
        date: "2025-02-04",
        time: "11:00 AM",
        prize: "₹3000",
        registrationFee: "₹100",
        teamSize: "2 Members",
        venue: "TBD",
        coordinators: "Neha (8667798972)",
        bgImage: tech_1,
      },
      {
        id: 2,
        title: "ElectroExpo",
        description:
          "Explore and present innovative ideas in electronics. Showcase your circuits, gadgets, and cutting-edge prototypes.",
        date: "2025-02-04",
        time: "11:00 AM",
        prize: "₹3000",
        registrationFee: "₹150",
        teamSize: "3 Members",
        venue: "TBD",
        coordinators: "Aishwaryaa (8939112044)",
        bgImage: tech_2,
      },
      {
        id: 3,
        title: "Circuit Wars",
        description:
          "Compete in an exciting race to design and debug electronic circuits. A thrilling event for electronics enthusiasts!",
        date: "2025-02-04",
        time: "11:00 AM",
        prize: "₹3000",
        registrationFee: "₹120",
        teamSize: "2 Members",
        venue: "TBD",
        coordinators: "Harini (7904530322)",
        bgImage: tech_3,
      },
      {
        id: 4,
        title: "Debate Arena",
        description:
          "Showcase your debating skills and battle it out on trending tech topics. Convince the judges with your logic and arguments.",
        date: "2025-02-04",
        time: "11:00 AM",
        prize: "₹3000",
        registrationFee: "₹80",
        teamSize: "Individual",
        venue: "TBD",
        coordinators: "A Sindhuja (6382410462)",
        bgImage: tech_4,
      },
      {
        id: 5,
        title: "Brainiac",
        description:
          "An ultimate quiz competition for tech enthusiasts. Test your knowledge in various fields of science and technology.",
        date: "2025-02-04",
        time: "11:00 AM",
        prize: "₹3000",
        registrationFee: "₹100",
        teamSize: "3 Members",
        venue: "TBD",
        coordinators: "Glory (9600873711)",
        bgImage: tech_5,
      },
      {
        id: 6,
        title: "CodeInPhase",
        description:
          "Solve challenging coding problems and compete against the best minds. Optimize your solutions and climb the leaderboard!",
        date: "2025-02-04",
        time: "11:00 AM",
        prize: "₹3000",
        registrationFee: "₹200",
        teamSize: "2 Members",
        venue: "TBD",
        coordinators: "Hari Preyadharshan S P (9994881877)",
        bgImage: tech_6,
      },
    ],

    nontechnical: [
      {
        id: 1,
        title: "Movie Maniac",
        description:
          "Guess movies, answer trivia, and showcase your movie knowledge in this fun and interactive event.",
        date: "2025-02-04",
        time: "11:00 AM",
        prize: "₹1500",
        registrationFee: "₹50",
        teamSize: "3 Members",
        venue: "TBD",
        coordinators: "Hanish Britto (9626718361)",
        bgImage: nontech_1,
      },
      {
        id: 2,
        title: "Music Galatta",
        description:
          "Sing, dance, or jam with your friends. A musical extravaganza to let your talents shine!",
        date: "2025-02-04",
        time: "11:00 AM",
        prize: "₹1500",
        registrationFee: "₹80",
        teamSize: "Group",
        venue: "TBD",
        coordinators: "Shrinithi S (7010270035)",
        bgImage: nontech_2,
      },
      {
        id: 3,
        title: "Free Fire",
        description:
          "Gear up for an intense gaming showdown. Compete in the popular battle royale game and dominate the battlefield!",
        date: "2025-02-04",
        time: "11:00 AM",
        prize: "₹1500",
        registrationFee: "₹100",
        teamSize: "4 Members",
        venue: "TBD",
        coordinators: "Jai Vasanth (9363573308), Vamsi Kumar (8122750426)",
        bgImage: nontech_3,
      },
      {
        id: 4,
        title: "Otaku Unleashed",
        description:
          "Celebrate anime culture with cosplay, trivia, and exciting games. A paradise for all anime enthusiasts!",
        date: "2025-02-04",
        time: "11:00 AM",
        prize: "₹1500",
        registrationFee: "₹70",
        teamSize: "Individual",
        venue: "TBD",
        coordinators: "Bhavan R B (9384207935)",
        bgImage: nontech_4,
      },
      {
        id: 5,
        title: "Genius Mindz",
        description:
          "Put your brain to the test with puzzles, riddles, and brain teasers. An event for the sharpest minds.",
        date: "2025-02-04",
        time: "11:00 AM",
        prize: "₹1500",
        registrationFee: "₹60",
        teamSize: "2 Members",
        venue: "TBD",
        coordinators: "Bala Saravanan (6369628857)",
        bgImage: nontech_5,
      },
      {
        id: 6,
        title: "IPL Auction",
        description:
          "Experience the thrill of managing a cricket team in a mock IPL auction. Build the perfect squad and compete for glory!",
        date: "2025-02-04",
        time: "11:00 AM",
        prize: "₹1500",
        registrationFee: "₹120",
        teamSize: "4 Members",
        venue: "TBD",
        coordinators: "Nitheesh Kumar (8148514520), Mohamed Hamsa (6382347002)",
        bgImage: nontech_6,
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
        venue: "IoT",
        coordinators: "Tom (1234567890), Julia (0987654321)",
        bgImage: work_1,
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
        venue: "VLSI Lab",
        coordinators: "Mike (1234567890), Emma (0987654321)",
        bgImage: work_2,
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
        venue: "TBD",
        coordinators: "John (1234567890), Sarah (0987654321)",
        bgImage: work_3,
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
        venue: "TBD",
        coordinators: "David (1234567890), Maya (0987654321)",
        bgImage: work_4,
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
        venue: "TBD",
        coordinators: "Prof. James (1234567890), Dr. Anna (0987654321)",
        bgImage: work_5,
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
          <div
            key={event.id}
            className="ecards-detail-container"
            style={{
              backgroundImage: `url(${event.bgImage})`,
            }}
          >
            <div className="ecards-overlay"></div>
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
