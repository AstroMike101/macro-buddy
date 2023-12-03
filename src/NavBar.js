import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoImg from './imgs/logo.jpg';
import './NavBar.css';

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated by looking for the token
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem('token');
    // Update the state to reflect the logged-out status
    setIsLoggedIn(false);
    // Navigate to the home page or another appropriate page
    navigate('/');
  };

  return (
    <div className="navbar">
      <div className="logo-container">
        <img className='logo1' src={logoImg} alt="Logo" />
        <span>Macro Buddy</span>
      </div>
      <div className="nav-links">
        <a href="/">Home</a>
        <Link to="/diary">Diary</Link>
        {isLoggedIn ? (
          <Link to="/logout" onClick={handleLogout}>Sign Out</Link>
        ) : (
          <Link to="/register">Login/Signup</Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
