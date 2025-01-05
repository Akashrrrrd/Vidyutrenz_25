import React from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-subtitle">We'd love to hear from you! Reach out to us via any of the methods below.</p>
        <div className="contact-details">
          <div className="contact-detail">
            <FaEnvelope className="contact-icon" />
            <h3>Email</h3>
            <p><a href="mailto:support@sympo.com">support@sympo.com</a></p>
          </div>
          <div className="contact-detail">
            <FaPhone className="contact-icon" />
            <h3>Phone</h3>
            <p><a href="tel:+1234567890">+1 234 567 890</a></p>
          </div>
          <div className="contact-detail">
            <FaMapMarkerAlt className="contact-icon" />
            <h3>Address</h3>
            <p>123 Sympo Lane, Innovation City, USA</p>
          </div>
        </div>
        <form className="contact-form">
          <h3>Send us a message</h3>
          <div className="form-group">
            <input type="text" placeholder="Your Name" className="form-input" required />
            <input type="email" placeholder="Your Email" className="form-input" required />
          </div>
          <textarea placeholder="Your Message" className="form-textarea" rows="5" required></textarea>
          <button type="submit" className="form-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;