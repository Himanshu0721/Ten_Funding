import React, { useState } from "react";
import "./About.css";
import MainImage from "../../assets/images/about-main-image.png";
import { useNavigate } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import TestimonialData from "../../assets/data/testimonial";
import aboutInfo from "../../assets/data/aboutInfo";

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

  const testimonialRef = React.useRef(null);

  const handlePrev = () => {
    if (testimonialRef.current) {
      const cardWidth =
        testimonialRef.current.querySelector(".testimonial-card").offsetWidth;
      const gap = 30; // Adjust the gap if needed
      const scrollAmount = cardWidth + gap;
      testimonialRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    if (testimonialRef.current) {
      const cardWidth =
        testimonialRef.current.querySelector(".testimonial-card").offsetWidth;
      const gap = 30; // Adjust the gap if needed
      const scrollAmount = cardWidth + gap;
      testimonialRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="about-container">
      {/* Main Section */}
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

      {/* Scroll Section */}
      <div className="about-scrolling">
        <div className="about-scrolling-content scroll">
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
        <div className="about-scrolling-content scroll">
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

      {/* Testimonial Section */}
      <div className="testimonial">
        <div className="testimonial-header">
          <h1>Hear from Our Community</h1>
          <button onClick={handlePrev}>&lt;</button>
          <button onClick={handleNext}>&gt;</button>
        </div>

        <div className="testimonial-cards" ref={testimonialRef}>
          {TestimonialData.map((data, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-info">
                <div className="info-image-div">
                  <img src={data.image} alt={data.name} />
                </div>
                <div className="info-name-div">
                  <h3>{data.name}</h3>
                  <h4>{data.role}</h4>
                </div>
              </div>
              <p>{data.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Last Section */}
      <div className="about-lastdiv">
        <div className="about-lastdiv-cards">
          {aboutInfo.map((data) => (
            <div key={data.id} className="about-lastdiv-card">
              {data.id % 2 === 0 ? (
                <>
                  {/* Content First for Even IDs */}
                  <div className="about-even-div">
                    <div className="about-lastdiv-card-content">
                      <h2>{data.tag}</h2>
                      <ul>
                        {data.points.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                      <div>
                        <button>Get Started</button>
                      </div>
                    </div>
                    <div className="about-lastdiv-card-image">
                      <img src={data.image} alt={data.tag} />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Image First for Odd IDs */}
                  <div className="about-odd-div">
                    <div className="about-lastdiv-card-image">
                      <img src={data.image} alt={data.tag} />
                    </div>
                    <div className="about-lastdiv-card-content">
                      <h2>{data.tag}</h2>
                      <ul>
                        {data.points.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                      {/* <div> */}
                      <button>Get Started</button>
                      {/* </div> */}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
