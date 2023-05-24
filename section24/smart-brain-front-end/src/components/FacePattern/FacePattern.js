import React from 'react';

const FacePattern = ({imageUrl}) => {
  return (
      <div className='center ma'>
        <div className='absolute mt2'>
          <img width='500px' height='auto' alt='' id='input-image' src={imageUrl}/>
        </div>
      </div>
    )
}

export default FacePattern;