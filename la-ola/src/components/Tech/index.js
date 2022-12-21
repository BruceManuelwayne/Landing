import React from 'react';
import { useTranslation } from 'react-i18next';

import Logo from '../../assets/laolagroupazul.svg'

import Dibujo from '../../assets/dibujo.svg'

import {Fade} from 'react-awesome-reveal'; 

const Tech = () => {

  const {t, i18n} = useTranslation();
  const changeLanguage = (language) => {
  i18n.changeLanguage(language);
} 

  return (
  <Fade triggerOnce fraction={0.6} >
  <div className='bg-slate-50 w-screen flex flex-wrap flex-col lg:pt-6 '>
  <div className=''>
      <h1 className='text-[#0E63AB] font-CustomOla text-base lg:text-xl text-center mx-auto p-6 underline'>{t("tech.titulo")}</h1>
    </div>   
    <div className='bg-slate-50 flex flex-col w-screen  lg:flex-row-reverse items-center md:justify-evenly text-center md:text-left'>
     
      <div className='px-8 pb-4  mx-auto md:p-20  w-screen font-TTNormsLight text-sm lg:text-base text-justify md:max-w-fit'>
        <Fade triggerOnce>{t("tech.tecno1")}</Fade>
      </div>
      
  <Fade/>
  
      <div className='p-5 md:pl-36 md:p-10 hidden lg:inline w-1/2'>
       <Fade triggerOnce> <img className='w-52 md:w-96  '
          src={Logo} alt='LogoLaOlaAzul'/></Fade>
      </div>
    </div>
    <div className='bg-[#0E63AB] '>
    <Fade triggerOnce> <img className='w-screen p-5 lg:p-20 '
          src={Dibujo} alt='LogoLaOlaAzul'/></Fade>
   
   </div>
  
  </div>
 </Fade>
  
       
   
  )
}

export default Tech;