import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import WelcomeSection from './WelcomeSection';
import AboutMacroBuddy from './AboutMacroBuddy';
import LogAMeal from './LogAMeal';
import Diary from './Diary';
import AuthenView from './AuthenView'
import Register from './Register'
import Login from './Login'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<WelcomeSection />} />
          <Route path="/about" element={<AboutMacroBuddy />} />
          <Route path="/log-meal" element={<LogAMeal />} />
          <Route path="/diary" element={<Diary/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path = "/auth" element = {<AuthenView/>}/>

        </Routes>
        <AboutMacroBuddy/>
        {/* <Register/> */}
      </div>
    </Router>
  );
}

export default App;