import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/registration-form");
  };

  return (
    <div className="home-container">
      <div className="home-header">
        <h1>One place to find the right investor for you.</h1>
        <hr />
        <div className="home-inner-div">
          <h2>Check out our database of active investors.</h2>
          <button onClick={handleButtonClick}>Join The Database</button>
        </div>
      </div>
      <br />
      <hr />
      <div className="home-sec">
        <div className="home-sec-header">
          <h6>NAME</h6>
          <h6>STAGE FOCUS</h6>
          <h6>SECTOR FOCUS</h6>
          <h6 className="lst">TICKET SIZE</h6>
        </div>
        <div className="home-card">
          <div className="home-img">
            <img
              src="https://cdn.prod.website-files.com/66231acb2160c0962a6c50d4/67065f076f6590d0317c92f0_2_a_m_ventures_logo.jpeg"
              loading="lazy"
              alt=""
              class="db-img"
            ></img>
            <p>2am VC</p>
          </div>
          <div>
            <a href="" target="">
              <button id="button-1">Pre-Seed</button>
            </a>
            <a href="" target="">
              <button id="button-1">Seed</button>
            </a>
            <a href="" target="">
              <button id="button-1">Series A</button>
            </a>
          </div>
          <a href="" target="">
            <button id="button-2">Sector Agnostic</button>
          </a>
          <p>$ 100K - $ 500K</p>
        </div>
        <div className="home-card">
          <div className="home-img">
            <img
              src="https://cdn.prod.website-files.com/66231acb2160c0962a6c50d4/67065f076f6590d0317c92f0_2_a_m_ventures_logo.jpeg"
              loading="lazy"
              alt=""
              class="db-img"
            ></img>
            <p>2am VC</p>
          </div>
          <div>
            <a href="" target="">
              <button id="button-1">Pre-Seed</button>
            </a>
            <a href="" target="">
              <button id="button-1">Seed</button>
            </a>
            <a href="" target="">
              <button id="button-1">Series A</button>
            </a>
          </div>
          <a href="" target="">
            <button id="button-2">Sector Agnostic</button>
          </a>
          <p>$ 100K - $ 500K</p>
        </div>
        <div className="home-card">
          <div className="home-img">
            <img
              src="https://cdn.prod.website-files.com/66231acb2160c0962a6c50d4/67065f076f6590d0317c92f0_2_a_m_ventures_logo.jpeg"
              loading="lazy"
              alt=""
              class="db-img"
            ></img>
            <p>2am VC</p>
          </div>
          <div>
            <a href="" target="">
              <button id="button-1">Pre-Seed</button>
            </a>
            <a href="" target="">
              <button id="button-1">Seed</button>
            </a>
            <a href="" target="">
              <button id="button-1">Series A</button>
            </a>
          </div>
          <a href="" target="">
            <button id="button-2">Sector Agnostic</button>
          </a>
          <p>$ 100K - $ 500K</p>
        </div>
        <div className="home-card">
          <div className="home-img">
            <img
              src="https://cdn.prod.website-files.com/66231acb2160c0962a6c50d4/67065f076f6590d0317c92f0_2_a_m_ventures_logo.jpeg"
              loading="lazy"
              alt=""
              class="db-img"
            ></img>
            <p>2am VC</p>
          </div>
          <div>
            <a href="" target="">
              <button id="button-1">Pre-Seed</button>
            </a>
            <a href="" target="">
              <button id="button-1">Seed</button>
            </a>
            <a href="" target="">
              <button id="button-1">Series A</button>
            </a>
          </div>
          <a href="" target="">
            <button id="button-2">Sector Agnostic</button>
          </a>
          <p>$ 100K - $ 500K</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
