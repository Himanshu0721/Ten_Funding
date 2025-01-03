
import {useState} from 'react';
import { HiOutlinePlusSmall } from "react-icons/hi2";
import { HiOutlineMinusSmall } from "react-icons/hi2";

import './NextPlay.css';

const NextPlay = () => {
  const [openIndex, setOpenIndex] = useState(null);
   const data = [
    { Name: "Abbe Smith", City: "Seattle", Linkedin: "linkedin.com/in/abbesmith" },
    { Name: "Adrian Calderon", City: "Miami", Linkedin: "linkedin.com/in/abcalderon3" },
    { Name: "Amu Fowler", City: "DC", Linkedin: "www.linkedin.com" },
    { Name: "Andy Apple", City: "Los Angeles", Linkedin: "linkedin.com/in/aapple" },
    { Name: "Ben Lang", City: "Tel Aviv", Linkedin: "linkedin.com/in/benlang" },
    { Name: "Bremner Morris", City: "Denver", Linkedin: "linkedin.com/in/bremnermorris" },
    
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
          <h2>our goal is to help you figure out what’s next ✨</h2>
          <p>
            <a href="#" className="link">Join the next play network</a> to get access to:
          </p>
          <ul className="features-list">
            <li>under-the-radar job opportunities</li>
            <li>introductions to like-minded collaborators</li>
            <li>invitations to off-the-record gatherings (20+ cities and growing!)</li>
            <li>curated lists of breakout startups to join</li>
            <li>podcast with exclusive interviews from operators & founders who share their career learnings</li>
          </ul>
          <button className="cta-button">✨ Apply here to join (takes less than  5 minutes)</button>
        </section>

        {/* Examples Section */}
        <section className="examples">
          <h3>Examples of people in next play</h3>
          <ul className="examples-list">
            <li>second-time founder who sold their previous company and exploring starting a new company</li>
            <li>engineering leader from Series C company looking to join a new company or potentially start a company</li>
            <li>VP growth at FAANG company thinking about joining an early-stage startup</li>
            <li>
              + many others from places like Stripe, OpenAI, Notion, Retool, Y Combinator, Rippling, Silver Lake, Sequoia, SpaceX, Figma, Replit, Nasa, Coinbase, Airbnb, Instacart, and more.
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
          <p>🚀 Curated gatherings of top-notch founders and operators who are openly or secretly exploring what comes next. You may be considering starting a company, joining your next thing, both, or unsure.</p>
          <p>Taking place in NYC, SF, Tel Aviv, Austin, Boston, Bangalore, London, Seattle, Paris, Berlin, LA, Denver, Toronto, Philly, Chicago, Sydney.</p>
        </div>

        <div className="card">
          <h2>podcast</h2>
          <p>🎙️ Hear directly from world-class founders, investors, and operators, who recently found their next play, as they dive deep and share their journey and learnings. <a href="#">Spotify</a> / <a href="#">Apple Podcasts</a></p>
        </div>

        <div className="card">
          <h2>newsletter</h2>
          <p>📧 Get under-the-radar opportunities from early stage companies, co-founders looking for partners, and more.</p>
        </div>

        <div className="card">
          <h2>lists</h2>
          <p>📋 We’re curating lists of great companies to join. <a href="#">See here</a>.</p>
        </div>
      </div>

      {/* Matching Section */}
      <div className="matching-section">
        <h2>matching</h2>
        <p>🌱 We’re introducing good people who are thinking about what comes next, anywhere in the world, as a way to spark ideas, build momentum, and chat about what may come next.</p>
      </div>

      {/* Call to Action */}
      <div className="cta">
        <button className="cta-button">✨ Apply here to join (takes less than 5 minutes)</button>
      </div>
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
      {openIndex === 0 ? <HiOutlineMinusSmall /> : <HiOutlinePlusSmall />} Who's behind this?
      {openIndex === 0 && (
        <div className='qu-1'>
          <a href="#">Ben Lang</a>
          <br />
          <a href="#">Jorden Gonen</a>
        </div>
      )}
    </div>

    <div
      className="faq-item"
      onClick={() => toggleDropdown(1)} // Pass the index
    >
      {openIndex === 1 ? <HiOutlineMinusSmall /> : <HiOutlinePlusSmall />} Who's hosting next play gatherings?
      {openIndex === 1 && (
        <div className='table-container'>
        <table className="qu-table" style={{ borderCollapse: "collapse", background: " #f9f9f9"}}>
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
                  <a href={`https://${row.Linkedin}`} target="_blank" rel="noopener noreferrer">
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
      {openIndex === 2 ? <HiOutlineMinusSmall /> : <HiOutlinePlusSmall />} Want to host a gathering with us in your city?
      {openIndex === 2 && (
        <div>
          Email us at <a href="mailto:info@entrepreneurshipnetwork">info@entrepreneurshipnetwork</a>
        </div>
      )}
    </div>

    <div
      className="faq-item"
      onClick={() => toggleDropdown(3)} // Pass the index
    >
      {openIndex === 3 ? <HiOutlineMinusSmall /> : <HiOutlinePlusSmall />} Will my info be shared anywhere?
      {openIndex === 3 && (
        <p>Everything is off the record and confidential. For matching, intros, etc., you will need to opt in.</p>
      )}
    </div>

    <div
      className="faq-item"
      onClick={() => toggleDropdown(4)} // Pass the index
    >
      {openIndex === 4 ? <HiOutlineMinusSmall /> : <HiOutlinePlusSmall />} Other questions?
      {openIndex === 4 && (
        <div>
          Email us at <a href="mailto:info@entrepreneurshipnetwork">info@entrepreneurshipnetwork</a>
        </div>
      )}
    </div>
  </div>

  <div className="faq-column">
    <div
      className="faq-item"
      onClick={() => toggleDropdown(5)} // Pass the index
    >
      {openIndex === 5 ? <HiOutlineMinusSmall /> : <HiOutlinePlusSmall />} How do I sign up for the newsletter?
      {openIndex === 5 && (
        
        <button className="subscribe-button">Subscribe here</button>
      )}
    </div>

    <div
      className="faq-item"
      onClick={() => toggleDropdown(6)} // Pass the index
    >
      {openIndex === 6 ? <HiOutlineMinusSmall /> : <HiOutlinePlusSmall />} How do I share roles with the community?
      {openIndex === 6 && (
        <div>
          Email us at <a href="mailto:info@entrepreneurshipnetwork">info@entrepreneurshipnetwork</a>
        </div>
      )}
    </div>

    <div
      className="faq-item"
      onClick={() => toggleDropdown(7)} // Pass the index
    >
      {openIndex === 7 ? <HiOutlineMinusSmall /> : <HiOutlinePlusSmall />} How can VCs get involved?
      {openIndex === 7 && (
        <div>
          Email us at <a href="mailto:info@entrepreneurshipnetwork">info@entrepreneurshipnetwork</a> and we’ll share more.
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
















































