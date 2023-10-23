import React, { useState, useEffect } from 'react';
import './LinesPage.css';
import Navbar from '../components/Navbar';
import Colorbar from '../components/Colorbar';
import TrainList from '../components/TrainList';
import MartaButtons from '../components/MartaButtons';

export default function LinesPage() {
  const [currColor, setCurrColor] = useState('GOLD');
  const [selectedStations, setSelectedStations] = useState([]);
  const [arrivalData, setArrivalData] = useState([]);
  const [stationData, setStationData] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize loading state to true

  useEffect(() => {
    const arrivalUrl = `http://13.59.196.129:3001/arrivals/${currColor.toLowerCase()}`;
    fetch(arrivalUrl)
      .then((response) => response.json())
      .then((data) => {
        setArrivalData(data);
        setLoading(false); 
      });

    const stationUrl = `http://13.59.196.129:3001/stations/${currColor.toLowerCase()}`;
    fetch(stationUrl)
      .then((response) => response.json())
      .then((data) => setStationData(data));
  }, [currColor, selectedStations]);

  const handleColorClick = (color) => {
    setCurrColor(color);
    setLoading(true); 
  };

  const handleStationClick = (station) => {
    setSelectedStations((prevSelectedStations) => {
      if (prevSelectedStations.includes(station)) {
        return prevSelectedStations.filter((selected) => selected !== station);
      } else {
        return [...prevSelectedStations, station];
      }
    });
    setLoading(true); 
  };

  return (
    <div>
      <Colorbar onColorClick={handleColorClick} />
      <h2>{currColor}</h2>
      <div className="body">
        <Navbar
          color={currColor}
          stationData={stationData}
          onStationClick={handleStationClick}
          selectedStations={selectedStations}
        />
        {loading ? (
          <div className="loading-screen">
            Loading...
          </div>
        ) : (
          <div>
            <MartaButtons color={currColor} />
            <TrainList color={currColor} selectedStations={selectedStations} arrivalData={arrivalData} />
          </div>
        )}
      </div>
    </div>
  );
}
