import React from 'react';
import { useTranslation } from 'react-i18next';

const Tech = () => {

  const {t, i18n} = useTranslation();
  const changeLanguage = (language) => {
  i18n.changeLanguage(language);
} 

  return (
  <section id="tech" className='bg-blue-wave w-screen'> 
    <div className='waveLeft'>
      <div className=' flex flex-col justify-center items-center bg-blue-wave h-screen font-TTNormsReg pt-20 pb-60 '>

          <div className="text-6xl mx-auto text-white text-center bg-center h-52">

            {/* <h1 className='font-TTNormsReg justify-right absolute inset-x-0 lg:text-7xl md:text-7xl sm:text-5xl text-3xl mb-14 '>{t("tech.titulo")}</h1> */}
            <div className='container mx-auto flex flex-col mb-32 space-y-10'>
              <h1 className='font-TTNormsReg max-w-sm text-4xl text-center mx-auto md:text-5xl'>{t("tech.titulo")}</h1>
            </div>
            <div className ="sm:w-3/4 lg:w-3/4 mx-auto px-2 space-y-16">
              <p className='font-TTNormsLight text-center text-xl'>{t("tech.tecno1")}</p>
              <p className='font-TTNormsLight text-center text-xl'>{t("tech.tecno2")}</p>
            </div>

            </div>
        </div>
      </div>
</section>
  
       
   
  )
}

export default Tech;