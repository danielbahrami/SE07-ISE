// SignUpPage.js
import React from 'react';
import Header from '../components/Header'; // If you want to include the header
import SignUpForm from '../components/SignUpForm';
import '../styles/SignUpPage.css'; // Your SignUpPage CSS file

const SignUpPage = () => {
  return (
    <div className="signup-page">
      <Header /> {/* Include the Header if needed */}
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
