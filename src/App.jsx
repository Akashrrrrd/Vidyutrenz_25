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

// ScrollToTop component
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

const AppContent = ({ loading }) => {
  return (
    <>
      {loading ? (
        <div className="loading-overlay">
          <div className="logo-container">
            <img
              src={BackgroundImage}
              alt="Symposium Logo"
              className="loading-logo"
            />
          </div>
        </div>
      ) : (
        <>
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
        </>
      )}
    </>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
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
