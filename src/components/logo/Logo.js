import React from 'react';
import Tilt from 'react-parallax-tilt';
import faceLogo from './face-logo.svg';

const Logo = (props) => {

  return (
    <div className="text-gray-200 text-xl flex justify-center">
      <Tilt 
        className="flex justify-center text-blue-800"
        tiltReverse={true}
        reset={false}
        trackOnWindow={true}
        >
          <img className="h-40" src={faceLogo} alt="Face Detection"></img>
      </Tilt>
    </div>
  )
}

export default Logo