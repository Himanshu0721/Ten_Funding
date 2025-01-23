import React from "react";
import "./cardframe.css";
import { useLocation, NavLink, useParams } from "react-router-dom";

const Cardframe = () => {
  const { state } = useLocation();
  const { dataset } = state || {}; // Dataset passed from Home component
  const { id } = useParams();

  if (!dataset) {
    return <div>No dataset selected</div>;
  }

  const investor = dataset.find((item) => item.id === parseInt(id));

  if (!investor) {
    return <div>Investor not found</div>;
  }

  const handlePitch = () => {
    window.open("/pitch", "_blank");
  };

  // Dynamic details data
  const investorDetails = [
    { label: "Best Way to Get in Touch", value: "Warm Intro, LinkedIn" },
    { label: "Stage Focus", value: investor.stages },
    { label: "Sector Focus", value: investor.sectors },
    { label: "Ticket Size", value: investor.ticketSize },
    { label: "Current Fund Corpus", value: investor.currentFundCorpus },
    { label: "Total Fund Corpus", value: investor.totalFundCorpus },
  ];

  return (
    <div className="investor-card">
      <NavLink to="/" className="investor-card-back-button">
        ← Back to Investors
      </NavLink>

      <div className="investor-card-header-div">
        <img
          className="investor-card-logo"
          src={investor.logo}
          alt={investor.company}
        />
        <h1>{investor.company}</h1>

        <div className="investor-card-social-links">
          {investor.website ? (
            <a
              href={investor.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/6671efd00f1aa0bc9b641207_square-arrow-up-right-solid%20(2).svg"
                alt={investor.company}
              />
            </a>
          ) : (
            <div>
              <img
                src="https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/6671efd00f1aa0bc9b641207_square-arrow-up-right-solid%20(2).svg"
                alt="Website not available"
              />
            </div>
          )}

          {investor.companyLinkedinUrl ? (
            <a
              href={investor.companyLinkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/6630f43d9e67242d6e8290f4_linkedin.svg"
                alt="LinkedIn"
              />
            </a>
          ) : (
            <div>
              <img
                src="https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/6630f43d9e67242d6e8290f4_linkedin.svg"
                alt="LinkedIn not available"
              />
            </div>
          )}

          {investor.twitterUrl ? (
            <a
              href={investor.twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/663b81d6b7ac04fade543633_twitter.svg"
                alt="Twitter"
              />
            </a>
          ) : (
            <div>
              <img
                src="https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/663b81d6b7ac04fade543633_twitter.svg"
                alt="Twitter not available"
              />
            </div>
          )}
        </div>
      </div>

      <p className="investor-card-description">{investor.companyOverview}</p>

      <div className="investor-card-details">
        {investorDetails.map((detail, index) => (
          <div className="investor-card-row" key={index}>
            <div style={{ fontWeight: "bold" }}>{detail.label}</div>
            <div>{detail.value}</div>
          </div>
        ))}

        <div className="investor-card-actions">
          <NavLink
            onClick={handlePitch}
            className="investor-card-actions-button"
          >
            Pitch Now!
          </NavLink>
          <hr className="investor-card-actions-hr" />
          <NavLink
            to="/fundraising-os"
            className="investor-card-actions-button"
          >
            Checkout Fundraising OS
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Cardframe;
