// RoomieCard.js
import React from "react";
import ".././styles/RoomieCard.css";
import { useNavigate } from "react-router-dom";

const roomieData = [
  {
    id: 1,
    name: "Alice",
    age: 25,
    occupation: "Software Engineer",
    gender: "Female",
    socialPreference: "Extrovert",
    tidiness: "Neat and organized",
    hobbies: "Reading, hiking",
    pets: "None",
    searchArea: "San Francisco",
    score: 90,
    budget: "$1500/month",
  },
  {
    id: 2,
    name: "Bob",
    age: 28,
    occupation: "Graphic Designer",
    gender: "Male",
    socialPreference: "Introvert",
    tidiness: "Moderate",
    hobbies: "Painting, gaming",
    pets: "1 cat",
    searchArea: "New York",
    score: 85,
    budget: "$1800/month",
  },
  {
    id: 3,
    name: "Eva",
    age: 22,
    occupation: "Student",
    gender: "Female",
    socialPreference: "Extrovert",
    tidiness: "Messy",
    hobbies: "Cooking, dancing",
    pets: "None",
    searchArea: "Los Angeles",
    score: 78,
    budget: "$1300/month",
  },
  // Add more fictive Roomie data as needed
];

const RoomieCard = ({ roomie, onClick }) => {
  return (
    <div className="roomie-card" onClick={onClick}>
      <div className="roomie-details">
        <div className="roomie-name">Name: {roomie.name}</div>
        <div className="roomie-age">Age: {roomie.age}</div>
        <div className="roomie-occupation">Occupation: {roomie.occupation}</div>
        <div className="roomie-gender">Gender: {roomie.gender}</div>
        <div className="roomie-social">
          Social Preference: {roomie.socialPreference}
        </div>
        <div className="roomie-tidiness">Tidiness: {roomie.tidiness}</div>
        <div className="roomie-hobbies">Hobbies: {roomie.hobbies}</div>
        <div className="roomie-pets">Pets: {roomie.pets}</div>
      </div>
      <div className="roomie-photo">
        {/* Placeholder for photo */}
        <div>Photo</div>
      </div>
      <div className="roomie-location-score">
        <div className="roomie-search-area">
          Search Area: {roomie.searchArea}
        </div>
        <div className="roomie-score">{roomie.score}</div>
        <div className="roomie-budget">Budget: {roomie.budget}</div>
      </div>
    </div>
  );
};

const RoomieCards = () => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate("/match"); // Navigate to the match page
  };
  return (
    <div className="roomie-cards">
      {roomieData.map((roomie) => (
        <RoomieCard key={roomie.id} roomie={roomie} onClick={handleCardClick} />
      ))}
    </div>
  );
};

export default RoomieCards;
