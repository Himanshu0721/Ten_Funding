import { useEffect, useState, useRef } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import "./LaunchPad.css";


const LaunchPad = () => {
  
  const [jobs] = useState([
    {
      title: "Frontend Developer Internship",
      skills: ["React", "Tailwind CSS", "HTML", "CSS", "JavaScript", "Git"],
      responsibilities: "Assist in designing and developing...",
      description: "View Job Description",
    },
    {
      title: "Backend Developer Internship",
      skills: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "SQL/NoSQL databases",
        "Git",
        "Docker",
      ],
      responsibilities: "Assist in designing and developing...",
      description: "View Job Description",
    },
    {
      title: "React js Developer Internship",
      skills: ["React.js", "JavaScript", "Redux", "HTML", "CSS", "Git"],
      responsibilities: "Assist in developing front-end applications...",
      description: "View Job Description",
    },
    {
      title: "Python Development Internship",
      skills: [
        "Python",
        "Django/Flask",
        "REST APIs",
        "SQL/NoSQL databases",
        "Git",
        "Docker",
      ],
      responsibilities: "Assist in developing and maintaining...",
      description: "View Job Description",
    },
    {
      title: "MERN Stack Developer Internship",
      skills: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "JavaScript",
        "REST APIs",
        "Git",
        "Docker",
      ],
      responsibilities: "Assist in designing and developing...",
      description: "View Job Description",
    },
    {
      title: "Spring Boot Development Internship",
      skills: [
        "Java",
        "Spring Boot",
        "REST APIs",
        "SQL/NoSQL databases",
        "Git",
        "Maven",
        "Docker",
      ],
      responsibilities: "Assist in designing and developing...",
      description: "View Job Description",
    },
    {
      title: "Software Testing Internship",
      skills: [
        "Manual Testing",
        "Automated Testing",
        "Selenium",
        "JUnit",
        "TestNG",
        "Bug Tracking Tools",
        "Git",
      ],
      responsibilities: "Assist in the design and...",
      description: "View Job Description",
    },
    {
      title: "WIX Web Development Internship",
      skills: [
        "Wix",
        "HTML",
        "CSS",
        "JavaScript",
        "SEO",
        "Graphic Design",
        "UX/UI Design",
      ],
      responsibilities: "Develop and design websites using...",
      description: "View Job Description",
    },
    {
      title: "Frontend Developer Internship",
      skills: ["React", "Tailwind CSS", "HTML", "CSS", "JavaScript", "Git"],
      responsibilities: "Assist in designing and developing...",
      description: "View Job Description",
    },
    {
      title: "Backend Developer Internship",
      skills: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "SQL/NoSQL databases",
        "Git",
        "Docker",
      ],
      responsibilities: "Assist in designing and developing...",
      description: "View Job Description",
    },
    {
      title: "React js Developer Internship",
      skills: ["React.js", "JavaScript", "Redux", "HTML", "CSS", "Git"],
      responsibilities: "Assist in developing front-end applications...",
      description: "View Job Description",
    },
    {
      title: "Python Development Internship",
      skills: [
        "Python",
        "Django/Flask",
        "REST APIs",
        "SQL/NoSQL databases",
        "Git",
        "Docker",
      ],
      responsibilities: "Assist in developing and maintaining...",
      description: "View Job Description",
    },
    {
      title: "MERN Stack Developer Internship",
      skills: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "JavaScript",
        "REST APIs",
        "Git",
        "Docker",
      ],
      responsibilities: "Assist in designing and developing...",
      description: "View Job Description",
    },
    {
      title: "Spring Boot Development Internship",
      skills: [
        "Java",
        "Spring Boot",
        "REST APIs",
        "SQL/NoSQL databases",
        "Git",
        "Maven",
        "Docker",
      ],
      responsibilities: "Assist in designing and developing...",
      description: "View Job Description",
    },
    {
      title: "Software Testing Internship",
      skills: [
        "Manual Testing",
        "Automated Testing",
        "Selenium",
        "JUnit",
        "TestNG",
        "Bug Tracking Tools",
        "Git",
      ],
      responsibilities: "Assist in the design and...",
      description: "View Job Description",
    },
    {
      title: "WIX Web Development Internship",
      skills: [
        "Wix",
        "HTML",
        "CSS",
        "JavaScript",
        "SEO",
        "Graphic Design",
        "UX/UI Design",
      ],
      responsibilities: "Develop and design websites using...",
      description: "View Job Description",
    },
    {
      title: "MEAN Stack Developer Internship",
      skills: [
        "MongoDB",
        "Express.js",
        "Angular",
        "Node.js",
        "JavaScript",
        "REST APIs",
        "Git",
        "Docker",
      ],
      responsibilities: "Develop and maintain web applications...",
      description: "View Job Description",
    },
    {
      title: "JAVA Developer Internship",
      skills: [
        "Java",
        "Spring Framework",
        "REST APIs",
        "SQL/NoSQL databases",
        "Git",
        "Maven",
        "Docker",
      ],
      responsibilities: "Collaborate with our team in...",
      description: "View Job Description",
    },
    {
      title: "NODE.js Developer Internship",
      skills: [
        "Node.js",
        "Express.js",
        "JavaScript",
        "REST APIs",
        "SQL/NoSQL databases",
        "Git",
        "Docker",
      ],
      responsibilities: "Assist in designing and developing...",
      description: "View Job Description",
    },
    {
      title: "Android Developer Internship",
      skills: [
        "Java/Kotlin",
        "Android Studio",
        "XML",
        "REST APIs",
        "Git",
        "Firebase",
        "SQLite",
      ],
      responsibilities: "Collaborate with our team to...",
      description: "View Job Description",
    },
    {
      title: "WordPress Development Internship",
      skills: [
        "WordPress",
        "PHP",
        "HTML",
        "CSS",
        "JavaScript",
        "MySQL",
        "SEO",
        "Git",
      ],
      responsibilities: "Develop and customize WordPress themes...",
      description: "View Job Description",
    },
    {
      title: "Angular Development Internship",
      skills: [
        "Angular",
        "TypeScript",
        "HTML",
        "CSS",
        "JavaScript",
        "REST APIs",
        "Git",
        "Webpack",
      ],
      responsibilities: "Develop and maintain Angular-based web...",
      description: "View Job Description",
    },
    {
      title: "Data Structure Internship",
      skills: [
        "Data Structures",
        "Algorithms",
        "Java/Python/C++",
        "Problem Solving",
        "Git",
      ],
      responsibilities: "Design and implement efficient data...",
      description: "View Job Description",
    },
    {
      title: "C/C++ Development Internship",
      skills: [
        "C/C++",
        "Data Structures",
        "Algorithms",
        "Problem Solving",
        "Git",
        "Debugging Tools",
      ],
      responsibilities: "Develop and maintain applications using...",
      description: "View Job Description",
    },
    {
      title: "Frontend Developer Internship",
      skills: ["React", "Tailwind CSS", "HTML", "CSS", "JavaScript", "Git"],
      responsibilities: "Assist in designing and developing...",
      description: "View Job Description",
    },
    {
      title: "Backend Developer Internship",
      skills: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "SQL/NoSQL databases",
        "Git",
        "Docker",
      ],
      responsibilities: "Assist in designing and developing...",
      description: "View Job Description",
    },
    {
      title: "React js Developer Internship",
      skills: ["React.js", "JavaScript", "Redux", "HTML", "CSS", "Git"],
      responsibilities: "Assist in developing front-end applications...",
      description: "View Job Description",
    },
    {
      title: "Python Development Internship",
      skills: [
        "Python",
        "Django/Flask",
        "REST APIs",
        "SQL/NoSQL databases",
        "Git",
        "Docker",
      ],
      responsibilities: "Assist in developing and maintaining...",
      description: "View Job Description",
    },
    {
      title: "MERN Stack Developer Internship",
      skills: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "JavaScript",
        "REST APIs",
        "Git",
        "Docker",
      ],
      responsibilities: "Assist in designing and developing...",
      description: "View Job Description",
    },
    {
      title: "Spring Boot Development Internship",
      skills: [
        "Java",
        "Spring Boot",
        "REST APIs",
        "SQL/NoSQL databases",
        "Git",
        "Maven",
        "Docker",
      ],
      responsibilities: "Assist in designing and developing...",
      description: "View Job Description",
    },
    {
      title: "Artificial Intelligence Internship",
      skills: [
        "Machine Learning",
        "Python",
        "TensorFlow/PyTorch",
        "Data Analysis",
        "Git",
      ],
      responsibilities: "Assist in developing and implementing...",
      description: "View Job Description",
    },
    {
      title: "Data Science and Machine Learning Internship",
      skills: [
        "Python/R",
        "Data Analysis",
        "Machine Learning",
        "SQL",
        "Pandas",
        "Scikit-learn",
        "Git",
      ],
      responsibilities: "Analyze and interpret complex data...",
      description: "View Job Description",
    },
    {
      title: "Big Data Internship",
      skills: [
        "Hadoop",
        "Spark",
        "Python/Java",
        "SQL",
        "Data Analysis",
        "ETL",
        "Git",
      ],
      responsibilities: "Assist in collecting, processing, and...",
      description: "View Job Description",
    },
    {
      title: "Cloud Computing Internship",
      skills: [
        "AWS/Azure/GCP",
        "Cloud Architecture",
        "Docker",
        "Kubernetes",
        "DevOps",
        "Git",
      ],
      responsibilities: "Assist in deploying and managing...",
      description: "View Job Description",
    },
    {
      title: "Software Development Internship",
      skills: [
        "Java/Python/C++",
        "Software Development",
        "SQL/NoSQL",
        "Git",
        "Agile Methodologies",
      ],
      responsibilities: "Assist in the design, development,...",
      description: "View Job Description",
    },
    {
      title: "Technical Program Management Internship",
      skills: [
        "Project Management",
        "Agile Methodologies",
        "Communication",
        "Jira",
        "Confluence",
      ],
      responsibilities: "Assist in project planning, scheduling,...",
      description: "View Job Description",
    },
    {
      title: "DevOps Engineering Internship",
      skills: [
        "Linux",
        "Docker",
        "Kubernetes",
        "Jenkins",
        "AWS/Azure/GCP",
        "Scripting",
        "Git",
      ],
      responsibilities: "Assist in building and maintaining...",
      description: "View Job Description",
    },
    {
      title: "Data Analysis Internship",
      skills: [
        "Python",
        "R",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Tableau",
        "Data Analysis",
        "Data Visualization",
      ],
      responsibilities: "Assist in collecting, cleaning, and...",
      description: "View Job Description",
    },
    {
      title: "Angular Development Internship",
      skills: [
        "Angular",
        "TypeScript",
        "HTML",
        "CSS",
        "JavaScript",
        "REST APIs",
        "Git",
        "Webpack",
      ],
      responsibilities: "Develop and maintain Angular-based web...",
      description: "View Job Description",
    },
    {
      title: "Data Structure Internship",
      skills: [
        "Data Structures",
        "Algorithms",
        "Java/Python/C++",
        "Problem Solving",
        "Git",
      ],
      responsibilities: "Design and implement efficient data...",
      description: "View Job Description",
    },
    {
      title: "C/C++ Development Internship",
      skills: [
        "C/C++",
        "Data Structures",
        "Algorithms",
        "Problem Solving",
        "Git",
        "Debugging Tools",
      ],
      responsibilities: "Develop and maintain applications using...",
      description: "View Job Description",
    },
  ]);

 

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

  const filteredJobs = jobs.filter(
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
  console.log(jobs.title)
    setLocationDropdownOpen((prev)=>!prev);
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
                {jobs.map((job, index) => {
                return(
                <li key={{index}}>
                <label>
                <input
                  type="checkbox"
                  checked={selectedFilters.includes(job.title)}
                  onChange={() => handleCheckboxChange(job.title)}
                />{" "}
                {job.title}
                </label>
              </li>
              )
              })
              }
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
                <button className="description">{job.description}</button></td>
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
