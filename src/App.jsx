import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Component Imports
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Events from "./components/Events/Events";
import Contact from "./components/Contact/Contact";

const App = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading process for demo (you can adjust this in real-world apps)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Hide loading after 2 seconds
    }, 2000);
  }, []);

  return (
    <Router>
      <div className="app">
        {loading ? (
          <div className="loading-overlay">
            <div className="spinner"></div>
          </div>
        ) : (
          <>
            <Navbar />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/events" element={<Events />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
