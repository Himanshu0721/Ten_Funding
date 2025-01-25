import React, { useState } from "react";
import axios from "axios";
import "./SpotlightForm.css";

export default function SpotlightForm() {
  const [formData, setFormData] = useState({
    name: "",
    company_name: "",
    email: "",
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
        "https://ten-funding-1-l3ui.onrender.com/api/spotlight/",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setResponseMessage(response.data.message || "Submission successful!");
      setFormData({ name: "", company_name: "", email: "" });
    } catch (error) {
      setResponseMessage(`Error: ${error.response?.data || error.message}`);
    }
  };

  return (
    <>
      <div className="spotlightform-container">
        <div className="spotlightform-header-content">
          <h1>TEN Funding Spotlight Waitlist</h1>
          <h2>
            Leading startups from "-1 to 0" is TEN Funding, a decentralized
            venture network run by VCs for founders. We provide tools for hiring
            and fundraising, such as job boards, templates, investor lists, and
            networking events.
          </h2>
          <hr />
          <p>
            Your personal information will remain confidential and will not be
            shared outside.
          </p>
        </div>
        <div className="spotlightform-registration-form-content">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">
                <h3>
                  Name <sub>*</sub>
                </h3>
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="company_name">
                <h3>
                  Firm Name <sub>*</sub>
                </h3>
              </label>
              <input
                type="text"
                id="company_name"
                className="form-control"
                value={formData.company_name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                <h3>
                  Mail <sub>*</sub>
                </h3>
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Your Official Mail"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit-button">
              Submit
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg>
            </button>
          </form>
          {responseMessage && <p>{responseMessage}</p>}
        </div>
      </div>
    </>
  );
}
