import React from 'react';
import stationData from '../server/stationData';
import './Navbar.css';

export default function Navbar({ color, selectedStations, onStationClick }) {
  const stations = stationData[color.toLowerCase()];

  return (
    <div className="navbar-container">
      <h3 className="heading">Select your starting station</h3>
      <div className="station-list">
        {stations.map((station, index) => (
          <div
            className={`stationName ${selectedStations.includes(station) ? 'selected' : ''}`}
            key={index}
            onClick={() => onStationClick(station)}
          >
            <span>{station}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
