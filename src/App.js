import React from 'react';
import Navigation from './components/navigation/Navigation'
import Logo from './components/logo/Logo'
import ImageUploadForm from './components/ImageUploader/ImageUploader';

function App() {
  return (
    <div className="">
      <Navigation />
      <div className="mt-52">
        <Logo />
        <div className="mt-12 font-custom">
          <ImageUploadForm />
        </div>
      </div>
    </div>
  );
}

export default App;
