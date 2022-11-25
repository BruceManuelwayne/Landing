import React from 'react';
import { useTranslation } from 'react-i18next';

import Render from './../../assets/renderPark.png'

import sideSvg from './../../assets/sidebar.svg'
import {Fade} from 'react-awesome-reveal';


function Equipo() {
    const[t] = useTranslation("translation"); 

  return(
  <Fade triggerOnce>
    <section id="ventajas" className='bg-slade-50'>
    
      <div className='absolute right-0  mt-56 hidden md:inline'>
   
          <img src={sideSvg} alt='sidedetail'/>
    
      </div>
     
      <div className='container flex flex-col-reverse md:flex-row items-center px-6-mx-auto-mt-10 space-y-0 md:space-x-24 px-6 mx-auto mt-10 gap-4'>
           <div className='flex flex-shrink'>
            <img src={Render} alt='ParkRender'/> 
           </div>
          <Fade cascade>
           <div className='flex flex-col space-y-4  md:w-2/3 font-TTNormsReg text-[#0E63AB] font-semibold '>{t("advantages.title1")}
           <Fade direction='right' cascade>
            <div className='font-TTNormsLight text-black'>{t("advantages.set1")}</div>
            <div className='font-TTNormsReg text-[#0E63AB] font-semibold'>{t("advantages.title2")}</div>
            <div className='font-TTNormsLight text-black '>{t("advantages.set2")}</div>
            <div className='font-TTNormsLight text-[#0E63AB]'>{t("advantages.set3")}</div>
            </Fade>
           </div>
           </Fade>
          
           {/* <div className='flex flex-col space-y-8 md:w-2/3 font-TTNormsReg text-[#0E63AB] font-semibold'>
              <p className='max-w-md text-center md:text-right font-TTNormsLight'>{t("team.team3")} </p>
            </div>  */}
      
         </div>
      
           <div className='container flex flex-col-reverse md:flex-row items-center px-6-mx-auto space-y-0 md:space-y-0 px-6 mx-auto mt-10 space-y.0'>
            <div className='flex flex-col space-x-12 md:w-2/3'>
            </div>
 
            <div className='flex flex-col space-y-8 md:w-1/3 font-TTNormsReg text-white font-semibold'>
              <p className='max-w-md text-center md:text-right font-TTNormsLight'>{t("team.team3")} </p>
            </div>
        </div>
        
    
        
    </section>
  </Fade>
  )
}

export default Equipo