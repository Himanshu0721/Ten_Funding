import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-main-div">
      <hr />
      <div className="footer">
        <div className="footer-details">
          <h4>For Startups</h4>
          <ul>
            <li>Raise</li>
            <li>Fundraising OS</li>
            <li>Next Play</li>
            <li>Spotlight</li>
          </ul>
        </div>
        <div className="footer-details">
          <h4>For VCs</h4>
          <ul>
            <li>VC Stack</li>
            <li>Venture OS</li>
            <li>Launchpad</li>
          </ul>
        </div>
        <div className="footer-details">
          <h4>Company</h4>
          <ul>
            <li>About IndianVC</li>
            <li>Careers</li>
            <li>Sitemap</li>
          </ul>
        </div>
        <div className="footer-details">
          <h4>Legal</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
      <div className="last-div">
        <hr />
        <h6>Copyright 2024 Ten Funding Website</h6>
      </div>
    </div>
  );
}

export default Footer;
