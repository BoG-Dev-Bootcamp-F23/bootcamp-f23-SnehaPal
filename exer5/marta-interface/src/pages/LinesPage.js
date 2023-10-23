//import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import TrainList from '../components/TrainList';
import "./LinesPage.css";
// import stationData from '../server/stationData';
// import trainData from '../server/trainData';

export default function LinesPage() {
  const currColor = "GOLD";

  return (
    <div>
      <h2>{currColor}</h2>
      <div className='body'>
        <Navbar color={currColor}/>
        <div>   
            <div className = "martaButtons">
                <button className='martaButton'>Arriving</button>
                <button className='martaButton'>Scheduled</button>
                <button className='martaButton'>{(currColor === 'RED'| currColor === 'GOLD') ? 'Northbound' : 'Eastbound'}</button>
                <button className='martaButton'>{(currColor === 'RED'| currColor === 'GOLD') ? 'Southbound' : 'Westbound'}</button>
            </div>
            <TrainList color={currColor}/>
        </div>
      </div>
      
    </div>
  );
}
