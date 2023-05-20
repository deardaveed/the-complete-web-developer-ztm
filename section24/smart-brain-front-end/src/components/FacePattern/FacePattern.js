import React from 'react';
const Clarifai = require('clarifai');

const app = new Clarifai.App({
 apiKey: 'a3190f3263024e0db05c173677ebfc85'
});

const FacePattern = () => {
  return (
      <div className='center'>
        <img alt='' src={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/440px-Image_created_with_a_mobile_phone.png'}/>
        
      </div>
    )
}

export default FacePattern;