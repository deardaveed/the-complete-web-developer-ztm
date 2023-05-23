import './App.css';
import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkURL from './components/ImageLinkURL/ImageLinkURL';
import Rank from './components/Rank/Rank';
import FacePattern from './components/FacePattern/FacePattern';
import ParticlesBg from 'particles-bg';

const returnClarifaiRequestOptions = (imgURL) => {
    const PAT = 'a7f0fc84f6424161a0a613e8fbafde68';
    const USER_ID = 't4tjvl7769yx';
    const APP_ID = 'ztm';
    const IMAGE_URL = imgURL

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

class App extends Component {
    constructor() {
        super()
        this.state = {
            input: '',
            imageUrl: '',
        }
    }

    onInputChange = (event) => {
            this.setState({ input: event.target.value });
    }

    onButtonSubmit = () => {
        this.setState({imageUrl: this.state.input});
        const reqOptions = returnClarifaiRequestOptions(this.state.input);
        fetch("https://api.clarifai.com/v2/models/" + 'face-detection' + "/outputs", reqOptions)
            .then(response => response.json())
            .then(result => console.log(result.outputs[0].data.regions[0].region_info.bounding_box))
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
                <FacePattern imageUrl={this.state.imageUrl} />
            </div>
        );
    }
}

export default App;