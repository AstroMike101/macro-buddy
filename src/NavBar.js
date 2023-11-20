
import React from 'react';
import logoImg from './imgs/logo.jpg';
import { Link } from 'react-router-dom';
import './NavBar.css';


const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img class='logo1'src={logoImg} alt="Logo" />
        <span>Macro Buddy</span>
      </div>
      <div className="nav-links">
        {/* <a href="/">Diary</a> */}
        <Link to="/diary">Diary</Link>
        <a href="/">Progress</a>
        <a href="/">Macro Community</a>
        <a href="/">Profile</a>
        <a class= 'login'href="/">Login/Signup</a>
      </div>
    </div>
  );
};

export default NavBar;
