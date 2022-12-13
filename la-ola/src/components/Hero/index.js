
import React from 'react';
import { useTranslation } from 'react-i18next';

import logo from './../../assets/logoola.svg';
import {  Fade, } from 'react-awesome-reveal';


export default function Hero() {
  const[t] = useTranslation("translation");

  return (
    <>
    <Fade triggerOnce fraction={0.6} delay={2500}>
    <section id="ola">
    </section> 
    <section id="hero1" className='bg-slate-50 w-screen'>
      <div className='w-full flex lg:hidden'>
        {/* <div className='absolute'>
              <div className='bg-blue-wave p-40 sm:p-40'>

              </div>
          </div> */}
        <div className='flex flex-col md:flex-row mx-2 md:mx-4'>

          <div className='flex flex-row md:flex-col max-w-md'>
            {/* <div className='p-8 z-[1]'>
                <img src = {foto} alt='mini slab'/>
            </div> */}
          </div>

          <div className='flex flex-col md:flex-col p-2 pb-8 '>

                <img src = {logo} className='object-scale-down relative h-24 w-24 pl-1  md:pl-0' alt=''/>



              <p className='max-w-prose text-justify pl-2 text-base pr-8 md:pr-2 font-TTNormsLight'>{t("ola.mainInfo")} </p>

            </div>


        </div>
      </div>

      <div className='hidden lg:inline xl:hidden'>
        <div className='flex flex-nowrap '>
            {/* <div className='absolute'>
              <div className=' bg-blue-wave flex shrink p-52'></div>
            </div> */}
            {/* <div className='h-auto w-auto flex-auto'>
                 <img src = {foto} className='h-max-w-lg object-cover sm: scale-50 md:scale-75 lg:scale-80' alt=''/>
            </div> */}
            <div className=' h-auto flex flex-wrap items-center mt-5 p-6 mx-auto' >

              <div className=' bg-slate-50 flex flex-col w-full font-TTNormsReg text-black align-top'>
                  <img src = {logo} className='object-scale-down h-40 w-40 ' alt=''/>
                  <p className='max-w-prose text-justify text-base font-TTNormsLight'>{t("ola.mainInfo")} </p>
              </div>

            </div>
          </div>
     </div>

     <div className='hidden xl:inline-flex w-full'>

        <div className='flex flex-nowrap items-center w-full'>
        {/* <div className='absolute'>
              <div className=' bg-blue-wave flex grow p-72'></div>
        </div> */}
            {/* <div className='h-auto w-auto flex-auto'>
                <img src = {foto} className='h-max-w-lg object-cover sm: scale-50 md:scale-75 lg:scale-80' alt=''/>
            </div> */}
            <div className=' h-auto flex flex-wrap items-center mt-5 p-6 mx-auto'>
              <div className=' bg-slate-50 flex flex-col font-TTNormsReg text-black align-top'>
              <img src = {logo} className='object-scale-down h-40 w-40 ' alt=''/>

                  <p className='max-w-prose  text-justify text-base font-TTNormsLight'>{t("ola.mainInfo")} </p>

              </div>
            </div>
          </div>
     </div>


    </section>
    </Fade>
    </>
  )
}

