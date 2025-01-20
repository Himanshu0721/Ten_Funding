import React from "react";
import "./Registration.css";

export default function Registration() {
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
          <form action="">
            <label htmlFor="title">
              <h3>
                Title <sub>*</sub>
              </h3>
            </label>
            <input type="text" className="form-control" required />
            <label htmlFor="company">
              <h3>
                Company <sub>*</sub>
              </h3>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your company name"
              required
            />
            <label htmlFor="website">
              <h3>
                Website URL <sub>*</sub>
              </h3>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your company website url"
              required
            />
            <label htmlFor="logo">
              <h3>
                Company Logo URL <sub>*</sub>
              </h3>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your company logo url"
              required
            />
            <label htmlFor="companyLinkedinUrl">
              <h3>
                Company LinkedIn URL <sub>*</sub>
              </h3>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your company linkedIn url"
              required
            />
            <label htmlFor="twitterUrl">
              <h3>
                Company Twitter URL <sub>*</sub>
              </h3>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your company twiter url"
              required
            />
            <label htmlFor="country">
              <h3>
                Country <sub>*</sub>
              </h3>
            </label>
            <input type="text" className="form-control" required />
            <label htmlFor="city">
              <h3>
                City <sub>*</sub>
              </h3>
            </label>
            <input type="text" className="form-control" required />
            <label htmlFor="ticketSize">
              <h3>
                Ticket Size <sub>*</sub>
              </h3>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="For Example:$ 100k - $ 500k"
              required
            />
            <label htmlFor="currentFundCorpus">
              <h3>
                CurrentFundCorpus <sub>*</sub>
              </h3>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="For Example: 500000"
              required
            />
            <label htmlFor="totalFundCorpus">
              <h3>
                TotalFundCorpus <sub>*</sub>
              </h3>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="For Example: 900000"
              required
            />
            <h3>
              Stages <sub>*</sub>
            </h3>
            <div id="scroll-prop">
              <table className="table">
                <tbody>
                  <tr>
                    <td>Pre-Seed</td>
                    <td>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Seed</td>
                    <td>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Series A</td>
                    <td>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Series B</td>
                    <td>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Series C and beyond</td>
                    <td>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Debt</td>
                    <td>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3>
              Sectors <sub>*</sub>
            </h3>
            <div id="scroll-prop">
              <table className="table">
                <tbody>
                  <tr>
                    <td>AI/ML</td>
                    <td>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>AR/VR</td>
                    <td>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>Agritech/Food </td>
                    <td>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>Biotech/Life sciences</td>
                    <td>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>Climate/Sustainability</td>
                    <td>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>Consumer</td>
                    <td>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>Crypto/Blockchain</td>
                    <td>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>Deep Tech/Hard Science</td>
                    <td>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>Education</td>
                    <td>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>Enterprise</td>
                    <td>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>Media & Entertainment</td>
                    <td>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>Pre-Seed</td>
                    <td>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>Gaming</td>
                    <td>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>Government/Defence</td>
                    <td>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>Health and Wellness</td>
                    <td>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>Healthcare/Medtech</td>
                    <td>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>Industrial/IoT/ Robotics</td>
                    <td>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>Prop Tech/Real Estate</td>
                    <td>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>Supply Chain/Logistics</td>
                    <td>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>Travel/Hospitality</td>
                    <td>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <label htmlFor="companyOverview">
              <h3>
                CompanyOverview <sub>*</sub>
              </h3>
            </label>
            <textarea name="text" id="" required></textarea>
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
        </div>
      </div>
    </>
  );
}
