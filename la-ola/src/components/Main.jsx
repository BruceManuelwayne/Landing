import React from 'react'

//import videoBg from '../assets/VideoBackground.mp4';
import { useTranslation } from 'react-i18next';
import Render from './Render';
import Hero from '../components/Hero';
import Hero2 from '../components/Hero2';
import VideoPlayer from '../components/VideoPlayer';


const Main = () => {
    const[t] = useTranslation("translation"); 

  return (
    <div>
      <div className='bg-black h-[30vh] md:w-full md:h-screen relative' id='home' >
        {/* <img src={screenShot} alt='' className='w-full h-full object-cover'/> */}
        {/* <div loading className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
          <h2 className="text-center text-white text-xl font-semibold">Loading...</h2>
         
        </div> */}
        <VideoPlayer/>
        {/* <video src={videoBg} 
          className = 'mt-20 sm:mt-0 md:mt md:w-full md:h-full object-contain md:object-cover ' 
          autoPlay
          muted
          loop
          
          
        />   */}
        
        
      
        <div className='bg-black hidden  md:inline absolute pt-10 pl-5 pr-5 pb-2 inset-x-0 bottom-0 w-full  md:h-32 z-10 lg:pt-2'> 
          <div className='bg-black w-full flex flex-row space-x-3 justify-around items-center '>
            <div className='w-full bg-black h-8 md:h-16 lg:h-28'></div>
              {/* <div className=' bg-black  h-full flex flex-col space-y-0 mt-3 w-1/2 '>
                <Fade triggerOnce delay={1000} direction='right'>
                <h1 className=' bg-black font-ExtraBlack  text-xs sm:text-xs  md:ml-6 md:text-lg lg:text-2xl xl:text-3xl font-BoldItalic  text-white' >{t("hero.olas")}</h1>
                <h1 className=' bg-black font-ExtraBlack  text-xs sm:text-xs  md:ml-6 md:text-lg lg:text-2xl xl:text-3xl text-white font-BoldItalic'>{t("hero.olas2")}</h1>
                </Fade>
                  
              </div> */}
              {/* <div className='bg-black w-1/2 '>
                <Fade triggerOnce delay={1000} direction='left'>    <img className=' object-contain scale-80' src={keepWet} alt="" /> </Fade>
            
              </div> */}
          </div>

        </div>
        
        
        
        
          {/* <video src={videoBg}  loop muted/>
          <div className='bg black w-full  flex flex-row justify-center align-middle items-center '>
              <div className=' bg-black content w-full h-full flex flex-col ml-10'>
                  <h1 className=' bg-black font-ExtraBlack font-bold ml-6 mt-5 text-4xl text-white' >{t("hero.olas")}</h1>
                  <h1 className=' bg-black   font-ExtraBlack font-bold ml-6 text-4xl text-white'>{t("hero.olas2")}</h1>
              </div>
              <div className='bg-black justify-center items-center mr-10'>
              <img className='' src={keepWet} alt="" />
              </div>
          </div> */}
          
      </div>
      <Render/>
      <Hero/>  
      <Hero2/>
    </div>
  )
}

export default Main