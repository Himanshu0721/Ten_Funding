
import  { useEffect, useState, useRef } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import "./LaunchPad.css";
import RegistrationForm from "../RegistrationForm/RegistrationFormNext";

const LaunchPad = () => {
  const [jobs] = useState([
    {
      name: "Investment Team",
      firm: "Dexter Ventures",
      logo: "https://cdn.prod.website-files.com/66231acb2160c0962a6c50d4/66694f5d54aa0e6febd94cea_dexter_angels_logo.jpg",
      location: "Bangalore",
      roleType: "Full Time",
      postedOn: "October 9, 2024",
    },
    {
      name: "Chief of Staff",
      firm: "Stellaris Venture Partners",
      logo: "https://cdn.prod.website-files.com/66231acb2160c0962a6c50d4/6672946615f1350a6172c38b_stellaris_venture_partners_logo.jpg",
      location: "Bangalore",
      roleType: "Full Time",
      postedOn: "September 9, 2024",
    },
    {
            name: "Analyst",
            firm: "Golden Sparrow",
            logo: "https://cdn.prod.website-files.com/66231acb2160c0962a6c50d4/666acfc240a460a98a37feb9_golden%20sparrow.jpg",
            location: "Bangalore",
            roleType: "Full Time",
            postedOn: "August 15, 2024",
          },
          {
            name: "Vice President - Investments",
            firm: "IvyCap Ventures",
            logo: "https://cdn.prod.website-files.com/66231acb2160c0962a6c50d4/6673d951bb72e693636a8e23_IVYCAP.jpg",
            location: "Mumbai",
            roleType: "Full Time",
            postedOn: "August 12, 2024",
          },
          {
            name: "Vice President - Investments",
            firm: "IvyCap Ventures",
            logo: "/logos/ivycap.png",
            location: "Bangalore",
            roleType: "Full Time",
            postedOn: "August 2, 2024",
          },
          {
              name: "Analyst",
              firm: "Speciale Invest",
              logo: "https://cdn.prod.website-files.com/66231acb2160c0962a6c50d4/666bf35cc95407021bd52bd6_speciale.jpg",
              location: "Bangalore",
              roleType: "Full Time",
              postedOn: "July 22, 2024",
            },
            {
              name: "Associate",
              firm: "Panthera Growth Partners",
              logo: "/logos/ivycap.png",
              location: "Mumbai",
              roleType: "Full Time",
              postedOn: "July 22, 2024",
            },
            {
              name: "Analyst/Associate",
              firm: "Incubate Fund Asia",
              logo: "https://cdn.prod.website-files.com/66231acb2160c0962a6c50d4/6683b25c14982cd99e9a2cb9_gradcapital_logo.jpg",
              location: "Bangalore",
              roleType: "Full Time",
              postedOn: "July 22, 2024",
            },
            {
              name: "Associate",
              firm: "Chiratae Ventures",
              logo: "https://cdn.prod.website-files.com/66231acb2160c0962a6c50d4/666b061b4c4cbf630d043ebc_panthera.jpg",
              location: "Bangalore",
              roleType: "Full Time",
              postedOn: "July 27, 2024",
            },
           {
            name: "Analyst",
            firm: "Antler India",
            logo: "https://cdn.prod.website-files.com/66231acb2160c0962a6c50d4/666ae7d63dd8dcf8ff5b021b_incubate_fund_india_logo.jpg",
            location: "Bangalore",
            roleType: "Full Time",
            postedOn: "June 24, 2024",
          },
          {
            name: "Analyst",
            firm: "Panthera Growth Partners",
            logo: "/logos/panthera.png",
            location: "Mumbai",
            roleType: "Full Time",
            postedOn: "June 10, 2024",
          },
          {
            name: "Associate",
            firm: "Blume Ventures",
            logo: "https://cdn.prod.website-files.com/66231acb2160c0962a6c50d4/666a955840272fd1fee40926_chiratae_ventures_logo.jpg",
            location: "Bangalore",
            roleType: "Full Time",
            postedOn: "June 10, 2024",
          },
          {
            name: "Analyst",
            firm: "Prath Ventures",
            logo: "https://cdn.prod.website-files.com/66231acb2160c0962a6c50d4/664bbcb70f1cde5ff0ce7647_AntlerGlobal%20logo.jpeg",
            location: "Mumbai",
            roleType: "Full Time",
            postedOn: "May 26, 2024",
          },
          {
            name: "Associate",
            firm: "All In Capital",
            logo: "https://cdn.prod.website-files.com/66231acb2160c0962a6c50d4/6673057f3527ec16102f703d_blume_venture_advisors_logo.jpg",
            location: "Bangalore",
            roleType: "Full Time",
            postedOn: "May 20, 2024",
          },
          {
            name: "Analyst/Associate",
            firm: "pi Ventures",
            logo: "https://cdn.prod.website-files.com/66231acb2160c0962a6c50d4/66792d531755763b04015082_prathventures_logo.jpg",
            location: "Bangalore",
            roleType: "Full Time",
            postedOn: "May 15, 2024",
          },
          {
            name: "Investment Manager",
            firm: "Beyond Next Ventures",
            logo: "https://cdn.prod.website-files.com/66231acb2160c0962a6c50d4/66694f5d54aa0e6febd94cea_dexter_angels_logo.jpg",
            location: "Bangalore",
            roleType: "Full Time",
            postedOn: "May 10, 2024",
          },
          {
            name: "Legal Analyst",
            firm: "3one4 Capital",
            logo: "https://cdn.prod.website-files.com/66231acb2160c0962a6c50d4/664bbcc6ab177f2f66efb1c3_3one4%20Capital%20logo.jpeg",
            location: "Bangalore",
            roleType: "Full Time",
            postedOn: "May 5, 2024",
          },
          {
            name: "Analyst",
            firm: "Panthera Growth Partners",
            logo: "https://cdn.prod.website-files.com/66231acb2160c0962a6c50d4/666b061b4c4cbf630d043ebc_panthera.jpg",
            location: "Mumbai",
            roleType: "Part Time",
            postedOn: "April 20, 2024",
          },
          {
            name: "Analyst/Associate",
            firm: "Advantedge Founders",
            logo: "https://cdn.prod.website-files.com/66231acb2160c0962a6c50d4/6669705e52d89c68e300a81b_advantedge_founders_logo.jpg",
            location: "Delhi",
            roleType: "Full Time",
            postedOn: "April 10, 2024",
          },
          {
            name: "Analyst",
            firm: "Chiratae Ventures",
            logo: "https://cdn.prod.website-files.com/66231acb2160c0962a6c50d4/666a955840272fd1fee40926_chiratae_ventures_logo.jpg",
            location: "Bangalore",
            roleType: "Internship",
            postedOn: "April 5, 2024",
          },
      
    
    
  ]);

  const [selectedFilters, setSelectedFilters] = useState([]);
  const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);
  const [visibleJobsCount, setVisibleJobsCount] = useState(4);
  const locationDropdownRef = useRef(null);
  const roleDropdownRef = useRef(null);
  
 
  //load more jobs
  const handleLoadMore = () => {
    setVisibleJobsCount((prevCount)=> prevCount + 4);
  };

  const filteredJobs = jobs.filter((job)=>
  selectedFilters.length === 0 || selectedFilters.includes(job.location)||
selectedFilters.includes(job.roleType));
  
  useEffect(()=>{
    if(selectedFilters.length > 0 && filteredJobs.length > visibleJobsCount){
      setVisibleJobsCount(filteredJobs.length);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[filteredJobs,selectedFilters,visibleJobsCount])

  const visibleJobs = filteredJobs.slice(0,visibleJobsCount);
  
  // Toggle dropdown visibility
  const toggleLocationDropdown = () => {
    setLocationDropdownOpen(!locationDropdownOpen);
    setRoleDropdownOpen(false);
  };

  const toggleRoleDropdown = () => {
    setRoleDropdownOpen(!roleDropdownOpen);
    setLocationDropdownOpen(false);
  };

  // Handle checkbox selection
  const handleCheckboxChange = (filter) => {
    setSelectedFilters((prevFilters) =>{
      const updatedFilters = prevFilters.includes(filter)
        ? prevFilters.filter((item) => item !== filter)
        : [...prevFilters, filter];
        if(updatedFilters.length === 0){
          setVisibleJobsCount(4);
        }
        return updatedFilters;
  });
  };

  // close selected items 
  const handleSelectedItemClose = (filter) => {
    setSelectedFilters((prevFilters)=>{
      const updatedFilters = prevFilters.filter((item)=> item !== filter);
      if (updatedFilters.length ===0){
        setVisibleJobsCount(4);
        return updatedFilters;
      }
   } );
  };

  // Close dropdown when clicking outside
  const handleClickOutside = (event) => {
    if (locationDropdownRef.current && !locationDropdownRef.current.contains(event.target)) {
      setLocationDropdownOpen(false);
    }
    if (roleDropdownRef.current && !roleDropdownRef.current.contains(event.target)) {
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
        <button className="cta-button" >
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
            Location <MdOutlineKeyboardArrowDown />
          </button>
          {locationDropdownOpen && (
            <ul className="dropdown-menu">
              <label>
                <input
                  type="checkbox"
                  name="Bangalore"
                  checked={selectedFilters.includes("Bangalore")}
                  onChange={() => handleCheckboxChange("Bangalore")}
                />{" "}
                Bangalore
              </label>
              <label>
                <input
                  type="checkbox"
                  name="Mumbai"
                  checked={selectedFilters.includes("Mumbai")}
                  onChange={() => handleCheckboxChange("Mumbai")}
                />{" "}
                Mumbai
              </label>
              <label>
                <input
                  type="checkbox"
                  name="Delhi"
                  checked={selectedFilters.includes("Delhi")}
                  onChange={() => handleCheckboxChange("Delhi")}
                />{" "}
                Delhi
              </label>
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
              <h5 key={index}>{filter} <RxCross2  onClick={ ()=>handleSelectedItemClose(filter)}/> </h5>
             
            ))}
          </div>
        ) : null 
          }
      </div>

      {/* Job Table */}
      <table className="job-table">
        <thead>
          <tr>
            <th>NAME</th>
            <th>FIRM</th>
            <th>LOCATION</th>
            <th>ROLE TYPE</th>
            <th>POSTED ON</th>
          </tr>
        </thead>
        <tbody>
          {visibleJobs.map((job, index) => (
            <tr key={index}>
              <td>{job.name}</td>
              {/* <td>
                <img src={job.logo} alt={job.firm} className="firm-logo" />
                {job.firm}
              </td> */}
                <td>
          <div className="firm-container">
            <img src={job.logo} alt={job.firm} className="firm-logo" />
            <span>{job.firm}</span>
          </div>
        </td>
              <td>{job.location}</td>
              <td>{job.roleType}</td>
              <td>{job.postedOn}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Load More Button */}
      { selectedFilters.length === 0 &&  visibleJobsCount < filteredJobs.length &&(
          <button className="load-more" onClick={handleLoadMore}>Load More</button>
      )}
     
    </div>
  );
};

export default LaunchPad;
