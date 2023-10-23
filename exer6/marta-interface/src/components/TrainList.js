import React from 'react';
import Train from './Train';

export default function TrainList({ color, selectedStations, arrivalData }) {
  const filteredTrains = arrivalData.filter((train) => {
    return train.LINE === color;
  });

  return (
    <div>
      {filteredTrains.map((train, index) => (
        <Train key={index} trainData={train} />
      ))}
    </div>
  );
}
