// src/components/HerbCatalog.js
import React, { useState } from 'react';
import './HerbCatalog.css';

const herbs = [
  {
    id: 1,
    name: 'Tulsi (Holy Basil)',
    image: 'path_to_image/tulsi.jpg',
    description: 'Known for its medicinal properties, Tulsi is widely used in Ayurvedic treatments.',
  },
  {
    id: 2,
    name: 'Neem',
    image: 'path_to_image/neem.jpg',
    description: 'Neem is known for its antibacterial, antifungal, and antiviral properties.',
  },
  {
    id: 3,
    name: 'Ashwagandha',
    image: 'path_to_image/ashwagandha.jpg',
    description: 'Ashwagandha is an adaptogen that helps the body manage stress.',
  },
  // Add more herbs as needed
];

const HerbCatalog = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredHerbs = herbs.filter(herb =>
    herb.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="herb-catalog">
      <h2>Herb Catalog</h2>
      <input
        type="text"
        placeholder="Search for a herb..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <div className="herb-grid">
        {filteredHerbs.map(herb => (
          <div key={herb.id} className="herb-card">
            <img src={herb.image} alt={herb.name} className="herb-image" />
            <h3>{herb.name}</h3>
            <p>{herb.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HerbCatalog;
