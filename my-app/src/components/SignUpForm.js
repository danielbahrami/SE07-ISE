// SignUpForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/SignUpForm.css"; // Ensure you have a corresponding CSS file

const SignUpForm = () => {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    gender: "",
    age: "",
    occupation: "",
    tidiness: "",
    pets: "",
    searchArea: "",
    hobbies: "",
    socialInterests: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the form data to the backend
      const response = await axios.post(
        "http://localhost:5000/signup",
        formData
      );
      console.log("User created:", response.data);
      navigate("/"); // Implement your success logic here (e.g., redirect to profile page)
    } catch (error) {
      console.error(
        "Error signing up:",
        error.response?.data?.message || error.message
      );
    }
  };

  return (
    <div className="signup-page">
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            placeholder="Gender"
          />
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Age"
          />
          <input
            type="text"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            placeholder="Occupation"
          />
          <input
            type="text"
            name="tidiness"
            value={formData.tidiness}
            onChange={handleChange}
            placeholder="Tidiness"
          />
          <input
            type="text"
            name="pets"
            value={formData.pets}
            onChange={handleChange}
            placeholder="Pets"
          />
          <input
            type="text"
            name="searchArea"
            value={formData.searchArea}
            onChange={handleChange}
            placeholder="Search Area"
          />
          <input
            type="text"
            name="hobbies"
            value={formData.hobbies}
            onChange={handleChange}
            placeholder="Hobbies"
          />
          <input
            type="text"
            name="socialInterests"
            value={formData.socialInterests}
            onChange={handleChange}
            placeholder="Social Interests"
          />
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
