import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Component Imports
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
// import Events from './components/Events/Events';
// import Contact from './components/Contact/Contact';
// import Register from './components/Register/Register';
// import NotFound from './components/NotFound/NotFound';



const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
           
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;