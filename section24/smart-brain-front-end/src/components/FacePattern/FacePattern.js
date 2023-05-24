import React from 'react';
import './FacePattern.css';

const FacePattern = ({ imageUrl, box }) => {
  return (
    <div className='center ma'>
        <div className='absolute mt2'>
          <img width='500px' height='auto' alt='' id='input-image' src={imageUrl}/>
          <div className='bounding-box'></div>
        </div>
      </div>
  )
}

export default FacePattern;