import { useState } from "react";
import "./LaunchPad.css";
import jobsinfo from "../../assets/data/jobsInfo";

const LaunchPad = () => {
  const [visibleJobsCount, setVisibleJobsCount] = useState(4);

  //load more jobs
  const handleLoadMore = () => {
    setVisibleJobsCount((prevCount) => prevCount + 4);
  };

  const visibleJobs = jobsinfo.slice(0, visibleJobsCount);

  return (
    <div className="launchpad-container">
      <div className="hero-section">
        <div className="upper-section">
          <div className="card">
            <h1 className="heading">Looking for an upgrade?</h1>
            <div className="lower-section">
              <div className="card-para">
                <p>Check out our database of active VC jobs.</p>
              </div>

            
            </div>
          </div>
        </div>
        <div className="mid-section"></div>
      </div>
      {/* Job Table */}
      <table className="job-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Skills</th>
            <th>Responsibility</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {visibleJobs.map((job, index) => (
            <tr key={index}>
              <td>{job.title}</td>

              <td>{job.skills.join(", ")}</td>
              <td>{job.responsibilities}</td>
              <td>
                <button
                  className="description"
                  onClick={() => {
                    window.open(
                      "https://docs.google.com/forms/d/e/1FAIpQLScMY6Dos28JVDpYmgXB9FK4QpepWxsn_rEH-mQ1AYiql4d_qA/viewform",
                      "_blank"
                    );
                  }}
                >
                  {job.description}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Load More Button */}

      <button className="load-more" onClick={handleLoadMore}>
        Load More
      </button>
    </div>
  );
};

export default LaunchPad;
