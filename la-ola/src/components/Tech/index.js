import React from 'react';
import { useTranslation } from 'react-i18next';

import Logo from '../../assets/laolagroupazul.svg'

import Dibujo from '../../assets/dibujo.svg'

const Tech = () => {

  const {t, i18n} = useTranslation();
  const changeLanguage = (language) => {
  i18n.changeLanguage(language);
} 

  return (
  <div className='bg-blue-wave w-screen flex flex-wrap flex-col '> 
    <div className=' bg-slate-50 flex flex-col md:flex-row-reverse lg:flex-row-reverse items-center md:justify-evenly text-center md:text-left'>
    
      <div className='p-10 md:p-14 w-screen font-TTNormsLight text-sm sm:text-base lg:text-lg md:max-w-fit'>
        {t("tech.tecno1")}
      </div>
      <div className='p-5 md:p-20'>
        <img className='w-52 md:w-96 '
          src={Logo} alt='LogoLaOlaAzul'/>
      </div>
    </div>
    <div className='p-10  bg-blue-wave'>
    <div className=''>
        <img src={Dibujo} alt='Dibujo'/>
      </div>

    </div>
  </div>
  
       
   
  )
}

export default Tech;