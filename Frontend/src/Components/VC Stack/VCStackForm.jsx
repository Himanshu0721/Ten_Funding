import React, { useState } from "react";
import axios from "axios";
import "./VCStackForm.css";

export default function VCStackForm() {
  const [formData, setFormData] = useState({
    name: "",
    firm_name: "",
    email: "",
    interested_newsletter_story: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/tech-stack-waitlist/", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setResponseMessage(response.data.message || "Submission successful!");
      setFormData({ name: "", firm_name: "", email: "", interested_newsletter_story: "" });
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
    <>
      <div className="vcstackform-container">
        <div className="vcstackform-header-logo">
          <img src="jpgconverter.png" alt="IndianVCs logo" />
        </div>
        <div className="vcstackform-header-content">
          <h1>IndianVCs VC Tech Stack Waitlist</h1>
          <h2>
            Leading startups from "-1 to 0" is IndianVCs, a decentralized
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
        <div className="vcstackform-registration-form-content">
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
              <label htmlFor="firm_name">
                <h3>
                  Firm Name <sub>*</sub>
                </h3>
              </label>
              <input
                type="text"
                id="firm_name"
                className="form-control"
                value={formData.firm_name}
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

            <div className="form-group">
              <label htmlFor="interested_newsletter_story">
                <h3>
                  Would you be interested in having your fund highlighted in the
                  IndianVCs newsletter, which would tell its journey and story?{" "}
                  <sub>*</sub>
                </h3>
              </label>
              <select
                id="interested_newsletter_story"
                className="form-slect"
                value={formData.interested_newsletter_story}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="YES">YES</option>
                <option value="NO">NO</option>
              </select>
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
