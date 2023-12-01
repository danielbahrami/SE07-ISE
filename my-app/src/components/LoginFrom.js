// LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import ".././styles/LoginForm.css"; // Make sure to create this CSS file for styling
import axios from 'axios';

const LoginForm = ({ onLoginSuccess }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      // Store user data in localStorage
      localStorage.setItem('userData', JSON.stringify(response.data));
      onLoginSuccess(); // Callback for successful login
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login failure (e.g., show an error message)
    }
  };

  const handleSignUpClick = () => {
    navigate("/signup"); // Navigate to the SignUpPage
  };

  return (
    <div className="login-form">
      <div className="avatar-container">
        <img src="avatar-placeholder.png" alt="Profile" />
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        <button
          type="button"
          onClick={handleSignUpClick}
          className="signup-button"
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
