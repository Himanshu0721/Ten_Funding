import React from "react";
import "./cardframe.css";
import { NavLink } from "react-router-dom";

const Cardframe = () => {
  return (
    <>
      <div className="investor-card">
        <NavLink to="/" className="back-button">
          ← Back to Investors
        </NavLink>
        <div className="header-div">
          <img
            src="https://cdn.prod.website-files.com/66231acb2160c0962a6c50d4/67065f076f6590d0317c92f0_2_a_m_ventures_logo.jpeg"
            alt="2am VC"
            className="logo-div"
          />
          <h1>TEN Funding</h1>
        </div>
        <div className="social-links">
          <a href="#link">
            <img
              src="https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/6671efd00f1aa0bc9b641207_square-arrow-up-right-solid%20(2).svg"
              alt="W"
            />
          </a>
          <a href="#link">
            <img
              src="https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/6630f43d9e67242d6e8290f4_linkedin.svg"
              alt="LinkedIn"
            />
          </a>
          <a href="#link">
            <img
              src="https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/663b81d6b7ac04fade543633_twitter.svg"
              alt="X"
            />
          </a>
          <a href="#link">
            <img
              src="https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/6630f43dbef2a10720d8e1a9_cb.webp"
              alt="Crunchbase"
            />
          </a>
        </div>
        <p className="description">
          XYZ Capital is a multinational investing firm that was founded in
          2021. The company specializes in investing in businesses across a
          range of industries, including technology, healthcare, and e-commerce.
          More than 50 early-stage businesses have received funding from XYZ
          Capital, which has a noteworthy portfolio that includes AlphaTech,
          BetaMart, GammaSolutions, and DeltaCorp.
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
          <NavLink to="/pitch" className="actions-button">
            Pitch Now
          </NavLink>
          <NavLink to="/fundraising-os" className="actions-button">
            Checkout Fundraising OS
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Cardframe;
