
import React from 'react';
import logoImg from './imgs/logo.jpg'; // Adjust the path as needed
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img class='logo1'src={logoImg} alt="Logo" />
        <span>Macro Buddy</span>
      </div>
      <div className="nav-links">
        <a href="/">Diary</a>
        <a href="/">Progress</a>
        <a href="/">Macro Community</a>
        <a href="/">Profile</a>
        <a class= 'login'href="/">Login/Signup</a>
      </div>
    </div>
  );
};

export default NavBar;
