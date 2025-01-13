import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import "./Contact.css";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <Mail className="contact-icon" />,
      title: "Email Us",
      content: "support@symposium.com",
      link: "mailto:support@symposium.com",
    },
    {
      icon: <Phone className="contact-icon" />,
      title: "Call Us",
      content: "+91 8825869348",
      link: "tel:+18887966724",
    },
    {
      icon: <MapPin className="contact-icon" />,
      title: "Visit Us",
      content: "Chennai Institute Of Technology, Kundrathur",
      link: "https://maps.app.goo.gl/qcSoXjnkYceLd1r3A",
    },
  ];

  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Header Section */}
        <div className="contact-header">
          <h1 className="contact-title">Connect with Symposium</h1>
          <p className="contact-subtitle">
            Have questions about our events? We're here to help make your
            symposium experience exceptional.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="contact-info-grid">
          {contactInfo.map((item, index) => (
            <div key={index} className="contact-card">
              <div className="contact-card-content">
                <div className="icon-container">{item.icon}</div>
                <h3 className="contact-card-title">{item.title}</h3>
                <a href={item.link} className="contact-card-link">
                  {item.content}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="contact-form-container">
          <h2 className="form-title">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="form-input"
                  placeholder="John Doe"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="form-input"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Subject</label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="form-input"
                placeholder="How can we help?"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows="5"
                className="form-textarea"
                placeholder="Tell us more about your inquiry..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`submit-button ${isSubmitting ? "submitting" : ""}`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="button-icon spinning" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="button-icon" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
