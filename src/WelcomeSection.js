// src/WelcomeSection.js

import React from 'react';
import './WelcomeSection.css'
import { Link } from 'react-router-dom';
const WelcomeSection = () => {
  return (
    <div className="welcome-section">
      <h1>Welcome to MacroBuddy</h1>
      <p className="subheading">The ultimate macro tracking companion</p>
      <div className="buttons">
        <button>Start a Diary</button>
        <Link to="/log-meal">
          <button>Log a Meal</button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomeSection;
