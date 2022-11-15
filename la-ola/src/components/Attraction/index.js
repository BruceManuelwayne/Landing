import React from 'react';
import { useTranslation } from 'react-i18next';
import Surfpark from './../../assets/surfpark1.png';
import whiteOla from './../../assets/whiteOla.svg';


const Attraction = () => {

  const {t, i18n} = useTranslation();
  const changeLanguage = (language) => {
  i18n.changeLanguage(language);
} 

  return (
    <section id ="attraction" className='bg-[#0e63ab] pb-10 w-screen h-screen'>
        <div className='container flex flex-col justify-center items-center  text-white px-6-mx-auto-mt-10 space-y-0 md:space-y-0 px-6 mx-auto mt-10 space-y.0'>
          <div className='flex  flex-1 flex-row  w-screen justify-evenly z-[3] mt-6 p-2 lg:ml-56'>
            <div className='z-[3] hidden lg:flex '><img src={whiteOla} alt='whitelogo'/></div>
            <div className=' font-extralight p-2 basis-1/2 ml-20 sm:ml-32'>
              <ul className=''>
                <li className='p-0 text-xs  md:text-sm lg:text-lg'>1 {t("attraction.1")}</li>
                <li className='p-0 text-xs md:text-sm lg:text-lg'>2 {t("attraction.2")}</li>
                <li className='p-0 text-xs md:text-sm lg:text-lg'>3 {t("attraction.3")}</li>
                <li className='p-0 text-xs md:text-sm lg:text-lg'>4 {t("attraction.4")}</li>
              </ul>
            </div>
            <div className='text-xs font-extralight basis-1/2 '>
            <ul className='  '>
                <li className='p-0 text-xs md:text-sm lg:text-lg'>5 {t("attraction.5")}</li>
                <li className='p-0 text-xs md:text-sm lg:text-lg'>6 {t("attraction.6")}</li>
                <li className='p-0 text-xs md:text-sm lg:text-lg'>7 {t("attraction.7")}</li>
                <li className='p-0 text-xs md:text-sm lg:text-lg'>8 {t("attraction.8")}</li>
                <li className='p-0 text-xs md:text-sm lg:text-lg'>9 {t("attraction.9")}</li>
              </ul>
            </div>
          </div>
            {/* <h1 className='font-Montserrat justify-right absolute inset-x-0 lg:text-7xl md:text-7xl sm:text-5xl text-3xl mb-14 '>{t("tech.titulo")}</h1> */}
            {/* <div className='container mx-auto flex flex-col mb-32 space-y-10 text-white'>
                <h1 className='font-TTNormsReg max-w-sm text-4xl text-center mx-auto md:text-5xl'>{t("attraction.title")}</h1>
            </div>
            <div className ="sm:w-3/4 lg:w-3/4 mx-auto px-2 space-y-16 ">
                <p className='font-TTNormsLight text-center text-sm'>{t("attraction.att1")}</p>
                <p className='font-TTNormsLight text-center text-sm'>{t("attraction.att2")}</p>
                <p className='font-TTNormsLight text-center text-sm'>{t("attraction.att3")}</p>
           </div> */}
           <div className=''>
            
            <img src={Surfpark} alt='Surf park full'
              className='rounded-2xl  scale-110'/>

           </div>
         
        </div>
        
    </section>
  )
}

export default Attraction;