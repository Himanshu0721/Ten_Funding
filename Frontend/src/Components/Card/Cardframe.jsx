import React from "react";
import "./cardframe.css";

const Cardframe = () => {
  return (
    <div className="investor-card">
      <button className="back-button">← Back to Investors</button>
      <div className="header">
        <img
          src="https://via.placeholder.com/50"
          alt="2am VC"
          className="logo"
        />
        <h1>Ten Funding</h1>
        <div className="social-links">
          <a href="#link"><img src="https://via.placeholder.com/20" alt="Website" /></a>
          <a href="#linkedin"><img src="https://via.placeholder.com/20" alt="LinkedIn" /></a>
          <a href="#x"><img src="https://via.placeholder.com/20" alt="X" /></a>
          <a href="#crunchbase"><img src="https://via.placeholder.com/20" alt="Crunchbase" /></a>
        </div>
      </div>
      <p className="description">
      Founded in 2021, XYZ Capital is a global investment firm. The firm focuses on funding companies in various sectors such as Technology, Healthcare, and E-commerce. XYZ Capital has supported over 50 early-stage ventures, with a notable portfolio including AlphaTech, BetaMart, GammaSolutions, and DeltaCorp.
      </p>
      <div className="details">
        <div className="row">
          <div>Best Way to Get in Touch</div>
          <div>Warm Intro, LinkedIn</div>
        </div>
        <div className="row">
          <div>Stage Focus</div>
          <div>Pre-Seed, Seed, Series A</div>
        </div>
        <div className="row">
          <div>Sector Focus</div>
          <div>Sector Agnostic</div>
        </div>
        <div className="row">
          <div>Ticket Size</div>
          <div>$100K - $500K</div>
        </div>
        <div className="row">
          <div>Total Portfolio</div>
          <div>48</div>
        </div>
        <div className="row">
          <div>Current Fund Corpus</div>
          <div>$10M</div>
        </div>
        <div className="row">
          <div>Total Fund Corpus</div>
          <div>$20M</div>
        </div>
      </div>
      <div className="actions">
        <button className="pitch-button">Pitch Now!</button>
        <button className="fundraising-button">Checkout Fundraising OS</button>
      </div>
    </div>
  );
};

export default Cardframe;
