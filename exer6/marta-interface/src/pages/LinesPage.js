import React, { useState, useEffect } from 'react';
import stationData from '../server/stationData';
import './LinesPage.css';
import Navbar from '../components/Navbar';
import Colorbar from '../components/Colorbar'
import TrainList from '../components/TrainList';

export default function LinesPage() {
  const [currColor, setCurrColor] = useState('GOLD');
  const [selectedStations, setSelectedStations] = useState([]);

  const handleColorClick = (color) => {
    setCurrColor(color);
  };

  useEffect(() => {
    console.log(selectedStations);
  }, [selectedStations]);

  const handleStationClick = (station) => {
    setSelectedStations((prevSelectedStations) => {
      if (prevSelectedStations.includes(station)) {
        return prevSelectedStations.filter((selected) => selected !== station);
      } else {
        return [...prevSelectedStations, station];
      }
    });
  };

  

  return (
    <div>
      <Colorbar 
        onColorClick={handleColorClick}
      />
      <h2>{currColor}</h2>
      <div className="body">
        <Navbar
          color={currColor}
          onStationClick={handleStationClick}
          selectedStations={selectedStations}
        />
        <div>
          <div className="martaButtons">
            <button className="martaButton">Arriving</button>
            <button className="martaButton">Scheduled</button>
            <button className="martaButton">
              {currColor === 'RED' || currColor === 'GOLD' ? 'Northbound' : 'Eastbound'}
            </button>
            <button className="martaButton">
              {currColor === 'RED' || currColor === 'GOLD' ? 'Southbound' : 'Westbound'}
            </button>
          </div>
          <TrainList color={currColor} selectedStations={selectedStations} />
        </div>
      </div>
    </div>
  );
}
