import React, { useState } from 'react';
import './SignUpPage.css';
import wallpaper from "../../images/i.jpeg";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate(formData);
    if (Object.keys(newErrors).length === 0) {
      console.log('Form data submitted:', formData);
    } else {
      setErrors(newErrors);
    }
  };

  const validate = (data) => {
    const newErrors = {};
    if (data.password !== data.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    // Add more validations as needed
    return newErrors;
  };

  return (
    <div className="signup-page" style={{ backgroundImage: `url(${wallpaper})` }}>
      <div className="form-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Age:</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            {errors.confirmPassword && (
              <span className="error">{errors.confirmPassword}</span>
            )}
          </div>
          <button type="submit" className="submit-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
