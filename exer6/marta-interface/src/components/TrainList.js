import React from 'react';
import Train from './Train';

export default function TrainList({ color, selectedStations, arrivalData, showArrivingTrains, showScheduledTrains, 
  isNorthboundActive, isSouthboundActive, isEastboundActive, isWestboundActive }) {
  const filteredTrains = arrivalData.filter((train) => {
    const isArriving = train.WAITING_TIME === "Arriving";
    const isNorthbound = train.DIRECTION === "N";
    const isSouthbound = train.DIRECTION === "S";
    const isEastWest = color === 'GREEN' || color === 'BLUE';
    const isEastbound = train.DIRECTION === "E";
    const isWestbound = train.DIRECTION === "W";

    return (
      train.LINE === color &&
      ((showArrivingTrains && isArriving) || (showScheduledTrains && !isArriving)) &&
      (isEastWest
        ? (isEastbound && isEastboundActive) || (isWestbound && isWestboundActive)
        : (isNorthbound && isNorthboundActive) || (isSouthbound && isSouthboundActive)
      )
    );
  });

  return (
    <div>
      {filteredTrains.map((train, index) => (
        <Train key={index} trainData={train} />
      ))}
    </div>
  );
}
