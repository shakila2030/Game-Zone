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

  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate(formData);
    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch('http://localhost:3000/users/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          const data = await response.json();
          console.log('User signed in successfully', data);
          setSuccessMessage('User signed in successfully');
          // Store the token if received
          localStorage.setItem('token', data.token);
          // Redirect to a dashboard or another page
        } else {
          const errorData = await response.json();
          console.error('Failed to sign in', errorData);
          setErrors({ general: 'Failed to sign in. Please check your credentials.' });
        }
      } catch (error) {
        console.error('Error:', error);
        setErrors({ general: 'An error occurred. Please try again later.' });
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
