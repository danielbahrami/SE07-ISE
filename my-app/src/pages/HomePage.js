// HomePage.js
import React from "react";
import Header from "../components/Header";
import RoomieCard from "../components/RoomieCard";
import FilterSidebar from "../components/FilterSidebar";
import { useNavigate } from "react-router-dom";
import ".././styles/HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  const goToMatchPage = () => {
    navigate("/match");
  };
  // Dummy data for the sake of example
  const roomies = [
    {
      id: 1,
      name: "John Doe",
      age: 25,
      occupation: "Developer",
      gender: "Male",
      socialPreference: "Introvert",
      tidiness: "Neat",
      hobbies: "Reading",
      pets: "None",
      searchArea: "Odense",
      score: 87,
      budget: "DKK 3,500",
    },
    // ... more roomies
  ];

  return (
    <div className="home-page">
      <Header />
      <div className="content">
        <FilterSidebar />
        <div className="roomie-cards">
          {roomies.map((roomie) => (
            <RoomieCard key={roomie.id} roomie={roomie} />
          ))}
        </div>
        {/* Other homepage content */}
        <button onClick={goToMatchPage}>Go to Match Page</button>
      </div>
    </div>
  );
};

export default HomePage;
