import React from "react";
import "./FundraisingPage.css";
import Image1 from "../../assets/images/1.png";
import Image2 from "../../assets/images/2.png";
import Image3 from "../../assets/images/3.png";
import Image4 from "../../assets/images/4.png";

const FundraisingPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Making Fundraising</h1>
          <img src={Image1} alt="Fundraising Image" width="800" height="600" />
          <button className="cta-button" id="ctaButtonHero">
            Download Now
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="content-container">
          <img src={Image1} alt="Investor Database" width="600" height="400" />
          <div className="text-content">
            <h1>Investor Database</h1>
            <ul className="bullet-points">
              <li>Discover hundreds of institutional investors across India</li>
              <li>
                Filter the right investors by stage, sector, ticket size, and
                other mandates
              </li>
              <li>Enjoy one-click direct application to investor portals</li>
            </ul>
            <button className="cta-button" id="ctaButtonInvestor">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Pipeline Tracker Section */}
      <section id="image2">
        <div className="content-container">
          <img src={Image2} alt="Investor Database" width="600" height="400" />
          <div className="text-content">
            <h1>Pipeline Tracker</h1>
            <ul className="bullet-points">
              <li>
                Access comprehensive dashboard for all shortlisted investors
              </li>
              <li>
                Manage investor pipeline throughout every stage of the
                fundraising process
              </li>
              <li>Track all DD commitments and overall progress</li>
            </ul>
            <button className="cta-button" id="ctaButtonPipeline">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Meeting Management Section */}
      <section id="image3">
        <div className="content-container">
          <img src={Image3} alt="Meeting Management" width="600" height="400" />
          <div className="text-content">
            <h1>Meeting Management</h1>
            <ul className="bullet-points">
              <li>Assemble all your meeting notes in one place</li>
              <li>One-click template for efficient note-taking</li>
            </ul>
            <button className="cta-button" id="ctaButtonMeeting">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Centralized Data Room Section */}
      <section id="image4">
        <div className="content-container">
          <img src={Image4} alt="Meeting Management" width="600" height="400" />
          <div className="text-content">
            <h1>Centralized Data Room</h1>
            <ul className="bullet-points">
              <li>Maintain version control over data shared</li>
              <li>Share timebound access to your data room</li>
            </ul>
            <button className="cta-button" id="ctaButtonDataRoom">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FundraisingPage;
