import React from 'react';

export default function MartaButtons({ color }) {
  return (
    <div className="martaButtons">
      <button className="martaButton">Arriving</button>
      <button className="martaButton">Scheduled</button>
      <button className="martaButton">
        {color === 'RED' || color === 'GOLD' ? 'Northbound' : 'Eastbound'}
      </button>
      <button className="martaButton">
        {color === 'RED' || color === 'GOLD' ? 'Southbound' : 'Westbound'}
      </button>
    </div>
  );
}
