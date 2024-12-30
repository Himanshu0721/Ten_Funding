import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/registration-form");
  };

  return (
    <div className="home-container">
      <div className="home-header">
        <h1>One place to find the right investor for you.</h1>
        <hr />
        <div className="home-inner-div">
          <h2>Check out our database of active investors.</h2>
          <button onClick={handleButtonClick}>Join The Database</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
