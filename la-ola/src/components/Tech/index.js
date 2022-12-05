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
  <div className='bg-blue-wave w-screen flex flex-wrap flex-col '> 
    <div className=' bg-slate-50 flex flex-col w-screen  lg:flex-row-reverse items-center md:justify-evenly text-center md:text-left'>
   
      <div className='p-10 mx-auto md:p-14 w-screen font-TTNormsLight text-sm sm:text-base lg:text-lg md:max-w-fit'>
        <Fade triggerOnce>{t("tech.tecno1")}</Fade>
      </div>
      
  <Fade/>
  
      <div className='p-5 md:p-20'>
       <Fade triggerOnce> <img className='w-52 md:w-96 '
          src={Logo} alt='LogoLaOlaAzul'/></Fade>
      </div>
    </div>
    
   
    <div className='p-10  bg-blue-wave items-center'>

    <Fade triggerOnce>
      <div className='mx-auto'>
    
      
        <img src={Dibujo} alt='Dibujo' className=' mx-auto'/>  
        
      </div>
    </Fade>

    </div>
  
  </div>
 </Fade>
  
       
   
  )
}

export default Tech;