import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import WelcomeSection from './WelcomeSection';
import AboutMacroBuddy from './AboutMacroBuddy';
import LogAMeal from './LogAMeal';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<WelcomeSection />} />
          <Route path="/log-meal" element={<LogAMeal />} />
          {/* Add more routes as needed */}
        </Routes>
        <AboutMacroBuddy/>
      </div>
    </Router>
  );
}

export default App;