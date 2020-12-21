import React from 'react';

const ImageUploadForm = () => {
  return (
    <div className="text-xl text-gray-300 text-center">
      <p className="m-4">
        Paste an image URL
      </p>
      <div className="flex justify-center">
        <input 
          type="url" 
          className="
            w-2/3 xl:w-1/3 
            p-2 mb-4
          placeholder-gray-400
            rounded
            focus:ring-2 focus:ring-yellow-700 focus:outline-none
            text-center" 
          placeholder="www.google.com/image.jpg"
          required />
      </div>
      <div className="">
        <button className="m-4 bg-yellow-300 text-gray-900 p-2 rounded transition transform hover:scale-105">Detect Faces</button>
      </div>
    </div>
  )
}

export default ImageUploadForm;