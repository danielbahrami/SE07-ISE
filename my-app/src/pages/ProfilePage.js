// ProfilePage.js
import React, { useState } from "react";
import Header from "../components/Header";
import "../styles/ProfilePage.css"; // Ensure you have a corresponding CSS file

const ProfilePage = () => {
  // State hooks initialized with dummy profile data
  const [occupation, setOccupation] = useState("Graphic Designer");
  const [tidiness, setTidiness] = useState("Neat");
  const [pets, setPets] = useState("Cat");
  const [searchArea, setSearchArea] = useState("New York");
  const [hobbies, setHobbies] = useState("Photography, Traveling");
  const [socialInterests, setSocialInterests] = useState(
    "Book Clubs, Tech Meetups"
  );

  const [userData, setUserData] = useState({
    fullName: "John Doe",
    gender: "Male",
    age: "30",
    email: "johndoe@example.com",
    occupation: "Developer",
    tidiness: "Neat",
    pets: "None",
    searchArea: "San Francisco",
    hobbies: "Gaming, Reading",
    socialInterests: "Networking, Hiking",
  });
  // Handlers for each field remain the same as in the previous example

  return (
    <div className="profile-page">
      <Header />
      <div className="user-details">
        <div className="avatar-section">
          <div className="avatar-container">
            <img src="avatar-placeholder.png" alt="User Avatar" />
            {/* Placeholder for user avatar */}
          </div>
          <div className="personal-info">
            <h1>{userData.fullName}</h1>
            <p>Gender: {userData.gender}</p>
            <p>Age: {userData.age}</p>
            <p>Email: {userData.email}</p>
          </div>
        </div>
        <div className="about-me-section">
          <h2>About me:</h2>
          <div className="details-grid">
            <div className="detail-item">
              <label htmlFor="occupation">Occupation:</label>
              <input
                type="text"
                id="occupation"
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
              />
            </div>

            <div className="detail-item">
              <label htmlFor="tidiness">Tidiness:</label>
              <input
                type="text"
                id="tidiness"
                value={tidiness}
                onChange={(e) => setTidiness(e.target.value)}
              />
            </div>

            <div className="detail-item">
              <label htmlFor="pets">Pets:</label>
              <input
                type="text"
                id="pets"
                value={pets}
                onChange={(e) => setPets(e.target.value)}
              />
            </div>

            <div className="detail-item">
              <label htmlFor="searchArea">Search area:</label>
              <input
                type="text"
                id="searchArea"
                value={searchArea}
                onChange={(e) => setSearchArea(e.target.value)}
              />
            </div>

            <div className="detail-item">
              <label htmlFor="hobbies">Hobbies:</label>
              <input
                type="text"
                id="hobbies"
                value={hobbies}
                onChange={(e) => setHobbies(e.target.value)}
              />
            </div>

            <div className="detail-item">
              <label htmlFor="socialInterests">Social interests:</label>
              <input
                type="text"
                id="socialInterests"
                value={socialInterests}
                onChange={(e) => setSocialInterests(e.target.value)}
              />
            </div>
          </div>
        </div>
        {/* ... add a submit button if you want to save the profile data ... */}
      </div>
    </div>
  );
};

export default ProfilePage;
