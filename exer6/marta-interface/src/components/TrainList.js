import React from 'react';
import Train from './Train';
import arrivals from '../server/trainData';

export default function TrainList({ color, selectedStations }) {
  const filteredTrains = arrivals.RailArrivals.filter((train) => {
    return train.LINE === color && (selectedStations.length === 0 || selectedStations.includes(train.STATION));
  });

  return (
    <div>
      {filteredTrains.map((train, index) => (
        <Train key={index} trainData={train} />
      ))}
    </div>
  );
}
