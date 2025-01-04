import React from "react";
import "./cardframe.css";
// import Pitch from "./Pitch.jsx";

const Cardframe = () => {
  return (
    <>
    <div className="investor-card">
      <a href="/"className="back-button">← Back to Investors
        <button ></button>
      </a>
      <div className="header-div">
        <img
          src="https://cdn.prod.website-files.com/66231acb2160c0962a6c50d4/67065f076f6590d0317c92f0_2_a_m_ventures_logo.jpeg"
          alt="2am VC"
          className="logo-div"
        />
        <h1>Ten Funding</h1>
        
      </div>
      <div className="social-links">
          <a href="#link"><img src="https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/6671efd00f1aa0bc9b641207_square-arrow-up-right-solid%20(2).svg" alt="W" /></a>
          <a href="#link"><img src="https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/6630f43d9e67242d6e8290f4_linkedin.svg" alt="LinkedIn" /></a>
          <a href="#link"><img src="https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/663b81d6b7ac04fade543633_twitter.svg" alt="X" /></a>
          <a href="#link"><img src="https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/6630f43dbef2a10720d8e1a9_cb.webp" alt="Crunchbase" /></a>
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
      <a href="/Pitch" className="pitch-button">Pitch Now
        <button ></button>
      </a>
        <button className="fundraising-button">Checkout Fundraising OS</button>
      </div>
    </div>
    </>
  );
};

export default Cardframe;