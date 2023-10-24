import React, { useState } from 'react';
import './MartaButtons.css';

export default function MartaButtons({ color, onArrivingClick, onScheduledClick, onNorthClick, onSouthClick, onEastClick, onWestClick }) {
  const [isArrivingActive, setIsArrivingActive] = useState(true);
  const [isScheduledActive, setIsScheduledActive] = useState(true);

  const [isNorthboundActive, setIsNorthboundActive] = useState(true); 
  const [isSouthboundActive, setIsSouthboundActive] = useState(true); 
  const [isEastboundActive, setIsEastboundActive] = useState(true); 
  const [isWestboundActive, setIsWestboundActive] = useState(true); 

  const isNorthSouth = color === 'RED' || color === 'GOLD';

  const handleArrivingClick = () => {
    setIsArrivingActive(!isArrivingActive);
    onArrivingClick();
  };

  const handleScheduledClick = () => {
    setIsScheduledActive(!isScheduledActive);
    onScheduledClick();
  };

  const handleNorthClick = () => {
    setIsNorthboundActive(!isNorthboundActive);
    onNorthClick();
  };

  const handleSouthClick = () => {
    setIsSouthboundActive(!isSouthboundActive);
    onSouthClick();
  };

  const handleEastClick = () => {
    setIsEastboundActive(!isEastboundActive);
    onEastClick();
  };

  const handleWestClick = () => {
    setIsWestboundActive(!isWestboundActive);
    onWestClick();
  };


  return (
    <div className="martaButtons">
      <button
        className={`martaButton ${isArrivingActive ? 'active' : ''}`}
        onClick={handleArrivingClick}
      >
        Arriving
      </button>
      <button
        className={`martaButton ${isScheduledActive ? 'active' : ''}`}
        onClick={handleScheduledClick}
      >
        Scheduled
      </button>

      {isNorthSouth ? (
        <>
          <button
            className={`martaButton ${isNorthboundActive ? 'active' : ''}`}
            onClick={handleNorthClick}
          >
            Northbound
          </button>
          <button
            className={`martaButton ${isSouthboundActive ? 'active' : ''}`}
            onClick={handleSouthClick}
          >
            Southbound
          </button>
        </>
      ) : (
        <>
            <button
            className={`martaButton ${isEastboundActive ? 'active' : ''}`}
            onClick={handleEastClick}
          >
            Eastbound
          </button>
          <button
            className={`martaButton ${isWestboundActive ? 'active' : ''}`}
            onClick={handleWestClick}
          >
            Westbound
          </button>
        </>
      )}
    </div>
  );
}
