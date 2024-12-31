// import React from "react";
// import "./Home.css";
// import { useNavigate } from "react-router-dom";

// function Home() {
//   const navigate = useNavigate();

//   const handleButtonClick = () => {
//     navigate("/registration-form");
//   };

//   return (
//     <div className="home-container">
//       <div className="home-header">
//         <h1>One place to find the right investor for you.</h1>
//         <hr />
//         <div className="home-inner-div">
//           <h2>Check out our database of active investors.</h2>
//           <button onClick={handleButtonClick}>Join The Database</button>
//         </div>
//       </div>
//       <br />
//       <hr />
//       <div className="home-sec">
//         <div className="home-sec-header">
//           <h6>NAME</h6>
//           <h6>STAGE FOCUS</h6>
//           <h6>SECTOR FOCUS</h6>
//           <h6 className="lst">TICKET SIZE</h6>
//         </div>
//         <div className="home-card">
//           <div className="home-img">
//             <img
//               src="https://cdn.prod.website-files.com/66231acb2160c0962a6c50d4/67065f076f6590d0317c92f0_2_a_m_ventures_logo.jpeg"
//               loading="lazy"
//               alt=""
//               class="db-img"
//             ></img>
//             <p>2am VC</p>
//           </div>
//           <div>
//             <a href="" target="">
//               <button id="button-1">Pre-Seed</button>
//             </a>
//             <a href="" target="">
//               <button id="button-1">Seed</button>
//             </a>
//             <a href="" target="">
//               <button id="button-1">Series A</button>
//             </a>
//           </div>
//           <a href="" target="">
//             <button id="button-2">Sector Agnostic</button>
//           </a>
//           <p>$ 100K - $ 500K</p>
//         </div>
//         <div className="home-card">
//           <div className="home-img">
//             <img
//               src="https://cdn.prod.website-files.com/66231acb2160c0962a6c50d4/67065f076f6590d0317c92f0_2_a_m_ventures_logo.jpeg"
//               loading="lazy"
//               alt=""
//               class="db-img"
//             ></img>
//             <p>2am VC</p>
//           </div>
//           <div>
//             <a href="" target="">
//               <button id="button-1">Pre-Seed</button>
//             </a>
//             <a href="" target="">
//               <button id="button-1">Seed</button>
//             </a>
//             <a href="" target="">
//               <button id="button-1">Series A</button>
//             </a>
//           </div>
//           <a href="" target="">
//             <button id="button-2">Sector Agnostic</button>
//           </a>
//           <p>$ 100K - $ 500K</p>
//         </div>
//         <div className="home-card">
//           <div className="home-img">
//             <img
//               src="https://cdn.prod.website-files.com/66231acb2160c0962a6c50d4/67065f076f6590d0317c92f0_2_a_m_ventures_logo.jpeg"
//               loading="lazy"
//               alt=""
//               class="db-img"
//             ></img>
//             <p>2am VC</p>
//           </div>
//           <div>
//             <a href="" target="">
//               <button id="button-1">Pre-Seed</button>
//             </a>
//             <a href="" target="">
//               <button id="button-1">Seed</button>
//             </a>
//             <a href="" target="">
//               <button id="button-1">Series A</button>
//             </a>
//           </div>
//           <a href="" target="">
//             <button id="button-2">Sector Agnostic</button>
//           </a>
//           <p>$ 100K - $ 500K</p>
//         </div>
//         <div className="home-card">
//           <div className="home-img">
//             <img
//               src="https://cdn.prod.website-files.com/66231acb2160c0962a6c50d4/67065f076f6590d0317c92f0_2_a_m_ventures_logo.jpeg"
//               loading="lazy"
//               alt=""
//               class="db-img"
//             ></img>
//             <p>2am VC</p>
//           </div>
//           <div>
//             <a href="" target="">
//               <button id="button-1">Pre-Seed</button>
//             </a>
//             <a href="" target="">
//               <button id="button-1">Seed</button>
//             </a>
//             <a href="" target="">
//               <button id="button-1">Series A</button>
//             </a>
//           </div>
//           <a href="" target="">
//             <button id="button-2">Sector Agnostic</button>
//           </a>
//           <p>$ 100K - $ 500K</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;



import React, { useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/registration-form");
  };

  // Sample data for investors
  const investors = [
    {
      name: "2am VC",
      stages: ["Pre-Seed", "Seed", "Series A"],
      sector: "Sector Agnostic",
      ticketSize: "$100K - $500K",
      logo: "https://cdn.prod.website-files.com/66231acb2160c0962a6c50d4/67065f076f6590d0317c92f0_2_a_m_ventures_logo.jpeg",
    },
    {
      name: "8x Ventures",
      stages: ["Pre-Seed", "Seed", "Series A"],
      sector: "Sector Agnostic",
      ticketSize: "$100K - $500K",
      logo: "https://cdn.prod.website-files.com/66231acb2160c0962a6c50d4/6669699c4154202fd2414213_eight_innovate_logo.jpg",
    },
    {
      name: "8i ventures",
      stages: ["Pre-Seed", "Seed", "Series A"],
      sector: "Sector Agnostic",
      ticketSize: "$100K - $500K",
      logo: "https://cdn.prod.website-files.com/66231acb2160c0962a6c50d4/6669699c4154202fd2414213_eight_innovate_logo.jpg",
    },
    {
      name: "2am VC",
      stages: ["Pre-Seed", "Seed", "Series A"],
      sector: "Sector Agnostic",
      ticketSize: "$100K - $500K",
      logo: "https://cdn.prod.website-files.com/66231acb2160c0962a6c50d4/67065f076f6590d0317c92f0_2_a_m_ventures_logo.jpeg",
    },
    {
      name: "8x Ventures",
      stages: ["Pre-Seed", "Seed", "Series A"],
      sector: "Sector Agnostic",
      ticketSize: "$100K - $500K",
      logo: "https://cdn.prod.website-files.com/66231acb2160c0962a6c50d4/6669699c4154202fd2414213_eight_innovate_logo.jpg",
    },
    {
      name: "8i ventures",
      stages: ["Pre-Seed", "Seed", "Series A"],
      sector: "Sector Agnostic",
      ticketSize: "$100K - $500K",
      logo: "https://cdn.prod.website-files.com/66231acb2160c0962a6c50d4/6669699c4154202fd2414213_eight_innovate_logo.jpg",
    },
    {
      name: "2am VC",
      stages: ["Pre-Seed", "Seed", "Series A"],
      sector: "Sector Agnostic",
      ticketSize: "$100K - $500K",
      logo: "https://cdn.prod.website-files.com/66231acb2160c0962a6c50d4/67065f076f6590d0317c92f0_2_a_m_ventures_logo.jpeg",
    },
    {
      name: "8x Ventures",
      stages: ["Pre-Seed", "Seed", "Series A"],
      sector: "Sector Agnostic",
      ticketSize: "$100K - $500K",
      logo: "https://cdn.prod.website-files.com/66231acb2160c0962a6c50d4/6669699c4154202fd2414213_eight_innovate_logo.jpg",
    },
    {
      name: "8i ventures",
      stages: ["Pre-Seed", "Seed", "Series A"],
      sector: "Sector Agnostic",
      ticketSize: "$100K - $500K",
      logo: "https://cdn.prod.website-files.com/66231acb2160c0962a6c50d4/6669699c4154202fd2414213_eight_innovate_logo.jpg",
    },
    {
      name: "2am VC",
      stages: ["Pre-Seed", "Seed", "Series A"],
      sector: "Sector Agnostic",
      ticketSize: "$100K - $500K",
      logo: "https://cdn.prod.website-files.com/66231acb2160c0962a6c50d4/67065f076f6590d0317c92f0_2_a_m_ventures_logo.jpeg",
    },
    {
      name: "8x Ventures",
      stages: ["Pre-Seed", "Seed", "Series A"],
      sector: "Sector Agnostic",
      ticketSize: "$100K - $500K",
      logo: "https://cdn.prod.website-files.com/66231acb2160c0962a6c50d4/6669699c4154202fd2414213_eight_innovate_logo.jpg",
    },
    {
      name: "8i ventures",
      stages: ["Pre-Seed", "Seed", "Series A"],
      sector: "Sector Agnostic",
      ticketSize: "$100K - $500K",
      logo: "https://cdn.prod.website-files.com/66231acb2160c0962a6c50d4/6669699c4154202fd2414213_eight_innovate_logo.jpg",
    },
    {
      name: "2am VC",
      stages: ["Pre-Seed", "Seed", "Series A"],
      sector: "Sector Agnostic",
      ticketSize: "$100K - $500K",
      logo: "https://cdn.prod.website-files.com/66231acb2160c0962a6c50d4/67065f076f6590d0317c92f0_2_a_m_ventures_logo.jpeg",
    },
    {
      name: "8x Ventures",
      stages: ["Pre-Seed", "Seed", "Series A"],
      sector: "Sector Agnostic",
      ticketSize: "$100K - $500K",
      logo: "https://cdn.prod.website-files.com/66231acb2160c0962a6c50d4/6669699c4154202fd2414213_eight_innovate_logo.jpg",
    },
    {
      name: "8i ventures",
      stages: ["Pre-Seed", "Seed", "Series A"],
      sector: "Sector Agnostic",
      ticketSize: "$100K - $500K",
      logo: "https://cdn.prod.website-files.com/66231acb2160c0962a6c50d4/6669699c4154202fd2414213_eight_innovate_logo.jpg",
    },
    {
      name: "2am VC",
      stages: ["Pre-Seed", "Seed", "Series A"],
      sector: "Sector Agnostic",
      ticketSize: "$100K - $500K",
      logo: "https://cdn.prod.website-files.com/66231acb2160c0962a6c50d4/67065f076f6590d0317c92f0_2_a_m_ventures_logo.jpeg",
    },
    {
      name: "8x Ventures",
      stages: ["Pre-Seed", "Seed", "Series A"],
      sector: "Sector Agnostic",
      ticketSize: "$100K - $500K",
      logo: "https://cdn.prod.website-files.com/66231acb2160c0962a6c50d4/6669699c4154202fd2414213_eight_innovate_logo.jpg",
    },
    {
      name: "8i ventures",
      stages: ["Pre-Seed", "Seed", "Series A"],
      sector: "Sector Agnostic",
      ticketSize: "$100K - $500K",
      logo: "https://cdn.prod.website-files.com/66231acb2160c0962a6c50d4/6669699c4154202fd2414213_eight_innovate_logo.jpg",
    },
    {
      name: "2am VC",
      stages: ["Pre-Seed", "Seed", "Series A"],
      sector: "Sector Agnostic",
      ticketSize: "$100K - $500K",
      logo: "https://cdn.prod.website-files.com/66231acb2160c0962a6c50d4/67065f076f6590d0317c92f0_2_a_m_ventures_logo.jpeg",
    },
    {
      name: "8x Ventures",
      stages: ["Pre-Seed", "Seed", "Series A"],
      sector: "Sector Agnostic",
      ticketSize: "$100K - $500K",
      logo: "https://cdn.prod.website-files.com/66231acb2160c0962a6c50d4/6669699c4154202fd2414213_eight_innovate_logo.jpg",
    },
    {
      name: "8i ventures",
      stages: ["Pre-Seed", "Seed", "Series A"],
      sector: "Sector Agnostic",
      ticketSize: "$100K - $500K",
      logo: "https://cdn.prod.website-files.com/66231acb2160c0962a6c50d4/6669699c4154202fd2414213_eight_innovate_logo.jpg",
    },
    {
      name: "2am VC",
      stages: ["Pre-Seed", "Seed", "Series A"],
      sector: "Sector Agnostic",
      ticketSize: "$100K - $500K",
      logo: "https://cdn.prod.website-files.com/66231acb2160c0962a6c50d4/67065f076f6590d0317c92f0_2_a_m_ventures_logo.jpeg",
    },
    {
      name: "8x Ventures",
      stages: ["Pre-Seed", "Seed", "Series A"],
      sector: "Sector Agnostic",
      ticketSize: "$100K - $500K",
      logo: "https://cdn.prod.website-files.com/66231acb2160c0962a6c50d4/6669699c4154202fd2414213_eight_innovate_logo.jpg",
    },
    {
      name: "8i ventures",
      stages: ["Pre-Seed", "Seed", "Series A"],
      sector: "Sector Agnostic",
      ticketSize: "$100K - $500K",
      logo: "https://cdn.prod.website-files.com/66231acb2160c0962a6c50d4/6669699c4154202fd2414213_eight_innovate_logo.jpg",
    },
    // Add more investors as needed
  ];

  const [visibleCount, setVisibleCount] = useState(10);
  const [stageFocus, setStageFocus] = useState("");
  const [sectorFocus, setSectorFocus] = useState("");
  const [ticketSize, setTicketSize] = useState("");

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  const filteredInvestors = investors.filter(
    (investor) =>
      (!stageFocus || investor.stages.includes(stageFocus)) &&
      (!sectorFocus || investor.sector === sectorFocus) &&
      (!ticketSize || investor.ticketSize === ticketSize)
  );

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

      {/* Dropdown Menus */}
      <div className="filter-section">
        <select
          value={stageFocus}
          onChange={(e) => setStageFocus(e.target.value)}
          className="dropdown"
        >
          <option value="">Stage Focus</option>
          <option value="Pre-Seed">Pre-Seed</option>
          <option value="Seed">Seed</option>
          <option value="Series A">Series A</option>
          <option value="Series B">Series B</option>
        </select>

        <select
          value={sectorFocus}
          onChange={(e) => setSectorFocus(e.target.value)}
          className="dropdown"
        >
          <option value="">Sector Focus</option>
          <option value="Sector Agnostic">Sector Agnostic</option>
          <option value="Tech Focus">Tech Focus</option>
          <option value="AI & ML">AI & ML</option>
          <option value="Fintech">Fintech</option>
        </select>

        <select
          value={ticketSize}
          onChange={(e) => setTicketSize(e.target.value)}
          className="dropdown"
        >
          <option value="">Ticket Size</option>
          <option value="$50K - $300K">$50K - $300K</option>
          <option value="$100K - $500K">$100K - $500K</option>
          <option value="$200K - $1M">$200K - $1M</option>
          <option value="$500K - $5M">$500K - $5M</option>
        </select>
      </div>

      <hr />
      <div className="home-sec">
        <div className="home-sec-header">
          <h6>NAME</h6>
          <h6>STAGE FOCUS</h6>
          <h6>SECTOR FOCUS</h6>
          <h6 className="lst">TICKET SIZE</h6>
        </div>
        {filteredInvestors.slice(0, visibleCount).map((investor, index) => (
          <div className="home-card" key={index}>
            <div className="home-img">
              <img
                src={investor.logo}
                loading="lazy"
                alt={`${investor.name} logo`}
                className="db-img"
              />
              <p>{investor.name}</p>
            </div>
            <div>
              {investor.stages.map((stage, stageIndex) => (
                <a href="" target="" key={stageIndex}>
                  <button id="button-1">{stage}</button>
                </a>
              ))}
            </div>
            <a href="" target="">
              <button id="button-2">{investor.sector}</button>
            </a>
            <p>{investor.ticketSize}</p>
          </div>
        ))}
        {visibleCount < filteredInvestors.length && (
          <button className="load-more-btn" onClick={handleLoadMore}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
}

export default Home;

