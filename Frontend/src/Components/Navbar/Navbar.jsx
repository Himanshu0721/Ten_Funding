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
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <svg
            preserveAspectRatio="xMidYMid meet"
            data-bbox="0.36 0.279 243.208 201.268"
            viewBox="0 0 243.913 201.792"
            height="201.792"
            width="243.913"
            xmlns="http://www.w3.org/2000/svg"
            data-type="ugc"
            role="presentation"
            aria-hidden="true"
            onClick={handleAboutUS}
          >
            <g>
              <g opacity=".86">
                <path
                  strokeWidth=".5"
                  strokeMiterlimit="10"
                  stroke="#e9b00d"
                  fill="#e9b00d"
                  d="M139.358 159.816s5.42-26.187 27.014-38.576a13.973 13.973 0 0 0 4.065-3.52l23.864-30.639a11.721 11.721 0 0 1 12.02-4.417c4 1 7.321 4.083 4.681 12.319-5.28 16.6-22.368 36.711-22.368 36.711s.51 6.036 4.769 1.513 18.549-27.665 18.549-27.665l7.515-14.255a11.879 11.879 0 0 0 1.32-4.417l2.534-26.574 2.816-17.282a9.292 9.292 0 0 1 2.851-5.4c3.52-3.238 10.066-7.039 13.445 5.086 3.8 13.6-2.921 53.87-5.808 69.691a29.2 29.2 0 0 1-5.086 11.862c-8.06 11.087-27.208 36.8-42.659 52.444v21.858a2.992 2.992 0 0 1-2.992 2.992h-42.8a1.531 1.531 0 0 1-1.549-1.426z"
                ></path>
                <path
                  strokeWidth=".5"
                  strokeMiterlimit="10"
                  stroke="#e9b00d"
                  fill="#e9b00d"
                  d="M214.522 76.345s2.517-29.671 4.277-34.951-10.804 5.28-9.556 32.188z"
                ></path>
                <path
                  strokeWidth=".5"
                  strokeMiterlimit="10"
                  stroke="#e9b00d"
                  fill="#e9b00d"
                  d="M202.713 73.071s3.114-18.936 4.523-21.611-7.8-2.27-10.049 21.611z"
                ></path>
                <path
                  strokeWidth=".5"
                  strokeMiterlimit="10"
                  stroke="#e9b00d"
                  fill="#e9b00d"
                  d="M104.568 159.816s-5.438-26.187-27.032-38.576a13.9 13.9 0 0 1-4.048-3.52L49.625 86.991a11.738 11.738 0 0 0-12.038-4.417c-3.977 1-7.321 4.083-4.681 12.319 5.28 16.6 22.386 36.711 22.386 36.711s-.51 6.089-4.787 1.549-18.532-27.647-18.532-27.647l-7.519-14.255a11.879 11.879 0 0 1-1.32-4.417L20.587 60.26l-2.8-17.282a9.38 9.38 0 0 0-2.851-5.4c-3.52-3.238-10.066-7.039-13.445 5.086-3.784 13.6 2.9 53.87 5.808 69.691a28.967 28.967 0 0 0 5.086 11.862c8.06 11.087 27.208 36.8 42.642 52.444v21.858a3.009 3.009 0 0 0 3.009 2.992h42.783a1.531 1.531 0 0 0 1.566-1.426z"
                ></path>
                <path
                  strokeWidth=".5"
                  strokeMiterlimit="10"
                  stroke="#e9b00d"
                  fill="#e9b00d"
                  d="M29.387 76.345s-2.52-29.671-4.277-34.951 10.823 5.28 9.556 32.188z"
                ></path>
                <path
                  strokeWidth=".5"
                  strokeMiterlimit="10"
                  stroke="#e9b00d"
                  fill="#e9b00d"
                  d="M41.213 73.071S38.186 54.135 36.69 51.46s7.78-2.27 10.049 21.611z"
                ></path>
                <path
                  strokeWidth=".5"
                  strokeMiterlimit="10"
                  stroke="#e9b00d"
                  fill="#e9b00d"
                  d="M131.695 13.481l10.313 10.93c8.623-9.169 22-9.609 29.407-2.745a18.567 18.567 0 0 1 3.52 22.368c-4.8 8.166-16.367 11.4-26.011 6.16a196.508 196.508 0 0 1-28.915-27.278 110.45 110.45 0 0 0-18.478-17.477c-2.165-1.619-3.96-2.165-8.923-3.766-8.5-2.728-19.587-.9-28.281 5.28a34.757 34.757 0 0 0-13.586 36.711 34.687 34.687 0 0 0 26.521 24.638c11.07 2.217 23.723-1.021 30.939-9.063a28.172 28.172 0 0 0 1.883-2.393L99.257 45.529c-.422.581-6.776 8.9-16.842 8.166a18.954 18.954 0 0 1-17.331-17.722 18.831 18.831 0 0 1 13.2-18.6 19.851 19.851 0 0 1 20.1 5.913c5.192 5.385 8.553 7.884 23.142 23 5.86 6.089 5.614 5.79 6.916 7.039 5.438 5.28 10.348 9.943 16.719 12.565 12.618 5.28 25.272-.141 26.644-.757a34.969 34.969 0 0 0 17.352-16.6c.6-1.267 7.48-16.3-.757-31.044A34.7 34.7 0 0 0 151.811.916a35.391 35.391 0 0 0-20.116 12.565z"
                ></path>
              </g>
            </g>
          </svg>
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
                <div
                  className="dropdown-nav-item"
                  onClick={handleFundraisingOS}
                >
                  <h3>Fundraising OS</h3>
                  <p>Helps you easily manage your fundraising process</p>
                  <div className="dropdown-nav-icon">
                    <FaDatabase />
                  </div>
                </div>
                <div className="dropdown-nav-item" onClick={handleNextPlay}>
                  <h3>Next Play</h3>
                  <p>
                    Exclusive community for top-notch founders and operators
                  </p>
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
      <div className="navbar-space"></div>
    </>
  );
};

export default Navbar;
