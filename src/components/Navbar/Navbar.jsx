import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';
import navbar_logo from './../../assets/navbar_logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <img src={navbar_logo} alt="Logo" />
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-links-desktop">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/events" className="nav-link">Events</Link>
            <Link to="/contact" className="nav-button">Contact Us</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="menu-icon" />
            ) : (
              <Menu className="menu-icon" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="nav-links-mobile">
            <Link to="/" className="nav-link-mobile" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="nav-link-mobile" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </Link>
            <Link to="/services" className="nav-link-mobile" onClick={() => setIsMobileMenuOpen(false)}>
              Services
            </Link>
            <Link to="/portfolio" className="nav-link-mobile" onClick={() => setIsMobileMenuOpen(false)}>
              Portfolio
            </Link>
            <Link to="/contact" className="nav-link-mobile" onClick={() => setIsMobileMenuOpen(false)}>
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;