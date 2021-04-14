import React from 'react';
import {ReactComponent as GithubLogo} from './github.svg'

const Navigation = () => {
  return (
    <nav className="font-custom flex justify-end ">
      <a href="https://github.com/lirobinxc">  
        <p className="flex py-5 px-5 border-solid text-gray-200 text-xl border-gray-700 hover:bg-gray-200 hover:text-gray-800
          transition duration-100 cursor-pointer">
            <GithubLogo className="fill-current h-7 pr-3"/>
            lirobinxc
        </p>
      </a>
    </nav>
  )
}

export default Navigation;
