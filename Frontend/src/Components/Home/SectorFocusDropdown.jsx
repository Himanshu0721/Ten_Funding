import React, { useState, useRef, useEffect } from "react";
import "./Home.css"; // Import the CSS file

const SectorFocusDropdown = ({ selectedSectors, onSectorChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // Ref for dropdown container

  const sectors = [
    "Sector Agnostic",
    "Media Production",
    "Social Impact",
    "B2B Commerce",
    "Consumer",
    "Logistics",
    "Mobility",
    "DeepTech",
    "Fintech",
    "Edtech",
    "AI/ML",
    "AR/VR",
    "Agritech/Food",
    "Biotech/Life sciences",
    "Climate/Sustainability",
    "Deep Tech/Hard Science",
    "Education",
    "Enterprise",
    "Media & Entertainment",
    "Gaming",
    "Government/Defence",
    "Health and Wellness",
    "Healthcare/Medtech",
    "Industrial/IoT/ Robotics",
    "Prop Tech/Real Estate",
    "SaaS/DevOps/Marketplace",
    "Supply Chain/Logistics",
    "Travel/Hospitality",
  ];

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleCheckboxChange = (sector) => {
    const newSelectedSectors = selectedSectors.includes(sector)
      ? selectedSectors.filter((s) => s !== sector)
      : [...selectedSectors, sector];

    onSectorChange(newSelectedSectors); // Pass updated sectors to the parent
  };

  // Close the dropdown if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <button className="dropdown-button" onClick={toggleDropdown}>
        Sector Focus
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          {sectors.map((sector) => (
            <div key={sector} className="dropdown-item">
              <label>
                <input
                  type="checkbox"
                  checked={selectedSectors.includes(sector)}
                  onChange={() => handleCheckboxChange(sector)}
                />
                {` ${sector}`}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


export default SectorFocusDropdown;
