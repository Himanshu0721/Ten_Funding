import "./Registration.css";
import { useNavigate } from "react-router-dom";

export default function Registration() {
  const navigate = useNavigate();
  let goToNextPage = () => {
    navigate("/registrationformnext");
  };

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
            This form may take roughly up to 5 to 10 minutes to complete. TIA!
          </p>{" "}
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
            <label htmlFor="name" required>
              <h3>
              Title <sub>*</sub>
              </h3>
            </label>

            <input type="text" className="form-control" required />

            <label htmlFor="FirmName">
              <h3>
              Company <sub>*</sub>{" "}
              </h3>{" "}
            </label>
            <input type="text" className="form-control" required />

            <label htmlFor="email">
              <h3>
              Website <sub>*</sub>
              </h3>{" "}
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="website name"
              required
            />

            <label htmlFor="FoundedYear">
              <h3>
              CompanyLinkedinURL <sub>*</sub>
              </h3>{" "}
            </label>
            <input type="text" className="form-control" required />

            <label htmlFor="TicketSize">
              <h3>
                Ticket Size <sub>*</sub>
              </h3>{" "}
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="For Example:$ 200k - $ 5M"
              required
            />

            <label htmlFor="CurrentFundSize">
              <h3>
              CurrentFundCorpus <sub>*</sub>
              </h3>{" "}
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="For Example:$ 100M"
              required
            />

            <label htmlFor="aum">
              <h3>
              TotalFundCorpus <sub>*</sub>
              </h3>{" "}
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="For Example:2300000"
              required
            />

            <label htmlFor="PortfolioCount">
              <h3>
              Country<sub>*</sub>{" "}
              </h3>{" "}
            </label>
            <input type="text" className="form-control" required />

            <label htmlFor="TopPortfolioCompanies">
              <h3>
              TwitterURL <sub>*</sub>
              </h3>{" "}
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="enter your twiter url"
              required
            />

            
            <h3>Stages </h3>
            <h2>(Please select one of the three options for each stage.</h2>
            <h2>
              For example, if you invest in Pre-Seed and Seed stages, then
              select either "Most often invest in" or "Opportunistically invest
              in" for those stages and select "Doesn't look at" for the rest of
              the stages
            </h2>
            <h2>
              Also if you're filling this in mobile please scroll to the right
              to find "Doesn't look at" option)
              <sub>*</sub>
            </h2>

            <div id="scroll-prop">
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Most often invests in:</th>
                    <th>Opportunistically invests in:</th>
                    <th>Doesn't look at:</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Pre-Seed</td>
                    <td>
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
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
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
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
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
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
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
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
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
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
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
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

            <h2>
              {" "}
              Sectors  (Please only select three top sectors in the first
              column) <sub>*</sub>
            </h2>

            <div id="scroll-prop">
              <table className="table">
                <thead>
                  <tr>
                    <th> </th>
                    <th> Top Three Sector - Most often invests in:</th>
                    <th>Also invests in:</th>
                    <th>Doesn't look at:</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>AI/ML</td>
                    <td>
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
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
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
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
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
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
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
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
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
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
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
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
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
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
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
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
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
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
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
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
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>Fintech</td>
                    <td>
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
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
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
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
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
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
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
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
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
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
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
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
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
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
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>SaaS/DevOps/Marketplace</td>
                    <td>
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
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
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
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
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                      />
                    </td>
                    <td>
                      {" "}
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
                CompanyOverview <sub>*</sub>
              </h3>{" "}
            
            <textarea name="text" id="" required></textarea>

            <button onClick={goToNextPage}>
              {" "}
              Next{" "}
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
      {/* <a href=""><button className='made-with-tally'>Made With Tally</button></a> */}
    </>
  );
}
