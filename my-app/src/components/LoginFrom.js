// LoginForm.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '.././styles/LoginForm.css'; // Make sure to create this CSS file for styling

const LoginForm = () => {
  let navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic here
    // ...

    // Redirect to the homepage upon successful login
    navigate('/home');
  };

  return (
    <div className="login-form">
      <div className="avatar-container">
        <img src="avatar-placeholder.png" alt="Profile" />
      </div>
      <div className="form-container">
        <label htmlFor="email">Name or Email:</label>
        <input type="text" id="email" name="email" placeholder="name or email..." />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="password..." />

        <button onClick={handleLogin} className="login-button">Login</button>
        <button className="signup-button">Sign up</button>
      </div>
    </div>
  );
};

export default LoginForm;
