import React from 'react';
import './Colorbar.css';

export default function Colorbar({ onColorClick }) {
  const colors = ['GOLD', 'RED', 'BLUE', 'GREEN'];

  return (
    <div className="colorbar-container">
      {colors.map((color, index) => (
        <button
          key={index}
          className="colorButton"
          style={{ backgroundColor: color.toLowerCase() }}
          onClick={() => onColorClick(color)}
        >
          {color}
        </button>
      ))}
    </div>
  );
}
