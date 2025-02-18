import React, { useState } from "react";
import axios from "axios";
import "./Registration.css";

export default function Registration() {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    website: "",
    logo: "",
    companyLinkedinUrl: "",
    twitterUrl: "",
    country: "",
    city: "",
    ticketSize: "",
    currentFundCorpus: "",
    totalFundCorpus: "",
    stages: [],
    sectors: [],
    companyOverview: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "stages" || name === "sectors") {
      setFormData((prevState) => {
        const updatedArray = checked
          ? [...prevState[name], value]
          : prevState[name].filter((item) => item !== value);
        return { ...prevState, [name]: updatedArray };
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://ten-funding-vy7h.onrender.com/api/submit-form/",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setResponseMessage(response.data.message || "Submission successful!");
    } catch (error) {
      setResponseMessage(`Error: ${error.response?.data || error.message}`);
    }
  };

  const stageOptions = [
    "Pre-Seed",
    "Seed",
    "Series A",
    "Series B",
    "Series C and beyond",
    "Debt",
  ];
  const sectorOptions = [
    "Sectors Agnostic",
    "Other",
    "AI/ML",
    "AR/VR",
    "Agritech/Food",
    "Biotech/Life sciences",
    "Climate/Sustainability",
    "Consumer",
    "Crypto/Blockchain",
    "Deep Tech/Hard Science",
    "Education",
    "Enterprise",
    "Media & Entertainment",
    "Fintech",
    "Gaming",
    "Government/Defence",
    "Health and Wellness",
    "Healthcare/Medtech",
    "Industrial/IoT/ Robotics",
    "Prop Tech/Real Estate",
    "Supply Chain/Logistics",
    "Travel/Hospitality",
  ];
  return (
    <>
      <div className="registration-form-container">
        <div className="header-content">
          <h1>TEN Funding Investor Community Registration Form</h1>
          <h3>
            TEN Funding is a decentralized venture community by VCs for
            founders, guiding startups from "-1 to 0". We offer resources for
            fundraising and hiring, including investor lists, templates, job
            boards, and networking events.
          </h3>
          <p>
            This form may take roughly up to 2 to 5 minutes to complete. TIA!
          </p>
          <hr />
          <h4>
            <u>
              Your personal information will remain confidential and will not be
              shared outside.
            </u>
          </h4>
        </div>

        <div className="registration-form-content">
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="title">
              <h3>
                Title <sub>*</sub>
              </h3>
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              required
              onChange={handleChange}
            />
            <label htmlFor="company">
              <h3>
                Company <sub>*</sub>
              </h3>
            </label>
            <input
              type="text"
              className="form-control"
              id="company"
              name="company"
              required
              onChange={handleChange}
            />
            <label htmlFor="website">
              <h3>
                Website URL <sub>*</sub>
              </h3>
            </label>
            <input
              type="text"
              className="form-control"
              id="website"
              name="website"
              required
              onChange={handleChange}
            />
            <label htmlFor="logo">
              <h3>
                Company Logo URL <sub>*</sub>
              </h3>
            </label>
            <input
              type="text"
              className="form-control"
              id="logo"
              name="logo"
              required
              onChange={handleChange}
            />
            <label htmlFor="companyLinkedinUrl">
              <h3>
                Company LinkedIn URL <sub>*</sub>
              </h3>
            </label>
            <input
              type="text"
              className="form-control"
              id="companyLinkedinUrl"
              name="companyLinkedinUrl"
              required
              onChange={handleChange}
            />
            <label htmlFor="twitterUrl">
              <h3>
                Company Twitter URL <sub>*</sub>
              </h3>
            </label>
            <input
              type="text"
              className="form-control"
              id="twitterUrl"
              name="twitterUrl"
              required
              onChange={handleChange}
            />
            <label htmlFor="country">
              <h3>
                Country <sub>*</sub>
              </h3>
            </label>
            <input
              type="text"
              className="form-control"
              id="country"
              name="country"
              required
              onChange={handleChange}
            />
            <label htmlFor="city">
              <h3>
                City <sub>*</sub>
              </h3>
            </label>
            <input
              type="text"
              className="form-control"
              id="city"
              name="city"
              required
              onChange={handleChange}
            />
            <label htmlFor="ticketSize">
              <h3>
                Ticket Size <sub>*</sub>
              </h3>
            </label>
            <input
              type="text"
              className="form-control"
              id="ticketSize"
              name="ticketSize"
              required
              onChange={handleChange}
            />
            <label htmlFor="currentFundCorpus">
              <h3>
                CurrentFundCorpus <sub>*</sub>
              </h3>
            </label>
            <input
              type="text"
              className="form-control"
              id="currentFundCorpus"
              name="currentFundCorpus"
              required
              onChange={handleChange}
            />
            <label htmlFor="totalFundCorpus">
              <h3>
                TotalFundCorpus <sub>*</sub>
              </h3>
            </label>
            <input
              type="text"
              className="form-control"
              id="totalFundCorpus"
              name="totalFundCorpus"
              required
              onChange={handleChange}
            />

            <h3>
              Stage <sub>*</sub>
            </h3>
            <div id="scroll-prop">
              <table className="table">
                <tbody>
                  {stageOptions.map((stage) => (
                    <tr key={stage}>
                      <td>{stage}</td>
                      <td>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="stages"
                          id={stage}
                          value={stage}
                          checked={formData.stages.includes(stage)}
                          onChange={handleChange}
                        />
                        <label htmlFor={stage}></label>{" "}
                        {/* Add label for custom styles */}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div id="scroll-prop">
              <h3>
                Sectors <sub>*</sub>
              </h3>
              <table className="table">
                <tbody>
                  {sectorOptions.map((sector) => (
                    <tr key={sector}>
                      <td>{sector}</td>
                      <td>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="sectors"
                          id={sector}
                          value={sector}
                          checked={formData.sectors.includes(sector)}
                          onChange={handleChange}
                        />
                        <label htmlFor={sector}></label>{" "}
                        {/* Add label for custom styles */}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <label htmlFor="companyOverview">
              <h3>
                Company Overview <sub>*</sub>
              </h3>
            </label>
            <textarea
              name="companyOverview"
              id="companyOverview"
              className="form-control"
              required
              placeholder="Enter a brief overview of your company"
              onChange={handleChange}
            ></textarea>
            <button>
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
          {responseMessage && <p className="my-class">{responseMessage}</p>}
        </div>
      </div>
    </>
  );
}
