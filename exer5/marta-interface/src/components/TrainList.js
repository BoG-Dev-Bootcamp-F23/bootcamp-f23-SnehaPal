import React from 'react';
import Train from './Train'; 
import arrivals from '../server/trainData';

export default function TrainList({ color }) {
  
  const filteredTrains = arrivals.RailArrivals.filter(train => train.LINE === color);
  console.log(filteredTrains);
  return (
    <div>
        {filteredTrains.map(train => (
          
            <Train trainData={ train }/>
         
        ))}
    </div>
  );

  
}
