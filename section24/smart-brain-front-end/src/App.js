import './App.css';
import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkURL from './components/ImageLinkURL/ImageLinkURL';
import Rank from './components/Rank/Rank';
// import FacePattern from './components/FacePattern/FacePattern';
import ParticlesBg from 'particles-bg';
// NO LONGER needed
// import Clarifai from 'clarifai';

// DEPRECATED in favor of PAT
// const app = new Clarifai.App({
//  apiKey: ''
// });
const returnClarifaiRequestOptions = (imgURL) => {
    const PAT = 'a7f0fc84f6424161a0a613e8fbafde68';
    const USER_ID = 't4tjvl7769yx';
    const APP_ID = 'ztm';
    // Change these to whatever model and image URL you want to use
    // const MODEL_ID = 'face-detection';
    // OPTIONAL:
    // const MODEL_VERSION_ID = 'aa7f35c01e0642fda5cf400f543e7c40';    
    // const IMAGE_URL = imgURL

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////

    const raw = JSON.stringify({
        "user_app_id": {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        "inputs": [{
            "data": {
                "image": {
                    "url": imgURL
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

class App extends Component {
    constructor() {
        super()
        this.state = {
            input: '',
            // imageUrl: '',
        }
    }

    onInputChange = (event) => {
            this.setState({ input: event.target.value });
        // console.log(event.target.value);
    }

    onButtonSubmit = () => {
        // this.setState({imageUrl: this.state.input});
        console.log('click');
        const reqOptions = returnClarifaiRequestOptions(this.state.input);
        console.log("before fetch call", reqOptions);
        fetch("https://api.clarifai.com/v2/models/" + 'face-detection' + "/outputs", reqOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    render() {
        return (
            <div className="App">
                <ParticlesBg color="#FFFFFF" num={80} type="cobweb" bg={true} />
                <Navigation />
                <Logo />
                <Rank />
                <ImageLinkURL onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
                {/*<FacePattern />*/}
            </div>
        );
    }
}

export default App;