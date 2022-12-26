import React from 'react'


import { useTranslation } from 'react-i18next';
import Render from './Render';
import Hero from '../components/Hero';
import Hero2 from '../components/Hero2';
import VideoPlayer from '../components/VideoPlayer';


const Main = () => {
    const[t] = useTranslation("translation"); 

  return (
    <div>
      <div className='bg-black' id='home' >
        {/* <img src={screenShot} alt='' className='w-full h-full object-cover'/> */}
        {/* <div loading className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
          <h2 className="text-center text-white text-xl font-semibold">Loading...</h2>
         
        </div> */}
        <VideoPlayer/>
       
        
        
      
        <div className='bg-black'> 
          <div className='bg-black w-full flex flex-row space-x-3 justify-around items-center '>
            <div className=''></div>
             
          </div>

        </div>
        
        
      
          
      </div>
      <Render/>
      <Hero/>  
      <Hero2/>
    </div>
  )
}

export default Main