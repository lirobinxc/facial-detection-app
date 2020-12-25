import React, { useState } from 'react';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageUploadForm from './components/ImageUploader/ImageUploadForm';
import ParticleBackground from './components/ParticleBackground';
import Clarifai from 'clarifai';
import faceLogo from './components/logo/face-logo.svg';
import { motion } from "framer-motion"
import AIConcepts from './components/ImageUploader/AIConcepts';
import Loader from 'react-loader-spinner'

let randomCounter = 0;
let searchedURL = 'https://i.imgur.com/hES7D98.jpg';
let facesArr = [];

export default function App() {
  // const [searchInput, setSearchInput] = useState('https://i.imgur.com/hES7D98.jpg');
  const [logo, setLogo] = useState(faceLogo);
  const [loading, setLoading] = useState(false);
  const [conceptsArr, setConceptsArr] = useState(['⠀']);
  const [peopleCount, setPeopleCount] = useState(0);

  // Push processed faceData into faceArr
  function pushFaceDataIntoArr(arr) {
    facesArr = [];
    for (let i of arr) {
      facesArr.push(i.region_info.bounding_box)
    }
    setPeopleCount(facesArr.length)
    return facesArr
  }

  // Clarifai API setup
  const app = new Clarifai.App({
    apiKey: '2e41b3c34c924fb4af0fef3e5a6e945d'
  });

  // if Loading = false
  let loadedImage = (
    <div>  
      <motion.div
        style={{
          y: 0
        }}
        animate={{ 
          opacity: [0, 1],
        }}
        transition={{ duration: 1 }}
      >  
        <Logo imageURL={logo} arr={facesArr}/>
        </motion.div>
        <AIConcepts conceptsArr={conceptsArr} conceptsFontColor={{color: "#FCD34D"}}/>
    </div>
  )

  // Loading spinner 
  let spinner = (
    <div>
      <div className="relative flex justify-center">
        <Loader
          type="ThreeDots"
          color="#FCD34D"
          height={240}
          width={100}
          timeout={30000}
        />
      </div>
      <AIConcepts conceptsArr={conceptsArr} conceptsFontColor={{color: "rgba(255, 0, 0, 0)"}}/>
    </div>
  )
  
  let currentLogo = loading ? spinner : loadedImage;

  // When user types in something
  const onInputChange = (event) => {
    searchedURL = event.target.value;
  }

  // When user clicks 'Try a Random Image'
  const randomImages = [
    'https://leadingwithtrust.com/wp-content/uploads/2015/08/peer-to-boss.jpg',
    'https://api.time.com/wp-content/uploads/2014/05/166259035.jpg?w=600&quality=85',
    'https://www.cbc.ca/kidscbc2/content/the_feed/population_group.jpg',
    'https://www.citynews1130.com/wp-content/blogs.dir/sites/9/2019/06/chy11403327-1024x683.jpg',
    'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/16/16/festival.jpg?width=982&height=726'
  ]
  
  const onRandomClick = async () => {
    searchedURL = randomImages[randomCounter];
    
    if (randomCounter >= randomImages.length) {
      randomCounter = 0;
      searchedURL = (randomImages[0]);
    } else {searchedURL = randomImages[randomCounter];}
    randomCounter++;
    await onButtonClick();
  }

  // When user clicks Detect Faces
  const onButtonClick = () => {
    setLoading(true);

    // Runs AI face detect
    app.models.predict(Clarifai.FACE_DETECT_MODEL, searchedURL)
      .then(response => {
        const faceData = response['outputs'][0]['data']['regions'];
        return faceData;
      })
      .then(faceData => {
        pushFaceDataIntoArr(faceData);
      })
      .catch(err => setLogo(faceLogo))
      .then(() => app.models.predict(Clarifai.GENERAL_MODEL, searchedURL))
      .then(response => {
        const conceptsObj = response['outputs'][0]['data']['concepts'];
        return conceptsObj;
      })
      .then(obj => {
        let arr = [];
        for (let i of obj) {
          arr.push(i.name)
        }
      // Process arr into a nice <div>element</div> array  
        let processedArr = arr.map((item, index) => <div key={index} className="mx-5">{item}</div>)
        processedArr.splice(5)
        return processedArr;
      })
      .then((arr) => {
        setConceptsArr(arr)
      })
      .then(() => setLogo(searchedURL))
      .catch(err => {
        setLogo(faceLogo);
        facesArr = [];
        setConceptsArr(['Could not load image, please try again.']);
      })
      .finally(() => setLoading(false))
  }

  // FINAL RENDER
  return (
    <div className="">
      <ParticleBackground />
      <Navigation className=""/>
      <div className="h-screen grid grid-cols-1 place-content-center pb-32">
        <div className="relative mt-12 font-custom">
          {loading ? spinner : currentLogo}
          <ImageUploadForm inputChange={onInputChange} onButtonClick={onButtonClick} onChooseForMeClick={onRandomClick} peopleCount={peopleCount}/>
        </div>
      </div>
    </div>
  );

}