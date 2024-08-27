// src/components/Profile.js
import React from 'react';
import './Profile.css'; // Optional: for styling

const Profile = () => {
  // Example user data
  const user = {
    name: 'Nitesh Singh',
    email: 'nitesh@example.com',
    bio: 'Software Engineer with a passion for building innovative solutions and working on cutting-edge technologies.'
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="profile-info">
        <img src="https://via.placeholder.com/150" alt="Profile" className="profile-img" />
        <div className="profile-details">
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Bio: {user.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
