// HomePage.js
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import RoomieCard from "../components/RoomieCard";
import FilterSidebar from "../components/FilterSidebar";
import { useNavigate } from "react-router-dom";
import ".././styles/HomePage.css";

const HomePage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from localStorage
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setUserData(parsedData);
    }
  }, []);

  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate("/match"); // Navigate to the match page
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
          {userData &&
            roomies.map((roomie) => (
              <RoomieCard
                key={roomie.id}
                roomie={roomie}
                userData={userData}
                onclick={handleCardClick}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
