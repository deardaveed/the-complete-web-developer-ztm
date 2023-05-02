import './App.css';
import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkURL from './components/ImageLinkURL/ImageLinkURL';
import Rank from './components/Rank/Rank';
// import FacePattern from './components/FacePattern/FacePattern';
import ParticlesBg from 'particles-bg';

class App extends Component {
  render () {
    return (
      <div className="App">
        <ParticlesBg type="circle" bg={true} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkURL />
{/*        <FacePattern />*/}
      </div>
    );  
  }
} 

export default App;