// src/components/ResponsivePage.jsx
import React from 'react';
import './NextPlay.css';
import Tweet from './Tweet';

const NextPlay = () => {
    const tweets = [
        {
          name: "Ryan Hoover",
          handle: "rrhoover",
          time: "4:25 PM · Jun 5, 2024",
          text: "I admire what @benln and @jrdngonen are doing with Next Play. If you’re considering a career pivot or just curious how others have done it, take a look: nextplay.so",
          likes: 101,
          replies: 7,
          retweets: 19,
        },
        {
          name: "Camille Ricketts",
          handle: "camillericketts",
          time: "12:49 AM · Jun 21, 2024",
          text: "Love what @benln & @jrdngonen are doing with Next Play. As someone who’s been through that dreamy, thrilling, terrifying, nerve-rattling process of figuring out what’s next - it’s the best resource ✨",
          likes: 28,
          replies: 1,
          retweets: 5,
        },
        {
            name: "Camille Ricketts",
            handle: "camillericketts",
            time: "12:49 AM · Jun 21, 2024",
            text: "Love what @benln & @jrdngonen are doing with Next Play. As someone who’s been through that dreamy, thrilling, terrifying, nerve-rattling process of figuring out what’s next - it’s the best resource ✨",
            likes: 28,
            replies: 1,
            retweets: 5,
          },
          {
            name: "Camille Ricketts",
            handle: "camillericketts",
            time: "12:49 AM · Jun 21, 2024",
            text: "Love what @benln & @jrdngonen are doing with Next Play. As someone who’s been through that dreamy, thrilling, terrifying, nerve-rattling process of figuring out what’s next - it’s the best resource ✨",
            likes: 28,
            replies: 1,
            retweets: 5,
          },
      ];
  return (
    <div className="responsive-page">
      {/* Header */}
      {/* <header className="header">
        <h1 className="logo">next play</h1>
        <button className="apply-button">apply</button>
      </header> */}

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
          <div className="faq-item">+ who's behind this?</div>
          <div className="faq-item">+ who's hosting next play gatherings?</div>
          <div className="faq-item">+ want to host a gathering with us in your city?</div>
          <div className="faq-item">+ will my info be shared anywhere?</div>
          <div className="faq-item">+ other questions?</div>
        </div>
        <div className="faq-column">
        <div className="faq-item">+ how do I sign up for the newsletter? can VCs get involved?</div> 
          {/* <div className="faq-item expanded">
            - how do I sign up for the newsletter?
            <button className="subscribe-button">Subscribe here</button>
          </div> */}
          <div className="faq-item">+ how do I share roles with the community?</div>
          <div className="faq-item">+ how can VCs get involved?</div>
        </div>
      </div>
    </div>
    <div className="tweet-container">
      {tweets.map((tweet, index) => (
        <Tweet key={index} {...tweet} />
      ))}
    </div>
      </main>
    </div>
  );
};

export default NextPlay;
