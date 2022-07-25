import React from 'react';
import { useTranslation } from 'react-i18next';

const Attraction = () => {

  const {t, i18n} = useTranslation();
  const changeLanguage = (language) => {
  i18n.changeLanguage(language);
} 

  return (
    <section id ="attraction" className='bg-blue-wave pb-10 '>
        <div className='container flex flex-col justify-center items-center text-white px-6-mx-auto-mt-10 space-y-0 md:space-y-0 px-6 mx-auto mt-10 space-y.0'>
            {/* <h1 className='font-Montserrat justify-right absolute inset-x-0 lg:text-7xl md:text-7xl sm:text-5xl text-3xl mb-14 '>{t("tech.titulo")}</h1> */}
            <div className='container mx-auto flex flex-col mb-32 space-y-10 text-white'>
                <h1 className='font-TTNormsReg max-w-sm text-4xl text-center mx-auto md:text-5xl'>{t("attraction.title")}</h1>
            </div>
            <div className ="sm:w-3/4 lg:w-3/4 mx-auto px-2 space-y-16 ">
                <p className='font-TTNormsLight text-center text-sm'>{t("attraction.att1")}</p>
                <p className='font-TTNormsLight text-center text-sm'>{t("attraction.att2")}</p>
                <p className='font-TTNormsLight text-center text-sm'>{t("attraction.att3")}</p>
           </div>
        </div>
        
    </section>
  )
}

export default Attraction;