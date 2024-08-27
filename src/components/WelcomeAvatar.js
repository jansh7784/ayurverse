// src/components/WelcomeAvatar.js
import React, { useState } from 'react';
import './WelcomeAvatar.css';

const WelcomeAvatar = () => {
  const [isTourActive, setIsTourActive] = useState(false);
  const [message, setMessage] = useState("Hello! I'm your guide. How can I help you today?");

  const startTour = () => {
    setIsTourActive(true);
    setMessage("Let's start the tour! I'll guide you through the key sections.");
    // You can add more detailed steps for the tour here
  };

  const handleUserInteraction = () => {
    setMessage("What would you like to explore today? The Herbal Garden, Community, or Mentors?");
  };

  return (
    <div className="welcome-avatar">
      <div className="avatar">
        {/* Placeholder for the avatar image or character */}
        <img src="/path/to/avatar-image.png" alt="Avatar" />
      </div>
      <div className="message-box">
        <p>{message}</p>
        <button onClick={startTour}>Start Tour</button>
        <button onClick={handleUserInteraction}>Ask a Question</button>
      </div>
      {isTourActive && (
        <div className="tour-steps">
          <p>Step 1: Explore the Herbal Garden.</p>
          <p>Step 2: Visit the Community & Mentors section.</p>
          <p>Step 3: Customize your content preferences.</p>
          {/* Add more steps and features as needed */}
        </div>
      )}
    </div>
  );
};

export default WelcomeAvatar;
