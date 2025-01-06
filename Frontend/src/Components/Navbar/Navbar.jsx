import { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";
import { RiGraduationCapFill } from "react-icons/ri";
import { MdStackedBarChart } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { RiUserCommunityLine } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [issUpArrow, setIssUpArrow] = useState(false);
  const [isvUpArrow, setIsvUpArrow] = useState(false);
  const [iscUpArrow, setIscUpArrow] = useState(false);
  const [isStartupsOpen, setIsStartupsOpen] = useState(false);
  const [isVCOpen, setIsVCOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleFundraisingOS = () => {
    navigate("/fundraising-os");
  };

  const handleNextPlay = () => {
    navigate("/nextplay");
  };

  const handleSpotlight = () => {
    navigate("/spotlight");
  };

 const handleLaunchPad = () => {
   navigate("/launchpad");
  };

  const handleVentureOS = () => {
    navigate("/venture-os");
  };

  const handleVcStack = () => {
    navigate("/vc-stack");
  };

  const handleAboutUS = () => {
    navigate("/about");
  };

  const handleCommunity = () => {
    window.open(
      "https://www.linkedin.com/company/the-entrepreneurship-network/posts/?feedView=all",
      "_blank"
    );
  };

  const handleResize = () => {
    if (window.innerWidth >= 900) {
      setIsMenuOpen(false); // Close menu
      setIsStartupsOpen(false); // Close dropdowns
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //       setIsvUpArrow(false);
  //       setIsVCOpen(false);
  //       setIscUpArrow(false);
  //       setIsCompanyOpen(false);
  //       setIssUpArrow(false);
  //       setIsStartupsOpen(false);
  //       setIsMenuOpen(false);
  //        // Close the dropdown
  //     }
  //   };

  //   document.addEventListener("click", handleClickOutside);

  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click target is not inside the dropdown
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMenuOpen(false); // Close the menu
      }
    };

    document.addEventListener("click", handleClickOutside);

    // Cleanup to avoid memory leaks
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const alldropdown = () => {
    setIsvUpArrow(false);
    setIsVCOpen(false);
    setIscUpArrow(false);
    setIsCompanyOpen(false);
    setIssUpArrow(false);
    setIsStartupsOpen(false);
  };
  const startupMouseEnter = () => {
    setIssUpArrow(true);
    setIsStartupsOpen(true);
    setIsvUpArrow(false);
    setIsVCOpen(false);
    setIscUpArrow(false);
    setIsCompanyOpen(false);
  };
  const startupMouseLeave = () => {
    setIssUpArrow(false);
    setIsStartupsOpen(false);
  };

  const vchandleMouseEnter = () => {
    setIsvUpArrow(true);
    setIsVCOpen(true);
    setIscUpArrow(false);
    setIsCompanyOpen(false);
    setIssUpArrow(false);
    setIsStartupsOpen(false);
  };
  const vchandleMouseLeave = () => {
    setIsvUpArrow(false);
    setIsVCOpen(false);
  };
  const companyMouseEnter = () => {
    setIscUpArrow(true);
    setIsCompanyOpen(true);
    setIssUpArrow(false);
    setIsStartupsOpen(false);
    setIsvUpArrow(false);
    setIsVCOpen(false);
  };

  const companyMouseLeave = () => {
    setIscUpArrow(false);
    setIsCompanyOpen(false);
  };
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/66373de2f26ab797c8bc42b5_IndianVCs%20Full%20Logo.svg"
          alt="Logo"
        />
      </div>
      <button
        ref={dropdownRef}
        className="menu-toggle"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <IoMenu />
      </button>
      <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <NavLink
            to="/"
            onMouseEnter={alldropdown}
            onClick={(e) => e.stopPropagation()}
          >
            Raise
          </NavLink>
        </li>
        <li>
          <a
            href="#startup"
            onMouseEnter={startupMouseEnter}
            onClick={(e) => e.stopPropagation()}
            style={{
              cursor: "pointer",
              fontsize: "20px",
            }}
            aria-label="Toggle Arrow"
          >
            For Startups{" "}
            {issUpArrow ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </a>

          {isStartupsOpen && (
            <div
              className="dropdown-nav"
              onMouseLeave={startupMouseLeave}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="dropdown-nav-item" onClick={handleFundraisingOS}>
                <h3>Fundraising OS</h3>
                <p>Helps you easily manage your fundraising process</p>
                <div className="dropdown-nav-icon">
                  <FaDatabase />
                </div>
              </div>
              <div className="dropdown-nav-item" onClick={handleNextPlay}>
                <h3>Next Play</h3>
                <p>Exclusive community for top-notch founders and operators</p>
                <div className="dropdown-nav-icon">
                  <FaPlay />
                </div>
              </div>
              <div className="dropdown-nav-item" onClick={handleSpotlight}>
                <h3>Spotlight</h3>
                <p>For top talents to meet the best founders</p>
                <div className="dropdown-nav-icon">
                  <IoPeople />
                </div>
              </div>
            </div>
          )}
        </li>

        <li>
          <a
            href="#vchandle"
            onMouseEnter={vchandleMouseEnter}
            onClick={(e) => e.stopPropagation()}
            style={{
              cursor: "pointer",
              fontsize: "20px",
            }}
            aria-label="Toggle Arrow"
          >
            For VCs{" "}
            {isvUpArrow ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </a>
          {isVCOpen && (
            <div
              className="dropdown-nav"
              onMouseLeave={vchandleMouseLeave}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="dropdown-nav-item3" onClick={handleLaunchPad}>
                <h3>LaunchPad</h3>
                <p>Find VC jobs</p>
                <div className="dropdown-nav-icon">
                  <RiGraduationCapFill />
                </div>
              </div>
              <div className="dropdown-nav-item3" onClick={handleVentureOS}>
                <h3>Venture OS</h3>
                <p>Manage a VC fund in one place</p>
                <div className="dropdown-nav-icon">
                  <FaPlay />
                </div>
              </div>
              <div className="dropdown-nav-item3" onClick={handleVcStack}>
                <h3>VC Stack</h3>
                <p>Find your VC software stack</p>
                <div className="dropdown-nav-icon">
                  <MdStackedBarChart />
                </div>
              </div>
            </div>
          )}
        </li>

        <li>
          <a
            href="#company"
            onMouseEnter={companyMouseEnter}
            onClick={(e) => e.stopPropagation()}
            style={{
              cursor: "pointer",
              fontsize: "20px",
            }}
            aria-label="Toggle Arrow"
          >
            Company{" "}
            {iscUpArrow ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </a>
          {isCompanyOpen && (
            <div
              className="dropdown-nav"
              onMouseLeave={companyMouseLeave}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="dropdown-nav-item2" onClick={handleAboutUS}>
                <h3>About US</h3>
                <p>Learn about our people</p>
                <div className="dropdown-nav-icon">
                  <IoMdHome />
                </div>
              </div>
              <div className="dropdown-nav-item2" onClick={handleCommunity}>
                <h3>Community</h3>
                <p>Join our Community</p>
                <div className="dropdown-nav-icon">
                  <RiUserCommunityLine />
                </div>
              </div>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
