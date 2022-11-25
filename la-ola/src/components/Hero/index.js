
import React from 'react'; 
import { useTranslation } from 'react-i18next';

import foto from './../../assets/slabCity.png';
import logo from './../../assets/logoola.svg';
import {  Fade,Slide } from 'react-awesome-reveal';


export default function Hero() {
  const[t] = useTranslation("translation"); 
  
  return (
    <Fade triggerOnce>
    <section id="ola" className='bg-slate-50 w-screen'>
    
      <div className='w-full flex lg:hidden'>
        <div className='absolute'>
              <div className=' bg-blue-wave p-36 sm:p-40'>

              </div>
          </div>
        <div className='flex flex-col md:flex-row'>
          
          <div className='flex flex-row md:flex-col max-w-md'>
            <div className='p-8 z-[1]'>
                <img src = {foto} alt='mini slab'/>
            </div>
          </div>
       
          <div className='flex flex-row md:flex-col md:mt-24 p-2 '>
                <Fade triggerOnce cascade>
                <img src = {logo} className='object-scale-down relative h-24 w-24 pb-11 md:pb-0' alt=''/> 
          
             
              
              <p className='max-w-prose text-justify pr-10 md:pr-2 p-2 pt-8 md:text-left md:pt-2 md:text-lg font-TTNormsLight'>{t("ola.mainInfo")} </p>
              </Fade>
            </div>
        
        </div>
      </div>
     
      <div className='hidden lg:inline xl:hidden'>
        <div className='flex flex-nowrap '>
            <div className='absolute mt-16'>
              <div className=' bg-blue-wave flex shrink p-64'></div>
            </div>
            <div className='h-auto w-auto flex-auto'>
                <img src = {foto} className='h-max-w-lg object-cover sm: scale-50 md:scale-75 lg:scale-80' alt=''/>
            </div>
            <div className=' h-auto flex flex-wrap mt-20 mr-10' >
            <Slide cascade direction='right'>
              <div className=' bg-slate-50 flex flex-col w-full font-TTNormsReg text-black align-top'>
                  <img src = {logo} className='object-scale-down h-40 w-40 ' alt=''/> 
                  <p className='max-w-prose  text-justify text-lg font-TTNormsLight'>{t("ola.mainInfo")} </p>
              </div>
            </Slide>
            </div>
          </div>
     </div>
     
     <div className='hidden xl:inline'>
        <div className='flex flex-nowrap '>
            <div className='absolute'>
              <div className=' bg-blue-wave flex shrink p-96'></div>
            </div>
            <div className='h-auto w-auto flex-auto'>
                <img src = {foto} className='h-max-w-lg object-cover sm: scale-50 md:scale-75 lg:scale-80' alt=''/>
            </div>
            <div className=' h-auto flex flex-wrap mt-52'>
              <div className=' bg-slate-50 flex flex-col md:w-2/3 font-TTNormsReg text-black align-top'>
                <Slide cascade triggerOnce direction='right'><img src = {logo} className='object-scale-down h-40 w-40  ' alt=''/>
                  
                  <p className='max-w-prose text-center md:text-left md:text-lg font-TTNormsLight'>{t("ola.mainInfo")} </p>
                  </Slide> 
              </div>
            </div>
          </div>
     </div>

    
    </section>
    </Fade>
  )
}

