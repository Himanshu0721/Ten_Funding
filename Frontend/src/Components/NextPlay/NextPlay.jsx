import { useState } from "react";
import { HiOutlinePlusSmall } from "react-icons/hi2";
import { HiOutlineMinusSmall } from "react-icons/hi2";

import "./NextPlay.css";

const NextPlay = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const data = [
    {
      Name: "Abbe Smith",
      City: "Seattle",
      Linkedin: "linkedin.com/in/abbesmith",
    },
    {
      Name: "Adrian Calderon",
      City: "Miami",
      Linkedin: "linkedin.com/in/abcalderon3",
    },
    { Name: "Amu Fowler", City: "DC", Linkedin: "www.linkedin.com" },
    {
      Name: "Andy Apple",
      City: "Los Angeles",
      Linkedin: "linkedin.com/in/aapple",
    },
    { Name: "Ben Lang", City: "Tel Aviv", Linkedin: "linkedin.com/in/benlang" },
    {
      Name: "Bremner Morris",
      City: "Denver",
      Linkedin: "linkedin.com/in/bremnermorris",
    },
  ];

  const toggleDropdown = (index) => {
    // If the clicked question is already open, close it */}
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      // Otherwise, open the clicked question
      setOpenIndex(index);
    }
  };
  return (
    <div className="responsive-page">
      {/* Main Content */}
      <main className="main-content">
        <section className="intro">
          <h1>next play</h1>
          <h2>
            We want to assist you in determining your next course of action. ✨
          </h2>
          <ul className="features-list">
            <li>hidden employment prospects.</li>
            <li>introductions to partners who share similar interests.</li>
            <li>invitations to private events (20+ cities and counting!).</li>
            <li>carefully selected lists of innovative startups to join.</li>
            <li>
              podcast featuring unique interviews with founders and operators
              who discuss their professional insights.
            </li>
          </ul>
          {/* <button className="cta-button">
            ✨ Apply here to join (takes less than 5 minutes)
          </button> */}
        </section>

        {/* Examples Section */}
        <section className="examples">
          <h3>Examples of people in next play</h3>
          <ul className="examples-list">
            <li>
              second-time founder who is considering launching a new business
              after selling their first one.
            </li>
            <li>
              An technical leader from a Series C company is seeking to
              establish a new business or join an existing one.
            </li>
            <li>
              VP of growth at FAANG is considering joining a startup in its
              early stages.
            </li>
            <li>
              + numerous others from companies such as Coinbase, Airbnb,
              Instacart, SpaceX, Figma, Replit, Nasa, Stripe, OpenAI, Notion,
              Retool, Y Combinator, Rippling, Silver Lake, Sequoia, and more.
            </li>
          </ul>
        </section>
        <div className="more-about-page">
          {/* Title */}
          <h1 className="page-title">more about next play</h1>

          {/* Grid Section */}
          <div className="grid-section">
            <div className="card">
              <h2>gatherings</h2>
              <p>
                🚀 curated events featuring exceptional founders and operators
                who are either publicly or privately investigating future
                developments. You can be thinking about launching your own
                business, joining your next venture, doing both, or not sure.
              </p>
              <p>
                New York City, San Francisco, Tel Aviv, Austin, Boston,
                Bangalore, London, Seattle, Paris, Berlin, Los Angeles, Denver,
                Toronto, Philadelphia, Chicago, and Sydney are among the
                locations.
              </p>
            </div>

            <div className="card">
              <h2>podcast</h2>
              <p>
                🎙️ Hear firsthand from top-tier operators, investors, and
                founders who have just discovered their next big thing as they
                share their experiences and insights. <a  className="podcast" href="#">Spotify</a> /{" "}
                <a className="podcast" href="#">Apple Podcasts</a>
              </p>
            </div>

            <div className="card">
              <h2>newsletter</h2>
              <p>
                📧 Discover unnoticed possibilities from co-founders seeking
                partners, early-stage startups, and more.
              </p>
            </div>

            <div className="card">
              <h2>lists</h2>
              <p>
                📋 We're compiling lists of fantastic businesses to work with.{" "}
                <a className="link" href="#">See here</a>.
              </p>
            </div>
          </div>

          {/* Matching Section */}
          <div className="matching-section">
            <h2>matching</h2>
            <p>
              🌱 In order to generate ideas, create momentum, and have
              conversations about potential future developments, we are
              introducing decent people who are considering what might happen
              next, wherever they may be in the world.
            </p>
          </div>

          {/* Call to Action */}
          {/* <div className="cta">
            <button className="cta-button">
              ✨ Apply here to join (takes less than 5 minutes)
            </button>
          </div> */}
        </div>

        <div className="faq-container">
          <h1>Questions for us</h1>
          <div className="faq-section">
            <div className="faq-column">
              {/* FAQ Items */}
              <div
                className="faq-item"
                onClick={() => toggleDropdown(0)} // Pass the index
              >
                {openIndex === 0 ? (
                  <HiOutlineMinusSmall />
                ) : (
                  <HiOutlinePlusSmall />
                )}{" "}
                Who's behind this?
                {openIndex === 0 && (
                  <div className="qu-1" style={{ margin: "10px" }}>
                    <a className="link" href="#">Ben Lang</a>
                    <br />
                    <a  className="link" href="#">Jorden Gonen</a>
                  </div>
                )}
              </div>

              <div
                className="faq-item"
                onClick={() => toggleDropdown(1)} // Pass the index
              >
                {openIndex === 1 ? (
                  <HiOutlineMinusSmall />
                ) : (
                  <HiOutlinePlusSmall />
                )}{" "}
                Who's hosting next play gatherings?
                {openIndex === 1 && (
                  <div className="table-container" style={{ margin: "10px" }}>
                    <table
                      className="qu-table"
                      style={{
                        borderCollapse: "collapse",
                        background: " #f9f9f9",
                      }}
                    >
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>City</th>
                          <th>Linkedin</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((row, index) => (
                          <tr key={index}>
                            <td>{row.Name}</td>
                            <td>{row.City}</td>
                            <td>
                              <a className="link"
                                href={`https://${row.Linkedin}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {row.Linkedin}
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              <div
                className="faq-item"
                onClick={() => toggleDropdown(2)} // Pass the index
              >
                {openIndex === 2 ? (
                  <HiOutlineMinusSmall />
                ) : (
                  <HiOutlinePlusSmall />
                )}{" "}
                Want to host a gathering with us in your city?
                {openIndex === 2 && (
                  <div style={{ margin: "10px" }}>
                    Email us at{" "}
                    <a className="link" href="mailto:info@entrepreneurshipnetwork">
                      info@entrepreneurshipnetwork
                    </a>
                  </div>
                )}
              </div>

              <div
                className="faq-item"
                onClick={() => toggleDropdown(3)} // Pass the index
              >
                {openIndex === 3 ? (
                  <HiOutlineMinusSmall />
                ) : (
                  <HiOutlinePlusSmall />
                )}{" "}
                Will my info be shared anywhere?
                {openIndex === 3 && (
                  <p style={{ margin: "10px" }}>
                    Everything is off the record and confidential. For matching,
                    intros, etc., you will need to opt in.
                  </p>
                )}
              </div>

              <div
                className="faq-item"
                onClick={() => toggleDropdown(4)} // Pass the index
              >
                {openIndex === 4 ? (
                  <HiOutlineMinusSmall />
                ) : (
                  <HiOutlinePlusSmall />
                )}{" "}
                Other questions?
                {openIndex === 4 && (
                  <div style={{ margin: "10px" }}>
                    Email us at{" "}
                    <a  className="link" href="mailto:info@entrepreneurshipnetwork">
                      info@entrepreneurshipnetwork
                    </a>
                  </div>
                )}
              </div>
            </div>

            <div className="faq-column">
              <div
                className="faq-item"
                onClick={() => toggleDropdown(5)} // Pass the index
              >
                {openIndex === 5 ? (
                  <HiOutlineMinusSmall />
                ) : (
                  <HiOutlinePlusSmall />
                )}{" "}
                How do I sign up for the newsletter?
                {openIndex === 5 && (
                  <button
                    className="subscribe-button"
                    style={{ margin: "10px" }}
                  >
                    Subscribe here
                  </button>
                )}
              </div>

              <div
                className="faq-item"
                onClick={() => toggleDropdown(6)} // Pass the index
              >
                {openIndex === 6 ? (
                  <HiOutlineMinusSmall />
                ) : (
                  <HiOutlinePlusSmall />
                )}{" "}
                How do I share roles with the community?
                {openIndex === 6 && (
                  <div style={{ margin: "10px" }}>
                    Email us at{" "}
                    <a className="link" href="mailto:info@entrepreneurshipnetwork">
                      info@entrepreneurshipnetwork
                    </a>
                  </div>
                )}
              </div>

              <div
                className="faq-item"
                onClick={() => toggleDropdown(7)} // Pass the index
              >
                {openIndex === 7 ? (
                  <HiOutlineMinusSmall />
                ) : (
                  <HiOutlinePlusSmall />
                )}{" "}
                How can VCs get involved?
                {openIndex === 7 && (
                  <div style={{ margin: "10px" }}>
                    Email us at{" "}
                    <a  className="link" href="mailto:info@entrepreneurshipnetwork">
                      info@entrepreneurshipnetwork
                    </a>{" "}
                    and we’ll share more.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NextPlay;
