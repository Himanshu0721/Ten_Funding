import React, { useState, useRef, useEffect } from "react";
import "./Home.css"; // Ensure the styles match your design

const DatasetDropdown = ({ selectedDataset, onDatasetChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // List of datasets
  const datasets = [
    { label: "Angels India", value: "angelsIndiaData" },
    { label: "Angels USA", value: "angelsUSAData" },
    { label: "VC India", value: "vcIndiaData" },
    { label: "VC USA", value: "vcUSAData" },
  ];

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleDatasetChange = (value) => {
    onDatasetChange(value); // Notify parent component of the change
    setIsOpen(false); // Close the dropdown
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

  // Get the label of the currently selected dataset
  const selectedLabel =
    datasets.find((dataset) => dataset.value === selectedDataset)?.label || "Funding Network";

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <button className="dropdown-button dataset-dropdown-button" onClick={toggleDropdown}>
        {selectedLabel}
      </button>
      {isOpen && (
        <div className="dropdown-menu dataset-dropdown-menu">
          {datasets.map((dataset) => (
            <div key={dataset.value} className="dropdown-item">
              <button
                className="dropdown-option"
                onClick={() => handleDatasetChange(dataset.value)}
              >
                {dataset.label}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DatasetDropdown;
