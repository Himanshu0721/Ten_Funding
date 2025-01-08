import "./VCStackForm.css";

export default function VCStackForm() {
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
          <form action="">
            <div className="form-group">
              <label htmlFor="name">
                <h3>
                  Name <sub>*</sub>
                </h3>
              </label>
              <input type="text" id="name" className="form-control" required />
            </div>

            <div className="form-group">
              <label htmlFor="firmName">
                <h3>
                  Firm Name <sub>*</sub>
                </h3>
              </label>
              <input
                type="text"
                id="firmName"
                className="form-control"
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
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="leadrounds">
                <h3>
                  Would you be interested in having your fund highlighted in the
                  IndianVCs newsletter, which would tell its journey and story?{" "}
                  <sub>*</sub>
                </h3>
              </label>
              <select className="form-slect">
                <option value="">YES</option>
                <option value="">NO</option>
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
        </div>
      </div>
    </>
  );
}
