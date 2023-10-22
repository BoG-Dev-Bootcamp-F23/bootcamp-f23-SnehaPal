import React from 'react';
import "./Train.css"

export default function Train({ trainData }) {
  const isOnTime = trainData.DELAY === "T0S";
  const stationName = trainData.STATION.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
  const lineColor = trainData.LINE.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());

  return (
    <div className="train">
        <div className='left'>
            <h1>M</h1>
            <div className='trainInfo'>
                <div className='stationInfo'>
                    <p>Midtown Station - {stationName}</p>     
                </div>
                <div className='otherInfo'>
                    <div className='lineColor' style={{ backgroundColor: trainData.LINE.toLowerCase() }}>{lineColor}</div>
                    <p className={isOnTime ? 'onTime' : 'delayed'}>{isOnTime ? 'On time' : 'Delayed'}</p>
                </div>
            </div>
        </div>
        <div className='right'>
            <p>{trainData.WAITING_TIME}</p>
        </div>
    </div>
  );
}
