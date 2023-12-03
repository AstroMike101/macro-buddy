
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
        <a href="/">Home</a>
        <Link to="/diary">Diary</Link>
          <Link to = '/register'>Login/Signup</Link>
      </div>
    </div>
  );
};

export default NavBar;
