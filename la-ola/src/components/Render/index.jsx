import React from 'react'
import { useTranslation } from 'react-i18next';
import background from '../../assets/render.webp';
import whiteLogo from '../../assets/whiteLogo.svg';
import keepWet from '../../assets/keepwet4.svg';
import {Fade} from 'react-awesome-reveal';



const Render = () => {
  const[t] = useTranslation("translation"); 

  return (
    <>
      <Fade triggerOnce fraction={0.5} duration={2000}>
      <div className='bg-cover bg-center w-screen' style={{backgroundImage:`url(${background})`}}>
          <div className='flex flex-nowrap w-screen h-[60vh] md:h-[90vh] backdrop-brightness-50' >
          <div className='flex-nowrap mx-2'>
          <Fade triggerOnce delay={2000} direction='right'>
              <div className=' flex-nowrap flex mt-14 ml-4 md:mx-10 md:mt-24 lg:mx-18 xl:mx-24 '>
                <div className=''>
                  <img src={whiteLogo}
                      alt='white logo'
                      className='w-12 h-12 sm:w-22 sm:h-22 md:w-20 md:h-20 md:mt-1 lg:w-28 lg:h-28 fill-white z-10'
                  />
                </div>
                <div className=' flex-nowrap pt-3 md:pt-4 pl-1 md:pl-4 lg:pt-5 leading-none '>
                    <h1 className='leading-none font-bold text-lg md:text-3xl lg:text-5xl xl:text-5xl text-white z-2' >{t("hero.olas")}</h1>
                    <h1 className='leading-none font-bold text-lg md:text-3xl lg:text-5xl xl:text-5xl  text-white z-2' >{t("hero.olas2")}</h1>
                </div>
              </div>         
          </Fade>
          <div className='absolute right-0  mx-2 mt-52 md:mt-72'>
            <Fade triggerOnce delay={1000} direction='left'>  
              <img className=' object-contain w-44 h-28 mr-4 lg:mr-40 md:mr-10 md:w-80 md:h-48 lg:w-96  ' src={keepWet} alt="keepWet tech" /> 
            </Fade>
          </div>
      
            {/* <img className='object-cover' 
              src={background}
              alt='background'/>
           */}
          </div>
          

            {/* <div className='bg-hero h-40 md:h-56 bg-contain bg-no-repeat w-screen flex-grow flex items-center justify-center ' >

            </div>
      */}

          

        </div>
      </div>      
    </Fade>
    </>
  )
}

export default Render