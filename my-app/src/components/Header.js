import React from "react";
import enterIcon from "../icons/enter.png";
import userInterfaceIcon from "../icons/user-interface.png";

import ".././styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>RoomieMatch</h1>
      <div className="header-icons">
        <button>
          <img src={enterIcon} alt="Enter" width="24" height="24" />{" "}
          {/* Adjust width and height as needed */}
        </button>
        <button>
          <img
            src={userInterfaceIcon}
            alt="User Interface"
            width="24"
            height="24"
          />{" "}
          {/* Adjust width and height as needed */}
        </button>
      </div>
    </div>
  );
};

export default Header;
