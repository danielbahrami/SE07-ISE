// ProfilePage.js
import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import "../styles/ProfilePage.css"; // Ensure you have a corresponding CSS file
import axios from 'axios';

const ProfilePage = () => {
  const [userId, setUserId] = useState();
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
        }  if (userId) {
          // Fetch user profile data using userId
      } else {
          console.error('No user ID found');
          // Handle the absence of userId
      }
    }, []);

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form...');

    // Retrieve stored data
    const storedData = localStorage.getItem('userData');
    if (!storedData) {
        console.error('No stored user data found');
        return;  // Exit if no data found
    }

    // Parse stored data
    let parsedData;
    try {
        parsedData = JSON.parse(storedData);
    } catch (error) {
        console.error('Error parsing stored user data:', error);
        return;  // Exit if parsing fails
    }

    // Check if userId exists
    const userId = parsedData.userId;
    if (!userId) {
        console.error('No user ID found in stored data');
        return;  // Exit if no userId found
    }
    console.log('UserId:', userId);  // Log userId for confirmation

    // Proceed with the update request
    try {
      const response = await axios.patch(`http://localhost:5000/user/${userId}`, userData);
      console.log('Update response:', response);

      // Update localStorage with the new user data
      localStorage.setItem('userData', JSON.stringify(response.data));

      // Optionally, update state to reflect changes immediately
      setUserData(response.data);

      // Handle successful update (e.g., show success message)
  } catch (error) {
      console.error('Error updating profile:', error.response ? error.response.data : error);
      // Handle error
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
                  name="occupation"
                  value={userData.occupation}
                  onChange={handleInputChange}
                />
              </div>

              <div className="detail-item">
                <label htmlFor="tidiness">Tidiness:</label>
                <input
                  type="text"
                  name="tidiness"
                  value={userData.tidiness}
                  onChange={handleInputChange}
                />
              </div>

              <div className="detail-item">
                <label htmlFor="pets">Pets:</label>
                <input
                  type="text"
                  name="pets"
                  value={userData.pets}
                  onChange={handleInputChange}
                />
              </div>

              <div className="detail-item">
                <label htmlFor="searchArea">Search area:</label>
                <input
                  type="text"
                  name="searchArea"
                  value={userData.searchArea}
                  onChange={handleInputChange}
                />
              </div>

              <div className="detail-item">
                <label htmlFor="hobbies">Hobbies:</label>
                <input
                  type="text"
                  name="hobbies"
                  value={userData.hobbies}
                  onChange={handleInputChange}
                />
              </div>

              <div className="detail-item">
                <label htmlFor="socialInterests">Social interests:</label>
                <input
                  type="text"
                  name="socialInterests"
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
