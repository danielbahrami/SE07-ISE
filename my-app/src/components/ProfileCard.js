import React from "react";
import ".././styles/ProfileCard.css"; // Make sure to create this CSS file for styling

const ProfileCard = ({ userData }) => {
  // Dummy information to be displayed
  const hobbies = Array.isArray(userData.hobbies)
    ? userData.hobbies.join(", ")
    : "Not specified";
  const socialInterests = Array.isArray(userData.socialInterests)
    ? userData.socialInterests.join(", ")
    : "Not specified";
  const dummyData = {
    name: "John Doe",
    age: "25",
    occupation: "Software Developer",
    gender: "Male",
    socialPreference: "Introverted",
    tidiness: "Neat",
    hobbies: "Reading, Gaming",
    pets: "None",
    searchArea: "Odense",
    budget: "4.000",
  };

  return (
    <div className="profile-card">
      <div className="profile-picture-container">
        {/* Placeholder for profile picture */}
      </div>
      <div className="profile-info">
        <h2>{userData.name}</h2>
        <p>Email: {userData.email}</p>
        <p>Age: {userData.age}</p>
        <p>Gender: {userData.gender}</p>
        <p>Occupation: {userData.occupation}</p>
        <p>Tidiness: {userData.tidiness}</p>
        <p>Pets: {userData.pets}</p>
        <p>Hobbies: {hobbies}</p>
        <p>Social Interests: {socialInterests}</p>
        <div className="profile-bottom-info">
          <p>Search Area: {dummyData.searchArea}</p>
          <p>Budget: {dummyData.budget}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
