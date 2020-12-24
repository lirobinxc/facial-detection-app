import React from 'react';

const ImageUploadForm = ({ inputChange, onButtonClick, onChooseForMeClick, peopleCount }) => {
  return (
    <div className="text-xl text-gray-300 text-center">
      <p className="mt-4">
        Number of People Detected:
      </p>
      <p className="mt-2 text-5xl text-yellow-300">
        {peopleCount}
      </p>
      <p className="mt-7 mb-4">
        Paste an image URL or <span className="underline cursor-pointer" onClick={onChooseForMeClick}>try a random image</span>
      </p>
      <div className="flex justify-center">
        <input 
          type="url" 
          className="
            w-2/3 xl:w-1/3 
            p-2 mb-4
          placeholder-gray-400
            text-gray-700
            rounded
            focus:ring-2 focus:ring-yellow-700 focus:outline-none
            text-center" 
          placeholder="www.google.com/image.jpg"
          onChange={inputChange}
          required />
      </div>
      <div className="">
        <button className="m-4 bg-yellow-300 text-gray-900 p-2 rounded transition transform hover:scale-105"
          onClick={onButtonClick}>Detect Faces</button>
      </div>
    </div>
  )
}

export default ImageUploadForm;