import React from "react";
import "./About.css";
import MainImage from "../../assets/images/about-main-image.png";
import { useNavigate } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import TestimonialData from "../../assets/data/testimonial";

function About() {
  const navigate = useNavigate();

  const handleButtonFindInvestors = () => {
    navigate("/");
  };

  const handleButtonFindJobs = () => {
    navigate("/launchpad");
  };

  const [text] = useTypewriter({
    words: [
      "find investors",
      "fund ideas",
      "hire talent",
      "get hired",
      "build startups",
    ],
    loop: {},
  });

  return (
    <div className="about-container">
      <h1>
        One platform to{" "}
        <span>
          {text}
          <Cursor />
        </span>
      </h1>
      <div className="about-main-div">
        <img src={MainImage} alt="main image" />
        <div className="about-main-buttons">
          <button
            className="about-main-button1"
            onClick={handleButtonFindInvestors}
          >
            Find Investors
          </button>
          <button className="about-main-button2" onClick={handleButtonFindJobs}>
            Find VC Jobs
          </button>
        </div>
      </div>
      <p>
        Startups, VCs, and folks in between - we have something for everyone.
        And they love us for it.
      </p>

      <div className="scrolling">
        <div className="scrolling-content scroll">
          <img
            src="https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/666f5c9c8122c14cd7eb4571_unscrript.webp"
            height="40"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/666f5c0969076f9ff8db3304_ayna.webp"
            height="40"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/666f5c1f5063aad4d71de3a3_Economize%20Logo.webp"
            height="40"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/66564152364eee0d69082ecd_Floworks%20Image.png"
            height="40"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/66725611cf30b1c92276d0b9_Hello%20Tomorrow%20APAC.png"
            height="40"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/6672560710743628cc754ae3_Clarity%20Logo%20from%20Inbox%20Pirates.jpg"
            height="40"
            alt=""
          />
        </div>
        <div className="scrolling-content scroll">
          <img
            src="https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/666f5c9c8122c14cd7eb4571_unscrript.webp"
            height="40"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/666f5c0969076f9ff8db3304_ayna.webp"
            height="40"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/666f5c1f5063aad4d71de3a3_Economize%20Logo.webp"
            height="40"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/66564152364eee0d69082ecd_Floworks%20Image.png"
            height="40"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/66725611cf30b1c92276d0b9_Hello%20Tomorrow%20APAC.png"
            height="40"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/6672560710743628cc754ae3_Clarity%20Logo%20from%20Inbox%20Pirates.jpg"
            height="40"
            alt=""
          />
        </div>
      </div>

      <div className="testimonial">
        <div className="testimonial-header">
          <h1>Hear from Our Community</h1>
          <button>&lt;</button>
          <button>&gt;</button>
        </div>

        <div className="testimonial-cards">
          {TestimonialData.map((data, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-info">
                <img src={data.image} alt="" />
                <h2>{data.name}</h2>
                <h3>{data.role}</h3>
              </div>
              <p>{data.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
