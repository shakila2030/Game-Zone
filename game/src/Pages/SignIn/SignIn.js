import React, { useState } from 'react';
import './SignIn.css';
import wallpaper from "../../images/i.jpeg";

const SignInPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate(formData);
    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch('http://localhost:3000/signin', { // Ensure this URL matches your backend server's URL
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        if (response.ok) {
          console.log('User signed in successfully');
          // You can add code here to handle successful sign-in, e.g., redirecting to a dashboard
        } else {
          console.error('Failed to sign in');
          // You can handle errors here if needed
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      setErrors(newErrors);
    }
  };

  const validate = (data) => {
    const newErrors = {};
    if (!data.email) {
      newErrors.email = 'Email is required';
    }
    if (!data.password) {
      newErrors.password = 'Password is required';
    }
    // Add more validations as needed
    return newErrors;
  };

  return (
    <div className="signin-page" style={{ backgroundImage: `url(${wallpaper})` }}>
      <div className="form-container">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && (
              <span className="error">{errors.email}</span>
            )}
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
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>
          <button type="submit" className="submit-button">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
