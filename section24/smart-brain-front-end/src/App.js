import './App.css';
import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkURL from './components/ImageLinkURL/ImageLinkURL';
import Rank from './components/Rank/Rank';
// import FacePattern from './components/FacePattern/FacePattern';
import ParticlesBg from 'particles-bg';
import Clarifai from 'clarifai';

// DEPRECATED in favor of PAT
// const app = new Clarifai.App({
//  apiKey: 'a3190f3263024e0db05c173677ebfc85'
// });

class App extends Component {
  constructor (){
    super()
    this.state = {
      input: ''
    }
  }
  
  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click');
    
  }

  render () {
    return (
      <>
        <div className="App">
          <ParticlesBg color="#FFFFFF" num={80} type="cobweb" bg={true} />
          <Navigation />
          <Logo />
          <Rank />
          <ImageLinkURL onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
{/*          <FacePattern />*/}
        </div>
      </>
    );  
  }
} 

export default App;