import React, { useState } from "react";
import axios from "axios";
import "./pitch.css";

export default function Pitch() {
  const [formData, setFormData] = useState({
    mail_address: "",
    start_up_name: "",
    business_description: "",
    founders_linkedin_profiles: "",
    product_website: "",
    funding_amount: "",
    pitch_deck: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://ten-funding-vy7h.onrender.com/api/vc-application/",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setResponseMessage(response.data.message || "Submission successful!");
      setFormData({
        mail_address: "",
        start_up_name: "",
        business_description: "",
        founders_linkedin_profiles: "",
        product_website: "",
        funding_amount: "",
        pitch_deck: "",
      });
    } catch (error) {
      if (error.response) {
        // Server-side error
        setResponseMessage(`Error: ${JSON.stringify(error.response.data)}`);
      } else {
        // Client-side error or network error
        setResponseMessage(`Error: ${error.message}`);
      }
    }
  };

  return (
    <div className="application-form-container">
      <main className="form-content">
        <form className="form" onSubmit={handleSubmit}>
          <label>
            Mail Address
            <input
              type="email"
              id="mail_address"
              placeholder="Enter your email"
              value={formData.mail_address}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Startup Name
            <input
              type="text"
              id="start_up_name"
              placeholder="Enter your startup name"
              value={formData.start_up_name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Business Description
            <textarea
              id="business_description"
              placeholder="Describe your business"
              value={formData.business_description}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Founders' LinkedIn Profiles
            <input
              type="url"
              id="founders_linkedin_profiles"
              placeholder="Enter LinkedIn profiles"
              value={formData.founders_linkedin_profiles}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Product Website
            <input
              type="url"
              id="product_website"
              placeholder="Enter product website"
              value={formData.product_website}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Funding Amount (in $)
            <input
              type="number"
              id="funding_amount"
              placeholder="Enter funding amount"
              value={formData.funding_amount}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Pitch Deck (URL)
            <input
              type="url"
              id="pitch_deck"
              placeholder="Enter pitch deck URL"
              value={formData.pitch_deck}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
        {responseMessage && <p>{responseMessage}</p>}
      </main>
    </div>
  );
}
