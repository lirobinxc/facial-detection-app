import React from 'react';
import Tilt from 'react-parallax-tilt';
import FaceBoundingBox from './FaceBoundingBox';

const Logo = ({imageURL, arr}) => {

  return (
    <div className="text-gray-200 text-xl flex justify-center ">
      <Tilt 
        className="relative"
        tiltReverse={true}
        reset={false}
        trackOnWindow={true}
        >
          <div className="relative">
          <img id="logoImage" className="h-60 w-auto" src={imageURL} alt="Face Detection" />
          <FaceBoundingBox arr={arr} url={imageURL}/>
          </div>
      </Tilt>
    </div>
  )
}

export default Logo