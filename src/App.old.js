import React from 'react';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageUploadForm from './components/ImageUploader/ImageUploadForm';
import ParticleBackground from './components/ParticleBackground';
import Clarifai from 'clarifai';
import faceLogo from './components/logo/face-logo.svg';
import { motion } from "framer-motion"


// Clarifai API
const app = new Clarifai.App({
  apiKey: '2e41b3c34c924fb4af0fef3e5a6e945d'
});


let currentLogo = (
  <motion.div
    animate={{ scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 90, -90, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    transition={{ duration: 1 }}
  >  
    <Logo imageURL={this.state.image} />
  </motion.div>)

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: 'https://i.imgur.com/hES7D98.jpg',
      image: faceLogo,
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
    console.log(event.target.value)
  }

  onButtonClick = () => {
    this.setState({image: this.state.input})  // Changes logo to URL image

    app.models.initModel({id: Clarifai.GENERAL_MODEL, version: "aa7f35c01e0642fda5cf400f543e7c40"})
      .then(generalModel => {
        console.log(`📢 ~ this.state.input`, this.state.input);
        return generalModel.predict(this.state.input);
      })
      .then(response => {
        const concepts = response['outputs'][0]['data']['concepts']
        console.log(concepts)
      })
  }

  render() {
    return (
      <div className="">
        <ParticleBackground />
        <Navigation className=""/>
        <div className="h-screen grid grid-cols-1 place-content-center pb-32">
          <div className="mt-12 font-custom">
            {currentLogo}
            <ImageUploadForm inputChange={this.onInputChange} onButtonClick={this.onButtonClick}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
