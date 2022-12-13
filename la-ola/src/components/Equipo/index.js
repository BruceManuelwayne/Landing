import React from 'react';
import { useTranslation } from 'react-i18next';

import Render from './../../assets/renderPark.webp'

import sideSvg from './../../assets/sidebar.svg'
import {Fade} from 'react-awesome-reveal';


function Equipo() {
    const[t] = useTranslation("translation"); 

  return(
  <Fade triggerOnce>
    {/* <section id="ventajas" className='bg-slade-50 w-screen flex items-center p-10'> */}
    <section id="ventajas" className="bg-[url('/src/assets/renderPark.webp')] bg-cover bg-center w-screen h-screen text-white ">
      {/* <div className='absolute right-0 my-auto hidden md:inline items-center'>
   
          <img src={sideSvg} alt='sidedetail'
          className='my-auto'/>
    
      </div> */}
      
     <div className=' h-screen'>
      <div className='flex flex-col-reverse items-center space-y-0 md:space-x-24 px-6 mx-auto gap-4 bg-slate-50 '>
          
           {/* <div className='flex flex-shrink'>
            <Fade triggerOnce direction='left' fraction={0.6}>
            <img src={Render} alt='ParkRender'
            className=''/>
            </Fade>
           
           </div> */}
          <Fade cascade triggerOnce>
           <div className='flex flex-col space-y-4   font-BoldItalic text-base lg:text-xl text-[#0E63AB] my-5 md:my-14 text-center bg-slate-50'>
           {/* <div className='font-TTNormsLight text-base mb-4 lg:text-xl text-[#0E63AB]'>{t("advantages.set3")}</div> */}
            {t("advantages.title1")}
           <Fade direction='right' triggerOnce  cascade>
            
            <div className='font-TTNormsLight text-sm lg:text-base text-[#0E63AB]'>{t("advantages.set1")}</div>
            <div className='font-BoldItalic text-base lg:text-xl'>{t("advantages.title2")}</div>
            <div className='font-TTNormsLight text-[#0E63AB] text-sm lg:text-base '>{t("advantages.set2")}</div>
            
            </Fade>
           </div>
           </Fade>
          

           {/* <div className='flex flex-col space-y-8 md:w-2/3 font-TTNormsReg text-[#0E63AB] font-semibold'>
              <p className='max-w-md text-center md:text-right font-TTNormsLight'>{t("team.team3")} </p>
            </div>  */}
      
         </div>
      
       
        
         </div> 
          
    </section>
    
  </Fade>
  )
}

export default Equipo