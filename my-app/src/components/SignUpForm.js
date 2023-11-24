// SignUpForm.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SignUpForm.css'; // Ensure you have a corresponding CSS file

const SignUpForm = () => {
  let navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    // Here you will handle the signup logic, like sending data to a backend server

    // After successful signup, redirect the user to the home page
    navigate('/home');
  };

  return (
    <div className='signup-page'>
        <form className="signup-form" onSubmit={handleSignUp}>
        <div className="form-group">
          <label htmlFor="fullName">Full name:</label>
          <input type="text" id="fullName" name="fullName" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="occupation">Occupation:</label>
          <input type="text" id="occupation" name="occupation" />

          <label htmlFor="gender">Gender:</label>
          <input type="text" id="gender" name="gender" />

          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" />
        </div>
        <div className="form-group">
          <label htmlFor="hobbies">Hobbies:</label>
          <input type="text" id="hobbies" name="hobbies" />

          <label htmlFor="pets">Pets:</label>
          <input type="text" id="pets" name="pets" />

          <label htmlFor="tidiness">Tidiness:</label>
          <input type="text" id="tidiness" name="tidiness" />

          <label htmlFor="socialInterests">Social interests:</label>
          <input type="text" id="socialInterests" name="socialInterests" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="create-user-button">Create User</button>
      </form>
    </div>
      );
};

      export default SignUpForm;
