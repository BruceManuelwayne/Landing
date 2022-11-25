import React from 'react'
//import videoBg from '../assets/VideoBackground.mp4';
import { useTranslation } from 'react-i18next';
import keepWet from './../assets/keepwet.png';
import screenShot from './../assets/screenShot.png'; 
import {Fade} from 'react-awesome-reveal'; 


const Main = () => {
    const[t] = useTranslation("translation"); 

  return (
    <div className='w-full h-screen relative' id='home'>
      <img src={screenShot} alt='' className='w-full h-full object-cover'/>

      {/* <video src={videoBg} 
        className = 'w-full h-full object-cover' 
        autoPlay
        muted
        loop
       
      />  */}
    
      <div className='bg-black absolute pl-5 pr-5 pb-2 inset-x-0 bottom-0 w-full h-50 z-10 '> 
        <div className='bg-black w-full flex flex-row space-x-3 justify-around items-center '>
            <div className=' bg-black  h-full flex flex-col space-y-0 mt-3 w-1/2 '>
              <Fade triggerOnce delay={1000} direction='right'>
              <h1 className=' bg-black font-ExtraBlack  text-xs sm:text-xs  md:ml-6 md:text-lg lg:text-2xl xl:text-3xl font-CustomOla  text-white' >{t("hero.olas")}</h1>
                <h1 className=' bg-black font-ExtraBlack  text-xs sm:text-xs  md:ml-6 md:text-lg lg:text-2xl xl:text-3xl text-white font-CustomOla'>{t("hero.olas2")}</h1>
              </Fade>
                
            </div>
            <div className='bg-black w-1/2 '>
              <Fade triggerOnce delay={1000} direction='left'>    <img className=' object-contain scale-80' src={keepWet} alt="" /> </Fade>
           
            </div>
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
  )
}

export default Main