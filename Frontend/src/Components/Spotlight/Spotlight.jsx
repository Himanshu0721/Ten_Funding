import React, { useState } from "react";
import "./Spotlight.css";
import { useNavigate } from "react-router-dom";

function Spotlight() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/spotlight-form");
  };

  // Sample data for investors

  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Coming soon...</h1>
        <hr />
        <div className="home-inner-div">
          <h2>Where top talents meet top founders</h2>
          <button onClick={handleButtonClick}>Join the waitlist</button>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Spotlight;
