// Header.js
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>RoomieMatch</h1>
      <div className="header-icons">
        <button>🔍</button>
        <button>👤</button>
      </div>
    </header>
  );
};

export default Header;
