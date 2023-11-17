// RoomieCard.js
import React from "react";
import "./RoomieCard.css";

const RoomieCard = ({ roomie }) => {
  return (
    <div className="roomie-card">
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
        <div className="roomie-score">Score: {roomie.score}</div>
        <div className="roomie-budget">Budget: {roomie.budget}</div>
      </div>
    </div>
  );
};

export default RoomieCard;
