import React, { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import StageFocusDropdown from "./StageFocusDropdown";
import SectorFocusDropdown from "./SectorFocusDropdown";
import DatasetDropdown from "./DatasetDropdown.jsx";
import vcIndiaData from "../../assets/data/vcIndia.js";
import vcUSAData from "../../assets/data/vcUsa.js";
import angelsIndiaData from "../../assets/data/angelsIndia.js";
import angelsUSAData from "../../assets/data/angelsUSA.js";

function Home() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/registration-form");
  };

  const [visibleCount, setVisibleCount] = useState(10);
  const [selectedStages, setSelectedStages] = useState([]);
  const [selectedSectors, setSelectedSectors] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [filteredInvestors, setFilteredInvestors] = useState(angelsIndiaData);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDataset, setSelectedDataset] = useState(angelsIndiaData);

  const handleClick = (item) => {
    setSelectedItem(item);
  };
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  // Function to apply all filters
  const filterInvestors = () => {
    let filtered = selectedDataset;

    // Filter by selected stages if any are selected
    if (selectedStages.length > 0) {
      filtered = filtered.filter((investor) =>
        investor.stages.some((stage) => selectedStages.includes(stage))
      );
    }

    // Filter by selected sector if one is selected
    if (selectedSectors.length > 0) {
      filtered = filtered.filter((investor) =>
        investor.sectors.some((sector) => selectedSectors.includes(sector))
      );
    }

    // Filter by search query if present
    if (searchQuery.trim()) {
      filtered = filtered.filter((investor) =>
        investor.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredInvestors(filtered);
  };

  // Update filters whenever any filter state changes
  useEffect(() => {
    filterInvestors();
  }, [selectedStages, selectedSectors, searchQuery, selectedDataset]);

  const handleDatasetChange = (newDataset) => {
    if (newDataset === "angelsIndiaData") setSelectedDataset(angelsIndiaData);
    else if (newDataset === "vcIndiaData") setSelectedDataset(vcIndiaData);
    else if (newDataset === "vcUSAData") setSelectedDataset(vcUSAData);
    else if (newDataset === "angelsUSAData") setSelectedDataset(angelsUSAData);
  };

  const handleStageChange = (newSelectedStages) => {
    setSelectedStages(newSelectedStages);
  };

  const handleSectorChange = (newSelectedSectors) => {
    setSelectedSectors(newSelectedSectors);
  };

  // Function to remove a tag (stage or sector)
  const handleRemoveTag = (type, value) => {
    if (type === "stage") {
      setSelectedStages(selectedStages.filter((stage) => stage !== value));
    } else if (type === "sector") {
      setSelectedSectors(selectedSectors.filter((sector) => sector !== value));
    }
  };

  return (
    <div className="home-container">
      <div className="home-header">
        <h1>One place to find the right investor for you.</h1>
        <hr />
        <div className="home-inner-div">
          <h2>Check out our database of active investors.</h2>
          <button onClick={handleButtonClick}>Join The Database</button>
        </div>
      </div>
      <br />
      <hr className="hr-1" />
      {/* Dropdown Menus & Search*/}
      <div className="filter-section">
        <div>
          <DatasetDropdown
            selectedDataset={selectedDataset}
            onDatasetChange={handleDatasetChange}
          />
        </div>
        <div>
          <StageFocusDropdown
            selectedStages={selectedStages}
            onStageChange={handleStageChange}
          />
        </div>
        <div>
          <SectorFocusDropdown
            selectedSectors={selectedSectors}
            onSectorChange={handleSectorChange}
          />
        </div>

        <div className="Search">
          <input
            placeholder="Search"
            required
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          ></input>
          <img
            src="https://cdn.prod.website-files.com/66230c5ee8288ee065356a3e/663a1195151cfe142a130080_search%20(1).svg"
            alt=""
            className="serch-icon"
          ></img>
        </div>
      </div>

      {/* Showcasing Selected Filter (Selected Tages) */}
      <div className="selected-filters">
        {selectedStages.map((stage, index) => (
          <div className="tag" key={`stage-${index}`}>
            {stage}
            <span
              className="remove-tag"
              onClick={() => handleRemoveTag("stage", stage)}
            >
              X
            </span>
          </div>
        ))}
        {selectedSectors.map((sector, index) => (
          <div className="tag" key={`sector-${index}`}>
            {sector}
            <span
              className="remove-tag"
              onClick={() => handleRemoveTag("sector", sector)}
            >
              X
            </span>
          </div>
        ))}
      </div>

      <div className="home-sec">
        <div className="home-sec-header">
          <h6 className="home-sec-name">NAME</h6>
          <h6>STAGE FOCUS</h6>
          <h6>SECTOR FOCUS</h6>
          <h6 className="lst">TICKET SIZE</h6>
        </div>
        <br />
        {filteredInvestors.slice(0, visibleCount).map((investor, index) => (
          <div className="home-card" key={index}>
            <div className="home-img">
              <img
                src={investor.logo}
                loading="lazy"
                alt={`${investor.title} logo`}
                className="db-img"
              />
              <div>
                <p>
                  {investor.title.split(" ").length > 3
                    ? `${investor.title.split(" ").slice(0, 2).join(" ")} ...`
                    : investor.title}
                </p>
              </div>
            </div>
            <div className="btn-1">
              {investor?.stages?.map((stage, stageIndex) => (
                <a href="" target="" key={stageIndex}>
                  <button id="button-1">{stage}</button>
                </a>
              )) || <p>No stages available</p>}
            </div>
            <div className="btn-2">
              <a href="" target="">
                <button id="button-2">{investor.sectors}</button>
              </a>
            </div>
            <p>{investor.ticketSize}</p>
          </div>
        ))}
        {visibleCount < filteredInvestors.length && (
          <button className="load-more-btn" onClick={handleLoadMore}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
}

export default Home;
