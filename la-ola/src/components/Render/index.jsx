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
          <div className='flex flex-nowrap w-screen h-[60vh] md:h-[90vh] backdrop-brightness-50 z-10' >
            <div className='flex-nowrap mx-2 '>
              
            <Fade triggerOnce delay={2000} direction='right'>
                <div className='flex-nowrap flex items-end mt-14 sm:ml-4
                md:mx-10 md:mt-24 lg:mx-18 xl:mx-24 '>
                  <div className='mb-[3px]'>
                    <img src={whiteLogo}
                        alt='white logo'
                        className='w-12 h-12 md:p-[1px] lg:p-[2px] sm:w-22 sm:h-22 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 fill-white z-10'
                    />
                  </div>
                  <div className='flex-nowrap ml-1 mt-3 md:pl-2 lg:mt-2 leading-none '>
                      <h1 className='leading-none font-BoldOla text-lg md:text-3xl lg:text-4xl xl:text-5xl text-white z-2' >{t("hero.olas")}</h1>
                      <h1 className='leading-none font-BoldOla text-lg md:text-3xl lg:text-4xl xl:text-5xl  text-white z-2' >{t("hero.olas2")}</h1>
                  </div>
                </div>           
            </Fade>
            <div className='absolute md:fixed right-5 md:right-20 bottom-0'>
              <Fade triggerOnce delay={1000} direction='left'>  
                <img className=' object-contain w-44 h-28 mb-5 md:mb-0 md:mr-4 md:w-80 md:h-48 lg:w-96 ' src={keepWet} alt="keepWet tech" /> 
              </Fade>
            </div>
         
            
            </div>
           

           
      
      
    
        </div>
        
      </div> 
      
    </Fade>
    </>
  )
}

export default Render