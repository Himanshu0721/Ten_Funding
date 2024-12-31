import React from "react";
import "./About.css";
import MainImage from "../../assets/images/about-main-image.png";

function About() {
  return (
    <div className="about-container">
      <h1>
        One platform to <span>find invester</span>
      </h1>
      <div className="about-main-div">
        <img src={MainImage} alt="main image" />
        <div className="about-main-buttons">
          <button className="about-main-button1">Find Investors</button>
          <button className="about-main-button2">Find VC Jobs</button>
        </div>
      </div>
      <p>
        Startups, VCs, and folks in between - we have something for everyone.
        And they love us for it.
      </p>
    </div>
  );
}

export default About;
