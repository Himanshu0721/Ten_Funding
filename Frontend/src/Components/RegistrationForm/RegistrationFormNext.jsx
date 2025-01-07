import "./RegistrationFormNext.css";
import { useNavigate } from "react-router-dom";

export default function RegistrationForm() {
  const navigate = useNavigate();

  let goToPreviousPage = () => {
    navigate("/registration-form");
  };
  return (
    <>
      <div className="next-form-container">
        <button className="previous-page-btn" onClick={goToPreviousPage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
            />
          </svg>
          Back
        </button>
        <br />
        <div className="header-logo">
          <img src="jpgconverter.png" alt="" />
        </div>

        <div className="next-form-content">
          <form action="">
            <h2>
              We will not publish any data from this section. This section is
              only for us to understand your firm better.
            </h2>
            <label htmlFor="PortfolioCount">
              <h3>Investment Process </h3>{" "}
            </label>
            <textarea
              name="text"
              id=""
              required
              placeholder="Please explain your firm's investment criteria, process and how you evaluate founders. If you can tell a founder in the first call, then you can also tell that here."
            ></textarea>

            <label htmlFor="PortfolioCount">
              <h3>Turn Around Time </h3>{" "}
            </label>
            <textarea
              name="text"
              id=""
              required
              placeholder="How long it takes to go from the first call to the term sheet"
            ></textarea>

            <label htmlFor="PortfolioCount">
              <h3>Fund Preferences</h3>{" "}
            </label>
            <textarea
              name="text"
              id=""
              required
              placeholder="Please explain any preferences you may have, such as a certain level of traction or specific ownership targets."
            ></textarea>

            <label htmlFor="name" required>
              <h3>Other Remarks</h3>
            </label>
            <input
              type="text"
              className="form-control"
              required
              placeholder="Anything else :)"
            />

            <label htmlFor="leadrounds">
              <h3>
                Do you prefer to lead rounds? <sub>*</sub>
              </h3>{" "}
            </label>
            <select className="form-slect">
              <option value="">YES</option>
              <option value="">NO</option>
            </select>
            <hr />

            <p>
              <b>Disclaimer and Terms & Conditions:</b>By clicking "Submit" and
              providing your data to IndianVCs, you consent to the public
              disclosure of this information. While IndianVCs takes reasonable
              measures to protect your data, we are not liable for any
              unauthorised access or data breaches. You agree that IndianVCs
              will not be held responsible for any claims, damages, or losses
              arising from this disclosure. You confirm that the information
              provided is accurate and complete to the best of your knowledge.
              IndianVCs is not responsible for verifying the accuracy of the
              submitted information. Your submission indicates acceptance of
              these terms and conditions, including the use of your data for
              analytical and community purposes.{" "}
            </p>

            <button>
              {" "}
              Submit{" "}
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
