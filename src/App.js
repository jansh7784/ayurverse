// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import HerbCatalog from './components/HerbCatalog';
import InteractiveGarden from './components/InteractiveGarden';
import ChatbotPage from './components/ChatbotPage';
import Profile from './components/Profile';
import AvatarCustomization from './components/AvatarCustomization';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/herb-catalog" element={<HerbCatalog />} />
          <Route path="/interactive-garden" element={<InteractiveGarden />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/avatar-customization" element={<AvatarCustomization />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
