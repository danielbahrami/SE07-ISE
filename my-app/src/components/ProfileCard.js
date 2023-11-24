import React from "react";
import ".././styles/ProfileCard.css"; // Make sure to create this CSS file for styling

const ProfileCard = () => {
  // Dummy information to be displayed
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
        <h3>Roomie</h3>
        <p>Name: {dummyData.name}</p>
        <p>Age: {dummyData.age}</p>
        <p>Occupation: {dummyData.occupation}</p>
        <p>Gender: {dummyData.gender}</p>
        <p>Social Preference: {dummyData.socialPreference}</p>
        <p>Tidiness: {dummyData.tidiness}</p>
        <p>Hobbies: {dummyData.hobbies}</p>
        <p>Pets: {dummyData.pets}</p>
        <div className="profile-bottom-info">
          <p>Search Area: {dummyData.searchArea}</p>
          <p>Budget: {dummyData.budget}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
