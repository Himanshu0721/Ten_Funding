import React from "react";
import "./VentureOS.css";
import MainImage from "../../assets/images/venture_main.webp";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import ventureInfo from "../../assets/data/ventureInfo";

function VentureOS() {
  const handleNavigation = () => {
    window.open("https://calendly.com/techten/book-a-demo-session", "_blank");
  };

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
        <button onClick={handleNavigation}>Request Demo</button>
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
                        <button onClick={handleNavigation}>Get Started</button>
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
                      <button onClick={handleNavigation}>Get Started</button>
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
