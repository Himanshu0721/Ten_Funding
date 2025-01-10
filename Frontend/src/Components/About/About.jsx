import React, { useEffect, useRef } from "react";
import "./About.css";
import MainImage from "../../assets/images/about-main-image.webp";
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

  const handleNavigation = (path) => {
    navigate(path);
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

  const testimonialListRef = useRef(null);

  useEffect(() => {
    let scrollInterval;

    // Function to apply auto-scroll effect
    const applyScrollEffect = () => {
      scrollInterval = setInterval(() => {
        if (testimonialListRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } =
            testimonialListRef.current;

          // Scroll the container horizontally
          testimonialListRef.current.scrollLeft += 1;

          // Check if the scroll has reached the end
          if (scrollLeft + clientWidth >= scrollWidth - 1) {
            // Reset to the beginning
            testimonialListRef.current.scrollLeft = 0;
          }
        }
      }, 20);
    };

    // Start the scroll effect
    applyScrollEffect();

    // Cleanup the interval on component unmount
    return () => clearInterval(scrollInterval);
  }, []);

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
        We offer something for everyone, whether they are VCs, startups, or
        anybody in between. And for that, they adore us.
      </p>

      {/* Testimonial Section */}
      <div className="testimonial">
        <h1>Hear from Our Community</h1>
        <div className="testimonial-cards" ref={testimonialListRef}>
          {TestimonialData.map((data) => (
            <div key={data.id} className="testimonial-card">
              <img src={data.image} alt={data.alt} />
              <h3>{data.name}</h3>
              <h5>{data.prof}</h5>
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
                      <button
                        onClick={() => {
                          if (data.tag === "Fundraising OS") {
                            handleNavigation("/fundraising-os");
                          } else if (data.tag === "Ventures OS") {
                            handleNavigation("/venture-os");
                          } else if (data.tag === "LaunchPad") {
                            handleNavigation("/launchpad");
                          }
                        }}
                      >
                        Get Started
                      </button>
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
                      <button
                        onClick={() => {
                          if (data.tag === "Fundraising OS") {
                            handleNavigation("/fundraising-os");
                          } else if (data.tag === "Ventures OS") {
                            handleNavigation("/venture-os");
                          } else if (data.tag === "LaunchPad") {
                            handleNavigation("/launchpad");
                          }
                        }}
                      >
                        Get Started
                      </button>
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
