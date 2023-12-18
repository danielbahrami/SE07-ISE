// LoginPage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginFrom.js";
import Header from "../components/Header";
import ".././styles/LoginForm.css"; // Your LoginPage CSS file

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate("/home"); // Redirect to home page on successful login
  };
  return (
    <div className="login-page">
      <Header />
      <LoginForm onLoginSuccess={handleLoginSuccess} />
    </div>
  );
};

export default LoginPage;
