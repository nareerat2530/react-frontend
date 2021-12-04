import React from "react";
import { Button } from "../UI/Button";
import "./HomepageSection.css";
import "../App.css";

const HeroSection = () => {
  return (
      <div className='hero-container'>
      <video autoPlay loop muted>
        <source src="/public/video-1.mp4" type="video/mp4" />
      </video>
      <h1>Welcome to Movie World</h1>
          <div className='hero-btns'>
              <Button
                  className='btns'
                  buttonStyle='btn--outline'
                  buttonSize='btn--large'
              >GET STARTED</Button>
              <Button
                  className='btns'
                  buttonStyle='btn--primary'
                  buttonSize='btn--large'
                  onClick={console.log('hey')}>WATCH TRAILER<i className='far fa-play-circle' /></Button>
          </div>
      </div>
  );
}
export default HeroSection;
