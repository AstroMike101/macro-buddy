import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import WelcomeSection from './WelcomeSection';
import AboutMacroBuddy from './AboutMacroBuddy';
import LogAMeal from './LogAMeal';
import Diary from './Diary';
import AuthenticatedView from './AuthenticatedView';
const isLoggedIn = true;
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<WelcomeSection />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/log-meal" element={<LogAMeal />} />
          {isLoggedIn === ? (
            <Route path="/authenticated-view" element={<AuthenticatedView />} />
          ): null}
          {/* Add more routes as needed */}
        </Routes>
        <AboutMacroBuddy />
      </div>
    </Router>
  );
}

export default App;
