// MatchPage.js
import React, { useEffect, useState } from "react";
import ProfileCard from "../components/ProfileCard"; // Component for the left side
import MapView from "../components/MapView"; // Component for the right side
import ContactButton from "../components/ContactButton"; // Button to contact user
import Header from "../components/Header"; // Adjust the path as necessary
import "../styles/MatchPage.css"; // Your CSS file for styling

const MatchPage = () => {
  const [userData, setUserData] = useState({
    /* ... initial state ... */
  });

  useEffect(() => {
    // Fetch and set user data from localStorage or an API
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setUserData(parsedData);
    }
  }, []);
  return (
    <div className="match-page">
      <Header /> {/* Include the Header at the top */}
      <div className="match-content">
        <div className="left-side">
          <ProfileCard userData={userData} />
        </div>
        <div className="right-side">
          <MapView />
          <ContactButton />
        </div>
      </div>
    </div>
  );
};

export default MatchPage;
