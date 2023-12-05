import React from "react";
import enterIcon from "../icons/enter.png";
import userInterfaceIcon from "../icons/user-interface.png";
import { useNavigate, Link } from "react-router-dom";
import ".././styles/Header.css";

const Header = () => {
  let navigate = useNavigate();

  const goToProfile = () => {
    navigate("/profile"); // This should match the route path you set for the ProfilePage
  };
  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
};

  return (
    <div className="header">
      <Link to="/home">
      <h1>RoomieMatch</h1>
      </Link>
      <div className="header-icons">
        <button onClick={handleBackClick}>
          <img src={enterIcon} alt="Enter" width="24" height="24" />{" "}
          {/* Adjust width and height as needed */}
        </button>
        <button>
          <img
            src={userInterfaceIcon}
            alt="User Interface"
            width="24"
            height="24"
            onClick={goToProfile}
          />{" "}
          {/* Adjust width and height as needed */}
        </button>
      </div>
    </div>
  );
};

export default Header;
