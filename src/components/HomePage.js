import React from 'react';
import WelcomeAvatar from './WelcomeAvatar';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to the Virtual Herbal Garden</h1>
      <p>Your journey into the world of medicinal plants starts here.</p>
      
      {/* Include the Welcome Avatar */}
      <WelcomeAvatar />
      
      {/* Add more sections as needed */}
    </div>
  );
};

export default HomePage;