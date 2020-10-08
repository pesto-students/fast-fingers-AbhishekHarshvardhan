import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ isGameRunning, handleStop }) => {
  return (
    <div className='footer'>
      <div className='footer-buttons' onClick={handleStop}>
        {isGameRunning ? (
          <div className='stop-button'>
            <img
              src='metro-cross.svg'
              alt='Home'
              className='Icon-awesome-home'
            />
            Stop Game
          </div>
        ) : (
          <Link to='/' className='footer-buttons' onClick={clearPlayHistory}>
            Quit
          </Link>
        )}
      </div>
      <Link to='/' className='footer-buttons'>
        <img src='home.svg' alt='Home' className='Icon-awesome-home' />
      </Link>
    </div>
  );
};
const clearPlayHistory = () => {
  localStorage.clear();
};
export default Footer;
