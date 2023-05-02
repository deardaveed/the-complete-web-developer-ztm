import React from 'react';
import './ImageLinkURL.css'

const ImageLinkURL = () => {
  return (
    <div>
      <p className='f3'>
        {'This app will detect human faces from the URL link you provide. Give it a try!'}
      </p>
      <div className='center pa4 br3 shadow-5 form'>
        <input type='text' className='f4 pa2 w-70 ' />
        <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
      </div>
    </div>
  )
}

export default ImageLinkURL;