
import React from 'react'; 
import { useTranslation } from 'react-i18next';

import foto from './../../assets/slabCity.png';
import logo from './../../assets/logoola.svg';
import buzo from './../..//assets/buzo.png';

export default function Hero() {
  const[t] = useTranslation("translation"); 
  
  return (
    <section id="ola" className='bg-slate-50 w-screen'>
      <div className='w- full flex lg:hidden'>
        <div className='absolute'>
              <div className=' bg-blue-wave p-48 xs:p-30'>

              </div>
          </div>
        <div className='flex flex-col md:flex-row'>
          
          <div className='flex flex-row md:flex-col max-w-md'>
            <div className='p-8 z-[1]'>
                <img src = {foto} className='mini slab'/>
            </div>
          </div>
          <div className='flex flex-row md:flex-col  p-2 '>
            
              <img src = {logo} className='object-scale-down relative h-24 w-24'/> 
              
              <p className='max-w-prose text-left p-2 pt-8 md:text-left md:pt-2 md:text-lg font-TTNormsLight'>{t("ola.mainInfo")} </p>
            </div>
        </div>
      </div>
     
     <div className='hidden xl:inline'>
          <div className='flex flex-nowrap '>
            <div className='absolute'>
              <div className=' bg-blue-wave flex shrink p-96'></div>
            </div>
              <div className='h-auto w-auto flex-auto'>
                <img src = {foto} className='h-max-w-lg object-cover sm: scale-50 md:scale-75 lg:scale-80'/>
              </div>
              <div className=' h-auto flex flex-wrap mt-52'>
                <div className=' bg-slate-50 flex flex-col md:w-2/3 font-TTNormsReg text-black align-top'>
                  <img src = {logo} className='object-scale-down h-40 w-40 '/> 
                  <p className='max-w-prose text-center md:text-left md:text-lg font-TTNormsLight'>{t("ola.mainInfo")} </p>
                </div>
              </div>
            </div>
          


     </div>
    
    </section>
  )
}

