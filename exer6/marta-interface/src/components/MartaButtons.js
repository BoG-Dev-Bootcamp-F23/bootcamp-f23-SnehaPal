import React from 'react';
import './MartaButtons.css';

export default function MartaButtons({ color, onArrivingClick, onScheduledClick, onNorthClick, onSouthClick, 
    onEastClick, onWestClick, showArrivingTrains, showScheduledTrains, isNorthboundActive, isSouthboundActive, isEastboundActive, isWestboundActive }) {

  const isNorthSouth = color === 'RED' || color === 'GOLD';

  return (
    <div className="martaButtons">
      <button
        className={`martaButton ${showArrivingTrains ? 'active' : ''}`}
        onClick={onArrivingClick}
      >
        Arriving
      </button>
      <button
        className={`martaButton ${showScheduledTrains ? 'active' : ''}`}
        onClick={onScheduledClick}
      >
        Scheduled
      </button>

      {isNorthSouth ? (
        <>
          <button
            className={`martaButton ${isNorthboundActive ? 'active' : ''}`}
            onClick={onNorthClick}
          >
            Northbound
          </button>
          <button
            className={`martaButton ${isSouthboundActive ? 'active' : ''}`}
            onClick={onSouthClick}
          >
            Southbound
          </button>
        </>
      ) : (
        <>
            <button
            className={`martaButton ${isEastboundActive ? 'active' : ''}`}
            onClick={onEastClick}
          >
            Eastbound
          </button>
          <button
            className={`martaButton ${isWestboundActive ? 'active' : ''}`}
            onClick={onWestClick}
          >
            Westbound
          </button>
        </>
      )}
    </div>
  );
}
