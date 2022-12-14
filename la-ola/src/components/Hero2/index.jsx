import React from 'react'
import { useTranslation } from 'react-i18next';
import buzo from './../..//assets/buzo.webp';
import sideSvg from './../../assets/sidebar.svg'
import {Fade} from 'react-awesome-reveal';

const Hero2 = () => {

    const[t] = useTranslation("translation"); 

  return (
    <Fade triggerOnce fraction={0.6}>
    <div className='flex flex-row bg-slate-50 w-screen items-center'>
      <div className='relative'>
          <img src={sideSvg} alt='sidedetail' className='scale-150'/>
      </div>
     
      <div className='h-full flex flex-col p-2  '>
    
        
        <div className='flex flex-wrap space-y-2 lg:space-y-0 lg:gap-12 justify-center'> 
        <Fade triggerOnce cascade fraction={0.6} direction='left'>
          <div className='font-BoldItalic pb-2 text-base lg:text-xl  text-[#0E63AB] sm:p-2 max-w-3xl'>{t("mission.title")}:
            <div className='font-TTNormsLight text-black text-sm lg:text-base'>{t("mission.mission1")}</div>
          </div>
          <div className='font-BoldItalic m-0  pb-2  text-base text-[#0E63AB] sm:p-2 lg:text-xl  max-w-3xl'>{t("mission.title2")}:
            <p className='font-TTNormsLight text-black text-sm lg:text-base'>{t("mission.vision")}</p>
          </div>
          </Fade>
        </div>
      
      
        

      </div>
  
      <div className='h-auto object-cover flex-auto mx-auto'>
      <Fade triggerOnce fraction={0.8} direction='left'>
        <img src={buzo}
        alt='buzoOla'
        
        />
        </Fade>
      </div>
  
</div> 
</Fade>
  )
}

export default Hero2