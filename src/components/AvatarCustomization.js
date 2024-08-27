// src/components/AvatarCustomization.js
import React, { useState } from 'react';
import './AvatarCustomization.css'; // Optional: for styling

const AvatarCustomization = () => {
  const [avatarImage, setAvatarImage] = useState(null);
  const [borderColor, setBorderColor] = useState('#000000');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleColorChange = (event) => {
    setBorderColor(event.target.value);
  };

  return (
    <div className="avatar-customization-container">
      <h2>Avatar Customization</h2>
      <div className="avatar-preview">
        <img
          src={avatarImage || 'https://via.placeholder.com/150'}
          alt="Avatar"
          className="avatar-img"
          style={{ borderColor }}
        />
      </div>
      <div className="customization-options">
        <div className="upload-section">
          <label htmlFor="avatar-upload" className="upload-label">Upload Avatar:</label>
          <input
            type="file"
            id="avatar-upload"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>
        <div className="color-section">
          <label htmlFor="border-color" className="color-label">Border Color:</label>
          <input
            type="color"
            id="border-color"
            value={borderColor}
            onChange={handleColorChange}
          />
        </div>
      </div>
    </div>
  );
};

export default AvatarCustomization;
