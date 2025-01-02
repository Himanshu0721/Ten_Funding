import React from "react";
import "./pitch.css";

const Pitch = () => {
  return (
    <div className="application-form-container">
      <header className="form-header">
        <div className="logo">
          <span className="logo-icon">F</span>
          <span className="logo-text">NoteForms</span>
        </div>
      </header>
      <main className="form-content">
        <h1 className="form-title">2am Application</h1>
        <form className="form">
          <label>
            Mail Address
            <input type="email" placeholder="Enter your email" />
          </label>
          <label>
            Startup Name
            <input type="text" placeholder="Enter your startup name" />
          </label>
          <label>
            Business Description
            <textarea placeholder="Describe your business" />
          </label>
          <label>
            Founders' LinkedIn Profiles
            <input type="url" placeholder="Enter LinkedIn profiles" />
          </label>
          <label>
            Product Website
            <input type="url" placeholder="Enter product website" />
          </label>
          <label>
            Funding Amount (in $)
            <input type="number" placeholder="Enter funding amount" />
          </label>
          <label>
            Pitch Deck (URL)
            <input type="url" placeholder="Enter pitch deck URL" />
          </label>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </main>
    </div>
  );
};

export default Pitch;
