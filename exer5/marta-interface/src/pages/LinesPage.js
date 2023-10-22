//import React, { useState } from 'react';
//import Navbar from '../components/Navbar';
import TrainList from '../components/TrainList';
// import stationData from '../server/stationData';
// import trainData from '../server/trainData';

export default function LinesPage() {
  const currColor = "GOLD";

  return (
    <div>
    <h2>{currColor}</h2>
      {/* <Navbar color={currColor}/> */}
      
      <div>
        <button>Arriving</button>
        <button>Scheduled</button>
        <button>{currColor === 'red' ? 'Northbound' : 'Southbound'}</button>
        <button>{currColor === 'blue' ? 'Eastbound' : 'Westbound'}</button>
      </div>

      <TrainList color={currColor}/>
    </div>
  );
}
