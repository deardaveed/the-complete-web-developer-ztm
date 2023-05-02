import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brainLogo from './brain.png';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt>
        <div className='Tilt br2 shadow-2 pa3' style={{ width: '150px', height: 'auto'}}>
          <img src={brainLogo}/>
        </div>
      </Tilt>
    </div>
    )
}

export default Logo;