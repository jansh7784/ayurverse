// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/herb-catalog">Herb Catalog</Link>
        </li>
        <li className="nav-item">
          <Link to="/interactive-garden">Interactive Garden</Link>
        </li>
        <li className="nav-item">
          <Link to="/chatbot">Chatbot</Link>
        </li>
        <li className="nav-item">
          <Link to="/profile">Profile</Link>
        </li>
        <li className="nav-item">
          <Link to="/avatar-customization">Avatar Customization</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
