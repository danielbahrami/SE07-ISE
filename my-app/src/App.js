// App.js
import React from "react";
import HomePage from "./pages/HomePage";
import MatchPage from "./pages/MatchPage";
import SignUpPage from './pages/SignUpPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"; // This is your global styles, if you have any
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" Component={LoginPage} />
          <Route path="/home" Component={HomePage} />
          <Route path="/match" Component={MatchPage} />
          <Route path="/signup" Component={SignUpPage} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
