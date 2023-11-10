// src/AboutMacroBuddy.js

import React from 'react';
import './AboutMacroBuddy.css';
import foodimg from './imgs/foodimg.jpeg'; 
import foodimg2 from './imgs/foodimg2.jpeg';



const AboutMacroBuddy = () => {
  return (
    <div className="about-macro-buddy">
      <div className="image-container">
        <img class='foodimg'src={foodimg} alt="Logo" />
        <img class='foodimg2'src={foodimg2} alt="Logo" />

{/* 
        <img src="path/to/first-image.jpg" alt="First Image" />
        <img src="path/to/second-image.jpg" alt="Second Image" /> */}
        <div className="text-under-image">
          <p>Text under the second image</p>
        </div>
      </div>
      <div className="believe-section">
        <h2>What We Believe</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          tincidunt commodo orci, eu luctus libero scelerisque vel.
          Vestibulum efficitur, quam nec venenatis ultricies, turpis purus
          fermentum nisi, et facilisis justo felis vel odio.
        </p>
      </div>
    </div>
  );
};

export default AboutMacroBuddy;
