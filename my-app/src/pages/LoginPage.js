// LoginPage.js
import React from "react";
import LoginForm from "../components/LoginFrom.js";
import Header from "../components/Header";
import ".././styles/LoginForm.css"; // Your LoginPage CSS file

const LoginPage = () => {
  return (
    <div className="login-page">
      <Header />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
