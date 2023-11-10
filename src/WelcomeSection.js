// src/WelcomeSection.js

import React from 'react';
import './WelcomeSection.css'

const WelcomeSection = () => {
  return (
    <div className="welcome-section">
      <h1>Welcome to MacroBuddy</h1>
      <p className="subheading">The ultimate macro tracking companion</p>
      <div className="buttons">
        <button>Start a Diary</button>
        <button>Log a Meal</button>
      </div>
    </div>
  );
};

export default WelcomeSection;
