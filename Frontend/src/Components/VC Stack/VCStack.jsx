import React, { useState } from "react";
import "./VCStack.css";
import { useNavigate } from "react-router-dom";

function VCStack() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/vc-stack-form");
  };

  // Sample data for investors

  return (
    <div className="vcstack-container">
      <div className="vcstack-header">
        <h1>Coming soon...</h1>
        <hr />
        <div className="vcstack-inner-div">
          <h2>Go-to place to find your venture capital tool stack</h2>
          <button onClick={handleButtonClick}>Join the waitlist</button>
        </div>
      </div>
      <br />
    </div>
  );
}

export default VCStack;
