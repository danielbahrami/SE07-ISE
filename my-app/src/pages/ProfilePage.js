// ProfilePage.js
import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import "../styles/ProfilePage.css"; // Ensure you have a corresponding CSS file
import axios from 'axios';

const ProfilePage = () => {
  const [userId, setUserId] = useState(null);
  const [userData, setUserData] = useState({
    occupation: '',
    tidiness: '',
    pets: '',
    searchArea: '',
    hobbies: '',
    socialInterests: ''
  });

    useEffect(() => {
        // Fetch user data from localStorage
        const storedUserData = JSON.parse(localStorage.getItem('userData'));
        if (storedUserData) {
            setUserData(storedUserData);
            const userId = localStorage.getItem('userId');
            setUserId(userId)
        }
    }, []);


  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = localStorage.getItem('userId');
      await axios.patch(`http://localhost:5000/user/${userId}`, userData);
      // Handle successful update (show success message, etc.)
  } catch (error) {
      console.error('Error updating profile:', error);
      // Handle error (show error message, etc.)
  }
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

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
            <form onSubmit={handleSubmit}>
              <div className="detail-item">
                <label htmlFor="occupation">Occupation:</label>
                <input
                  type="text"
                  id="occupation"
                  value={userData.occupation}
                  onChange={handleInputChange}
                />
              </div>

              <div className="detail-item">
                <label htmlFor="tidiness">Tidiness:</label>
                <input
                  type="text"
                  id="tidiness"
                  value={userData.tidiness}
                  onChange={handleInputChange}
                />
              </div>

              <div className="detail-item">
                <label htmlFor="pets">Pets:</label>
                <input
                  type="text"
                  id="pets"
                  value={userData.pets}
                  onChange={handleInputChange}
                />
              </div>

              <div className="detail-item">
                <label htmlFor="searchArea">Search area:</label>
                <input
                  type="text"
                  id="searchArea"
                  value={userData.searchArea}
                  onChange={handleInputChange}
                />
              </div>

              <div className="detail-item">
                <label htmlFor="hobbies">Hobbies:</label>
                <input
                  type="text"
                  id="hobbies"
                  value={userData.hobbies}
                  onChange={handleInputChange}
                />
              </div>

              <div className="detail-item">
                <label htmlFor="socialInterests">Social interests:</label>
                <input
                  type="text"
                  id="socialInterests"
                  value={userData.socialInterests}
                  onChange={handleInputChange}
                />
              </div>
              <button type="submit">Save Changes</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
