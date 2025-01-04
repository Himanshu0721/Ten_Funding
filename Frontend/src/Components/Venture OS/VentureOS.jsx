import React from "react";
import "./VentureOS.css";
import MainImage from "../../assets/images/about-main-image.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import ventureInfo from "../../assets/data/ventureInfo";

function VentureOS() {
  const [text] = useTypewriter({
    words: ["powerfull", "simple", "efficient"],
    loop: {},
  });

  return (
    <div className="venture-container">
      {/* Main Section */}
      <h1>
        Pipeline management made{" "}
        <span>
          {text}
          <Cursor />
        </span>
      </h1>
      <div className="venture-main-div">
        <img src={MainImage} alt="main image" />
        <div className="venture-main-button">
          <button>Request Demo</button>
        </div>
      </div>

      <div className="venture-lastdiv">
        <div className="venture-lastdiv-cards">
          {ventureInfo.map((data) => (
            <div key={data.id} className="venture-lastdiv-card">
              {data.id % 2 === 0 ? (
                <>
                  {/* Content First for Even IDs */}
                  <div className="venture-even-div">
                    <div className="venture-lastdiv-card-content">
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
                    <div className="venture-lastdiv-card-image">
                      <img src={data.image} alt={data.tag} />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Image First for Odd IDs */}
                  <div className="venture-odd-div">
                    <div className="venture-lastdiv-card-image">
                      <img src={data.image} alt={data.tag} />
                    </div>
                    <div className="venture-lastdiv-card-content">
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

export default VentureOS;
