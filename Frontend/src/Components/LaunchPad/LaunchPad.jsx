import { useEffect, useState, useRef } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import "./LaunchPad.css";
import jobsinfo from "../../assets/data/jobsInfo";

const LaunchPad = () => {
  // const [jobs, setJobs] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);
  const [visibleJobsCount, setVisibleJobsCount] = useState(4);
  const locationDropdownRef = useRef(null);
  const roleDropdownRef = useRef(null);

  //load more jobs
  const handleLoadMore = () => {
    setVisibleJobsCount((prevCount) => prevCount + 4);
  };

  const filteredJobs = jobsinfo.filter(
    (job) =>
      selectedFilters.length === 0 ||
      selectedFilters.includes(job.title) ||
      selectedFilters.includes(job.roleType)
  );

  useEffect(() => {
    if (selectedFilters.length > 0 && filteredJobs.length > visibleJobsCount) {
      setVisibleJobsCount(filteredJobs.length);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredJobs, selectedFilters, visibleJobsCount]);

  const visibleJobs = filteredJobs.slice(0, visibleJobsCount);

  // Toggle dropdown visibility
  const toggleLocationDropdown = () => {
    console.log(jobs.title);
    setLocationDropdownOpen((prev) => !prev);
    setRoleDropdownOpen(false);
  };

  const toggleRoleDropdown = () => {
    setRoleDropdownOpen(!roleDropdownOpen);
    setLocationDropdownOpen(false);
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
      locationDropdownRef.current &&
      !locationDropdownRef.current.contains(event.target)
    ) {
      setLocationDropdownOpen(false);
    }
    if (
      roleDropdownRef.current &&
      !roleDropdownRef.current.contains(event.target)
    ) {
      setRoleDropdownOpen(false);
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
                <button className="cta-button">
                  Post a job <span className="arrow">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mid-section"></div>
      </div>

      {/* Filters */}
      <div className="filters">
        <div className="dropdown-container" ref={locationDropdownRef}>
          <button className="dropdown-button" onClick={toggleLocationDropdown}>
            Title <MdOutlineKeyboardArrowDown />
          </button>
          {locationDropdownOpen && (
            <ul className="dropdown-menu">
              {jobsinfo.map((job, index) => {
                return (
                  <li key={{ index }}>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedFilters.includes(job.title)}
                        onChange={() => handleCheckboxChange(job.title)}
                      />{" "}
                      {job.title}
                    </label>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="dropdown-container" ref={roleDropdownRef}>
          <button className="dropdown-button" onClick={toggleRoleDropdown}>
            Role Type <MdOutlineKeyboardArrowDown />
          </button>
          {roleDropdownOpen && (
            <ul className="dropdown-menu">
              <label>
                <input
                  type="checkbox"
                  name="Full Time"
                  checked={selectedFilters.includes("Full Time")}
                  onChange={() => handleCheckboxChange("Full Time")}
                />{" "}
                Full Time
              </label>
              <label>
                <input
                  type="checkbox"
                  name="Part Time"
                  checked={selectedFilters.includes("Part Time")}
                  onChange={() => handleCheckboxChange("Part Time")}
                />{" "}
                Part Time
              </label>
              <label>
                <input
                  type="checkbox"
                  name="Internship"
                  checked={selectedFilters.includes("Internship")}
                  onChange={() => handleCheckboxChange("Internship")}
                />{" "}
                Internship
              </label>
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
                <button className="description">{job.description}</button>
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
