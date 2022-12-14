import React from 'react';
import { useTranslation } from 'react-i18next';

import Render from './../../assets/renderPark.webp'

import sideSvg from './../../assets/sidebar.svg'
import {Fade} from 'react-awesome-reveal';


function Equipo() {
    const[t] = useTranslation("translation"); 

  return(
  <Fade triggerOnce>
    <section id="ventajas" className='bg-slade-50 w-screen flex items-center '>
    
      <div className='absolute right-0 my-auto hidden md:inline items-center'>
   
          <img src={sideSvg} alt='sidedetail'
          className='my-auto'/>
    
      </div>
      
     
      <div className='container flex flex-col-reverse md:flex-row items-center px-6-mx-auto space-y-0 md:space-x-24 px-6 mx-auto  gap-4 '>
          
           <div className='flex flex-shrink w-screen'>
            <Fade triggerOnce direction='left' fraction={0.6}>
            <img src={Render} alt='ParkRender'
            className='w-screen'/>
            </Fade>
           
           </div>
          <Fade cascade triggerOnce>
           <div className='flex flex-col space-y-4 mx-2 pt-4 md:w-2/3 font-BoldItalic text-base lg:text-xl text-[#0E63AB] font-semibold  '>
           {/* <div className='font-TTNormsLight text-base mb-4 lg:text-xl text-[#0E63AB]'>{t("advantages.set3")}</div> */}
            {t("advantages.title1")}
           <Fade direction='right' triggerOnce  cascade>
            
            <div className='font-TTNormsLight text-sm lg:text-base text-black'>{t("advantages.set1")}</div>
            <div className=' text-[#0E63AB] font-BoldItalic text-base lg:text-xl'>{t("advantages.title2")}</div>
            <div className='font-TTNormsLight text-black text-sm lg:text-base '>{t("advantages.set2")}</div>
            
            </Fade>
           </div>
           </Fade>
           

           {/* <div className='flex flex-col space-y-8 md:w-2/3 font-TTNormsReg text-[#0E63AB] font-semibold'>
              <p className='max-w-md text-center md:text-right font-TTNormsLight'>{t("team.team3")} </p>
            </div>  */}
      
         </div>
      
      
        
    
        
    </section>
  </Fade>
  )
}

export default Equipo