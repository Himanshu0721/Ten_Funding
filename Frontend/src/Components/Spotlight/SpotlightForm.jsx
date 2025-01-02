import './SpotlightForm.css';

export default function SpotlightForm() {
  return (
    <>
      <div className="container">
        <div className="header-logo">
          <img src="jpgconverter.png" alt="IndianVCs logo" />
        </div>
        <div className="header-content">
          <h1>IndianVCs Spotlight Waitlist</h1>
          <h3>
            IndianVCs is a decentralized venture community by VCs for founders,
            guiding startups from "-1 to 0". We offer resources for fundraising
            and hiring, including investor lists, templates, job boards, and
            networking events.
          </h3>
          <p>This form may take roughly up to 5 to 10 minutes to complete. TIA!</p>
          <hr />
          <h4>
            <u>Your personal information will remain confidential and will not be
            shared outside.</u>
          </h4>
        </div>
        <div className="registration-form-content">
          <form action="">
            <div className="form-group">
              <label htmlFor="name">
                <h3>Name <sub>*</sub></h3>
              </label>
              <input type="text" id="name" className="form-control" required />
            </div>

            <div className="form-group">
              <label htmlFor="firmName">
                <h3>Company Name <sub>*</sub></h3>
              </label>
              <input type="text" id="firmName" className="form-control" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                <h3>Email <sub>*</sub></h3>
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Your Official Mail"
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
        </div>
      </div>
    </>
  );
}
