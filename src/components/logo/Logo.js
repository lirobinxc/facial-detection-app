import React from 'react';
import Tilt from 'react-parallax-tilt';
import faceLogo from './face-logo.svg';

const Logo = (props) => {

  return (
    <div className="text-gray-200 text-xl flex justify-center">
      <Tilt 
        className="h-auto p-5 text-blue-800"
        tiltReverse={true}
        >
        <div className="bg-blue-300 m-36">
          <img className="h-40" src={faceLogo} alt="Face Detection"></img>
        </div>  
      </Tilt>
    </div>
  )
}

export default Logo