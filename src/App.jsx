import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import BackgroundImage from "./assets/navbar_logo.png";

// Component Imports
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Events from "./components/Events/Events";
import EventsCard from "./pages/EventsCard/EventsCard";
import Contact from "./components/Contact/Contact";
import Register from "./pages/Register/Register";

// Enhanced Loading Component
const LoadingScreen = () => {
  return (
    <div className="loading-overlay">
      <div className="logo-container">
        <div className="logo-glow"></div>
        <img
          src={BackgroundImage}
          alt="Symposium Logo"
          className="loading-logo"
        />
        {/* <div className="loading-text">SYMPOSIUM 2K25</div> */}
      </div>
    </div>
  );
};

// ScrollToTop component
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);

  return null;
};

const AppContent = ({ loading }) => {
  const [contentVisible, setContentVisible] = useState(!loading);

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => setContentVisible(true), 100);
      return () => clearTimeout(timer);
    }
    setContentVisible(false);
  }, [loading]);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className={`app-wrapper ${contentVisible ? "visible" : ""}`}>
          <ScrollToTop />
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/events" element={<Events />} />
              <Route path="/events/:eventType" element={<EventsCard />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
        </div>
      )}
    </>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <Router>
      <div className="app">
        <AppContent loading={loading} />
      </div>
    </Router>
  );
};

export default App;
