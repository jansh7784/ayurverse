// src/components/InteractiveGarden.js
import React, { useState } from 'react';
import './InteractiveGarden.css';

const plants = [
  { id: 1, name: 'Tulsi', x: 50, y: 80, description: 'Holy Basil with medicinal properties.' },
  { id: 2, name: 'Neem', x: 200, y: 150, description: 'Neem with antibacterial and antifungal properties.' },
  { id: 3, name: 'Ashwagandha', x: 350, y: 220, description: 'Ashwagandha helps manage stress.' },
  // Add more plants as needed
];

const InteractiveGarden = () => {
  const [selectedPlant, setSelectedPlant] = useState(null);

  const handlePlantClick = (plant) => {
    setSelectedPlant(plant);
  };

  return (
    <div className="interactive-garden">
      <h2>Interactive Garden</h2>
      <svg
        viewBox="0 0 500 300"
        className="garden-svg"
      >
        {plants.map(plant => (
          <circle
            key={plant.id}
            cx={plant.x}
            cy={plant.y}
            r="15"
            className="plant-marker"
            onClick={() => handlePlantClick(plant)}
          />
        ))}
      </svg>

      {selectedPlant && (
        <div className="plant-info">
          <h3>{selectedPlant.name}</h3>
          <p>{selectedPlant.description}</p>
          <button onClick={() => setSelectedPlant(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default InteractiveGarden;
