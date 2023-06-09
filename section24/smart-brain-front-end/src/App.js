import './App.css';
import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkURL from './components/ImageLinkURL/ImageLinkURL';
import Rank from './components/Rank/Rank';
import FacePattern from './components/FacePattern/FacePattern';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import ParticlesBg from 'particles-bg';

const returnClarifaiRequestOptions = (imgURL) => {
  const PAT = 'a7f0fc84f6424161a0a613e8fbafde68';
  const USER_ID = 't4tjvl7769yx';
  const APP_ID = 'ztm';
  const IMAGE_URL = imgURL;

  const raw = JSON.stringify({
    "user_app_id": {
      "user_id": USER_ID,
      "app_id": APP_ID
    },
    "inputs": [{
      "data": {
        "image": {
          "url": IMAGE_URL
        }
      }
    }]
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

const initialState = {
  input: '',
  imageUrl: '',
  box: {},
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    })
  }
  // componentDidMount() {
  //   fetch('http://localhost:3000/')
  //   .then(response => response.json())
  //   .then(console.log)
  // }

  calculateFaceDimensions = (data) => {
    const clarifaiBounds = data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById('input-image');
    const width = +image.width;
    const height = +image.height;

    return {
      leftCol: clarifaiBounds.left_col * width,
      topRow: clarifaiBounds.top_row * height,
      rightCol: width - (clarifaiBounds.right_col * width),
      bottomRow: height - (clarifaiBounds.bottom_row * height)
    }
  }

  drawFaceBox = (dimensions) => {
    this.setState({ box: dimensions });
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    const reqOptions = returnClarifaiRequestOptions(this.state.input);
    fetch("https://api.clarifai.com/v2/models/" + 'face-detection' + "/outputs", reqOptions)
      .then(response => response.json())
      .then(response => {
        if (response) {
          fetch('http://localhost:3000/image', {
              method: 'put',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                id: this.state.user.id
              })
            })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, { entries: count }))
          }).catch(console.log)
        }
        this.drawFaceBox(this.calculateFaceDimensions(response))
      })
      .catch(error => console.log('error', error));
  }

  onRouteChange = (routeToggle) => {
    if (routeToggle === 'signout') {
      this.setState(initialState)
    } else if (routeToggle === 'home') {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: routeToggle });
  }

  render() {
    const { isSignedIn, imageUrl, route, box } = this.state;
    return (
      <div className="App">
        <ParticlesBg color="#FFFFFF" num={80} type="cobweb" bg={true} />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        { route === 'home' 
        ? <div>
            <Logo /> 
            <Rank name={this.state.user.name} entries={this.state.user.entries} />
            <ImageLinkURL onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
            <FacePattern box={box} imageUrl={imageUrl} />
          </div>
        : ( route === 'signin' 
            ? <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} /> 
            : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} /> 
          )
        }
      </div>
    );
  }
}

export default App;