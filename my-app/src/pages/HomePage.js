// HomePage.js
import React from "react";
import Header from "../components/Header";
import RoomieCard from "../components/RoomieCard";
import FilterSidebar from "../components/FilterSidebar";
import "./HomePage.css";

const HomePage = () => {
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
      </div>
    </div>
  );
};

export default HomePage;
