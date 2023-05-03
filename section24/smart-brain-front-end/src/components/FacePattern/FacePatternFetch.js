import React from 'react';

const Clarifai = require('clarifai');
const app = new Clarifai.App({
 apiKey: 'a3190f3263024e0db05c173677ebfc85'
});

const returnClarifaiRequestOptions = (imageURL) => {
  const PAT = 'a7f0fc84f6424161a0a613e8fbafde68';
  const USER_ID = 't4tjvl7769yx';       
  const APP_ID = 'ztm';
  // Change these to whatever model and image URL you want to use
  const MODEL_ID = 'face-detection';
  // OPTIONAL:
  // const MODEL_VERSION_ID = 'aa7f35c01e0642fda5cf400f543e7c40';    
  const IMAGE_URL = 'imageURL';

  ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////

  const raw = JSON.stringify({
      "user_app_id": {
          "user_id": USER_ID,
          "app_id": APP_ID
      },
      "inputs": [
          {
              "data": {
                  "image": {
                      "url": IMAGE_URL
                  }
              }
          }
      ]
  });

  const requestOptions = {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Authorization': 'Key ' + PAT
      },
      body: raw
  };

  return requestOptions;
}
        fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/outputs", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

const FacePattern = () => {
  return (
    <>

    </>
    )
}

export default FacePattern;