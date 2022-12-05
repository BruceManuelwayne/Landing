
import React from 'react'; 
import { useTranslation } from 'react-i18next';

import foto from './../../assets/LAOLA-127.png';
import logo from './../../assets/logoola.svg';
import {  Fade, } from 'react-awesome-reveal';


export default function Hero() {
  const[t] = useTranslation("translation"); 
  
  return (
    <>
    <Fade triggerOnce delay={2500}>
    <section id="ola" className='bg-slate-50 w-screen'>
      <div className='w-full flex lg:hidden'>
        <div className='absolute'>
              <div className='bg-blue-wave p-40 sm:p-40'>

              </div>
          </div>
        <div className='flex flex-col md:flex-row mx-2 md:mx-4'>
          
          <div className='flex flex-row md:flex-col max-w-md'>
            <div className='p-8 z-[1]'>
                <img src = {foto} alt='mini slab'/>
            </div>
          </div>
         
          <div className='flex flex-col md:flex-col md:mt-24 p-2 '>
                
                <img src = {logo} className='object-scale-down relative h-24 w-24 pl-1  md:pl-0' alt=''/> 
          
             
              
              <p className='max-w-prose text-left pl-2 pt-[-2] pr-8 md:pr-2  md:text-left md:pt-2 md:text-lg font-TTNormsLight'>{t("ola.mainInfo")} </p>
            
            </div>
          
        
        </div>
      </div>
     
      <div className='hidden lg:inline xl:hidden'>
        <div className='flex flex-nowrap '>
            <div className='absolute'>
              <div className=' bg-blue-wave flex shrink p-52'></div>
            </div>
            <div className='h-auto w-auto flex-auto'>
                <img src = {foto} className='h-max-w-lg object-cover sm: scale-50 md:scale-75 lg:scale-80' alt=''/>
            </div>
            <div className=' h-auto flex flex-wrap mt-20 mr-10' >
         
              <div className=' bg-slate-50 flex flex-col w-full font-TTNormsReg text-black align-top'>
                  <img src = {logo} className='object-scale-down h-40 w-40 ' alt=''/> 
                  <p className='max-w-prose  text-justify text-lg font-TTNormsLight'>{t("ola.mainInfo")} </p>
              </div>
       
            </div>
          </div>
     </div>
     
     <div className='hidden xl:inline'>
    
        <div className='flex flex-nowrap '>
        <div className='absolute'>
              <div className=' bg-blue-wave flex grow p-72'></div>
        </div>
            <div className='h-auto w-auto flex-auto'>
                <img src = {foto} className='h-max-w-lg object-cover sm: scale-50 md:scale-75 lg:scale-80' alt=''/>
            </div>
            <div className=' h-auto flex flex-wrap mt-52'>
              <div className=' bg-slate-50 flex flex-col md:w-2/3 font-TTNormsReg text-black align-top'>
              <img src = {logo} className='object-scale-down h-40 w-40  ' alt=''/>
                  
                  <p className='max-w-prose text-center md:text-left md:text-lg font-TTNormsLight'>{t("ola.mainInfo")} </p>
                
              </div>
            </div>
          </div>
     </div>

    
    </section>
    </Fade>
    </>
  )
}

