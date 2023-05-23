import React from 'react';
// const Clarifai = require('clarifai');

// const app = new Clarifai.App({
//  apiKey: 'a3190f3263024e0db05c173677ebfc85'
// });

const FacePattern = ({imageUrl}) => {
  return (
      <div className='center ma'>
        <div className='absolute mt2'>
          <img width='500px' height='auto' alt='' src={imageUrl}/>
        </div>
      </div>
    )
}

export default FacePattern;