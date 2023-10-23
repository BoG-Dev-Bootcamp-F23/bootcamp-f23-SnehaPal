import React from 'react';
import stationData from '../server/stationData';
import './Navbar.css'; // Import your CSS file

export default function Navbar({ color }) {
  const stations = stationData[color.toLowerCase()];

  return (
    <div className="navbar-container">
      <h3 className="heading">Select your starting station</h3>
      <div className="station-list">
        {stations.map((station, index) => (
          <div className="stationName" key={index}>
            <span>{station}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
