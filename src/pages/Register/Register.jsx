import React, { useState } from "react";
import "./Register.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Mail, User, Phone, School, BookOpen, Users } from "lucide-react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    department: "",
    year: "",
    event: "",
  });

  // Sample event options - customize as needed
  const eventOptions = [
    { id: 1, name: "Code Combat", fee: "₹500" },
    { id: 2, name: "Hack Fusion", fee: "₹300" },
    { id: 3, name: "Treasure Hunt", fee: "₹800" },
    { id: 4, name: "Cultural Night", fee: "₹1000" },
    { id: 5, name: "AI/ML Workshop", fee: "₹600" },
    { id: 6, name: "Web Development", fee: "₹400" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.event) {
      toast.error("Please select an event!");
      return;
    }

    // Here you would typically make an API call to register
    // For now, we'll simulate success
    toast.success("Registration successful! Welcome to " + formData.event);
    console.log("Form submitted:", formData);

    // Optional: Clear form after successful submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      college: "",
      department: "",
      year: "",
      event: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="register-container">
      <div className="register-content">
        <div className="register-header">
          <h1>Register for Symposium</h1>
          <p>Join us for an exciting day of learning and networking!</p>
        </div>

        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="input-container">
              <User className="input-icon" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="input-container">
              <Mail className="input-icon" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="input-container">
              <Phone className="input-icon" />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="input-container">
              <School className="input-icon" />
              <input
                type="text"
                name="college"
                placeholder="College Name"
                value={formData.college}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group half">
              <div className="input-container">
                <BookOpen className="input-icon" />
                <input
                  type="text"
                  name="department"
                  placeholder="Department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group half">
              <div className="input-container">
                <Users className="input-icon" />
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Year</option>
                  <option value="1">1st Year</option>
                  <option value="2">2nd Year</option>
                  <option value="3">3rd Year</option>
                  <option value="4">4th Year</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-group">
            <div className="input-container">
              <BookOpen className="input-icon" />
              <select
                name="event"
                value={formData.event}
                onChange={handleChange}
                required
                className="event-select"
              >
                <option value="">Select Event</option>
                {eventOptions.map((event) => (
                  <option key={event.id} value={event.name}>
                    {event.name} - {event.fee}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button type="submit" className="submit-button">
            Register Now
          </button>

          {/* <p className="login-link">
            Already registered? <a href="/login">Login here</a>
          </p> */}
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Register;
