import { useEffect, useState, useRef } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import "./LaunchPad.css";
import jobsinfo from "../../assets/data/jobsInfo";
import { NavLink } from "react-router-dom";

const LaunchPad = () => {
  const jobTitle = [
    "Frontend Developer Internship",
    "Backend Developer Internship",
    "React js Developer Internship",
    "Python Development Internship",
    "MERN Stack Developer Internship",
    "Spring Boot Development Internship",
    "Software Testing Internship",
    "WIX Web Development Internship",
    "JAVA Developer Internship",
    "NODE.js Developer Internship",
    "Android Developer Internship",
    "WordPress Development Internship",
    "Angular Development Internship",
    "Data Structure Internship",
    "C/C++ Development Internship",
    "Artificial Intelligence Internship",
    "Data Science and Machine Learning Internship",
    "Big Data Internship",
    "Cloud Computing Internship",
    "Technical Program Management Internship",
    "DevOps Engineering Internship",
    "Data Analysis Internship",
  ];

  // const [jobs, setJobs] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [titleDropdownOpen, settitleDropdownOpen] = useState(false);
  const [visibleJobsCount, setVisibleJobsCount] = useState(4);
  const titleDropdownRef = useRef(null);

  //load more jobs
  const handleLoadMore = () => {
    setVisibleJobsCount((prevCount) => prevCount + 4);
  };

  const filteredJobs = jobsinfo.filter(
    (job) =>
      selectedFilters.length === 0 ||
      selectedFilters.includes(job.title)
    
  );

  useEffect(() => {
    if (selectedFilters.length > 0 && filteredJobs.length > visibleJobsCount) {
      setVisibleJobsCount(filteredJobs.length);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredJobs, selectedFilters, visibleJobsCount]);

  const visibleJobs = filteredJobs.slice(0, visibleJobsCount);

  // Toggle dropdown visibility
  const toggleTitleDropdown = () => {
    console.log(jobTitle);
    settitleDropdownOpen((prev) => !prev);
  };


  // Handle checkbox selection
  const handleCheckboxChange = (filter) => {
    setSelectedFilters((prevFilters) => {
      const updatedFilters = prevFilters.includes(filter)
        ? prevFilters.filter((item) => item !== filter)
        : [...prevFilters, filter];
      if (updatedFilters.length === 0) {
        setVisibleJobsCount(4);
      }
      return updatedFilters;
    });
  };

  // close selected items
  const handleSelectedItemClose = (filter) => {
    setSelectedFilters((prevFilters) => {
      const updatedFilters = prevFilters.filter((item) => item !== filter);
      if (updatedFilters.length === 0) {
        setVisibleJobsCount(4);
        return updatedFilters;
      }
    });
  };

  // Close dropdown when clicking outside
  const handleClickOutside = (event) => {
    if (
      titleDropdownRef.current &&
      !titleDropdownRef.current.contains(event.target)
    ) {
      settitleDropdownOpen(false);
    }
  
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

              <div className="button-container">
                 
                  <NavLink className="post-button" to="/registration-form">
                    Post a job <span className="arrow">→</span>
                  </NavLink>
              
                {/* <button className="post-button">
                  Post a job <span className="arrow">→</span>
                </button> */}
              </div>
            </div>
          </div>
        </div>
        <div className="mid-section"></div>
      </div>

      {/* Filters */}
      <div className="filters">
        <div className="dropdown-container" ref={titleDropdownRef}>
          <button className="dropdown-button" onClick={toggleTitleDropdown}>
            Title <MdOutlineKeyboardArrowDown />
          </button>
          {titleDropdownOpen && (
            <ul className="dropdown-menu">
              {jobTitle.map((Titles, index) => {
                return (
                  <li key={index}>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedFilters.includes(Titles)}
                        onChange={() => handleCheckboxChange(Titles)}
                      />{" "}
                      {Titles}
                    </label>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>

      {/* Selected Filters */}
      <div className="selected-filters">
        {selectedFilters.length > 0 ? (
          <div className="selected-items">
            {selectedFilters.map((filter, index) => (
              <h5 key={index}>
                {filter}{" "}
                <RxCross2 onClick={() => handleSelectedItemClose(filter)} />{" "}
              </h5>
            ))}
          </div>
        ) : null}
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
                <button className="description"  onClick={() => {
        window.open(
          "https://docs.google.com/forms/d/e/1FAIpQLScMY6Dos28JVDpYmgXB9FK4QpepWxsn_rEH-mQ1AYiql4d_qA/viewform",
          "_blank"
        );
      }}>{job.description}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Load More Button */}
      {selectedFilters.length === 0 &&
        visibleJobsCount < filteredJobs.length && (
          <button className="load-more" onClick={handleLoadMore}>
            Load More
          </button>
        )}
    </div>
  );
};

export default LaunchPad;
