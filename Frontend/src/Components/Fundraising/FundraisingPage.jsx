import React from "react";
import "./FundraisingPage.css";
import MainImage from "../../assets/images/1.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import fundraisingInfo from "../../assets/data/fundraisingInfo";

function FundraisingPage() {
  const [text] = useTypewriter({
    words: ["quicker", "simpler", "funner"],
    loop: {},
  });

  return (
    <div className="fundraising-container">
      {/* Main Section */}
      <h1>
        Making fundraising{" "}
        <span>
          {text}
          <Cursor />
        </span>
      </h1>
      <div className="fundraising-main-div">
        <img src={MainImage} alt="main image" />
        <button>Download Now</button>
      </div>

      <div className="fundraising-lastdiv">
        <div className="fundraising-lastdiv-cards">
          {fundraisingInfo.map((data) => (
            <div key={data.id} className="fundraising-lastdiv-card">
              {data.id % 2 === 0 ? (
                <>
                  {/* Content First for Even IDs */}
                  <div className="fundraising-even-div">
                    <div className="fundraising-lastdiv-card-content">
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
                    <div className="fundraising-lastdiv-card-image">
                      <img src={data.image} alt={data.tag} />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Image First for Odd IDs */}
                  <div className="fundraising-odd-div">
                    <div className="fundraising-lastdiv-card-image">
                      <img src={data.image} alt={data.tag} />
                    </div>
                    <div className="fundraising-lastdiv-card-content">
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

export default FundraisingPage;
