import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import FaceBoundingBox from './FaceBoundingBox';

const Logo = ({imageURL, arr}) => {

  const [showFaceBox, setShowFaceBox] = useState(true)


  return (
    <div className="text-gray-200 text-xl flex justify-center h-60">
      <Tilt 
        className="relative"
        tiltReverse={true}
        reset={false}
        trackOnWindow={true}
        >
          <div className="relative h-60">
            <img id="logoImage" className="relative h-60 z-10" src={imageURL} alt="Face Detection" />
            <FaceBoundingBox arr={arr} url={imageURL}/>
          </div>
      </Tilt>
    </div>
  )
}

export default Logo