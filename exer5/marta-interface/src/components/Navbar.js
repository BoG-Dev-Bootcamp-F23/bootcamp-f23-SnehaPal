import React from 'react';
import stations from '../server/stationData';

export default function Navbar({ color }) {
  const stations = stations[color.toLowerCase()]; // Get the stations for the selected line

  return (
    <div>
      <h3>Stations for the {color} Line</h3>
      <ul>
        {stations.map((station, index) => (
          <li key={index}>{station}</li>
        ))}
      </ul>
    </div>
  );
}
