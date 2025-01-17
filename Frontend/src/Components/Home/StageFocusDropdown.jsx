import React, { useState, useRef, useEffect } from "react";
import "./Home.css"; // Import the CSS file

const StageFocusDropdown = ({selectedStages, onStageChange}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // Ref for dropdown container

  const stages = [
    "Pre-Seed",
    "Seed",
    "Series A",
    "Series B",
    "Series C",
    "Growth",
    "Debt",
    "Other"
  ];

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleCheckboxChange = (stage) => {
    const newSelectedStages = selectedStages.includes(stage)
      ? selectedStages.filter((s) => s !== stage)
      : [...selectedStages, stage];

    onStageChange(newSelectedStages); // Pass updated stages to the parent
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
        Stage Focus
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          {stages.map((stage) => (
            <div key={stage} className="dropdown-item">
              <label>
                <input
                  type="checkbox"
                  checked={selectedStages.includes(stage)}
                  onChange={() => handleCheckboxChange(stage)}
                />
                {` ${stage}`}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StageFocusDropdown;
