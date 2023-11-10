
import React from 'react';
import './AboutMacroBuddy.css';
import foodimg from './imgs/foodimg.jpeg';
import foodimg2 from './imgs/foodimg2.jpeg';

const AboutMacroBuddy = () => {
  return (
    <div className="about-macro-buddy">
      <div className="image-container">
        <div className="image">
          <img src={foodimg2} alt="Food Image 2" />
        </div>
        <div className="image">
          <img src={foodimg} alt="Food Image 1" />
        </div>
      </div>
      <div className="text-under-image">
        <p><b>The Why - </b> Tracking macros can be beneficial for those seeking percise <br/>control over 
        their nutrition to meet <br/>specific dietary goals and optimize their overall health </p>
      </div>
      <div className="believe-section">
        <h2>What We Believe</h2>
        <p>
         At MacroBuddy, we believe in the power of balance nutrition to transform lives! 
           <br/>
              <br/>
         We're dedicated to helping you achieve your health and fitness goals by making macro 
            <br/>tracking simple and accessible. We believe that everyone deserves to have the tools    <br/>
            and knowledge to make informed choices about their diet. Our mission is to empower    <br/>
            you with the resources and support you need to embrace a healthier lifestyle. We are    <br/>
            committed to fostering a community of like-minded individuals who share our passion    <br/>
            for wellness and nutrition. Together, we strive to promote a sense of balance, vitality,    <br/>
            and well-being in <b>every</b>  aspect of your life.
        </p>
      </div>
    </div>
  );
};

export default AboutMacroBuddy;
