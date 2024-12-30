import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-main-div">
      <hr />
      <div className="footer">
        <div className="footer-details">
          <h4>For Startups</h4>
          <ul>
            <li>
              <NavLink to="/">Raise</NavLink>
            </li>
            <li>
              <NavLink to="/">Fundraising OS</NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-details">
          <h4>For VCs</h4>
          <ul>
            <li>
              <NavLink to="/">Venture OS</NavLink>
            </li>
            <li>
              <NavLink to="/">Launchpad</NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-details">
          <h4>Company</h4>
          <ul>
            <li>
              <NavLink
                to="https://www.linkedin.com/company/the-entrepreneurship-network/posts/?feedView=all"
                target="_blanck"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://www.linkedin.com/company/the-entrepreneurship-network/posts/?feedView=all"
                target="_blanck"
              >
                Careers
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-details">
          <h4>Legal</h4>
          <ul>
            <li>
              <NavLink to="/privacy-policy">Privacy Policy</NavLink>
            </li>
            <li>
              <NavLink to="/terms-of-Service">Terms of Service</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="last-div">
        <hr />
        <h6>© 2024 Ten Funding Website</h6>
      </div>
    </div>
  );
}

export default Footer;
