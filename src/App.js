import React from 'react';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageUploadForm from './components/ImageUploader/ImageUploadForm';
import ParticleBackground from './components/ParticleBackground';
import Clarifai from 'clarifai';


// Clarifai API
const app = new Clarifai.App({
  apiKey: 'YOUR_API_KEY'
});

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
    console.log(event.target.value)
  }

  onButtonClick = (event) => {
    console.log(event)
  }

  render() {
    return (
      <div className="">
        <ParticleBackground />
        <Navigation className=""/>
        <div className="h-screen grid grid-cols-1 place-content-center pb-32">
          <div className="mt-12 font-custom">
          <Logo />
            <ImageUploadForm searchFxn={this.onInputChange} onButtonClick={this.onButtonClick}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
