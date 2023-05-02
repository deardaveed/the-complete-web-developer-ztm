import './App.css';
import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkURL from './components/ImageLinkURL/ImageLinkURL';
import Rank from './components/Rank/Rank';

class App extends Component {
  render () {
    return (
      <div className="App">
        <h1>Helloooo World!</h1>
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