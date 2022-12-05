import React from 'react';
import { useTranslation } from 'react-i18next';
import Surfpark from './../../assets/GroupSurfpark.webp';
import whiteOla from './../../assets/whiteOla.svg';
import {Fade} from 'react-awesome-reveal';

const Attraction = () => {

  const {t, i18n} = useTranslation();
  const changeLanguage = (language) => {
  i18n.changeLanguage(language);
} 

  return (
    <Fade triggerOnce>
    <section id ="attraction" className='bg-[#0e63ab] w-screen'>
        {/* <div className='flex flex-col justify-evenly items-center p-4 text-white'>
          <div className='flex flex-1 flex-row w-screen justify-evenly z-[3] mt-12 '>
            <div className='z-[3] hidden lg:flex '><img src={whiteOla} alt='whitelogo'/></div>
           
            <div className='font-extralight   '>
            <ul className=' flex-wrap p-2 '>
                <li className='p-0 text-xs md:text-sm lg:text-lg'>5 {t("attraction.5")}</li>
                <li className='p-0 text-xs md:text-sm lg:text-lg'>6 {t("attraction.6")}</li>
                <li className='p-0 text-xs md:text-sm lg:text-lg'>7 {t("attraction.7")}</li>
                <li className='p-0 text-xs md:text-sm lg:text-lg'>8 {t("attraction.8")}</li>
                <li className='p-0 text-xs md:text-sm lg:text-lg'>9 {t("attraction.9")}</li>
              </ul>
            </div>
          </div> */}
            {/* <h1 className='font-Montserrat justify-right absolute inset-x-0 lg:text-7xl md:text-7xl sm:text-5xl text-3xl mb-14 '>{t("tech.titulo")}</h1> */}
            {/* <div className='container mx-auto flex flex-col mb-32 space-y-10 text-white'>
                <h1 className='font-TTNormsReg max-w-sm text-4xl text-center mx-auto md:text-5xl'>{t("attraction.title")}</h1>
            </div>
            <div className ="sm:w-3/4 lg:w-3/4 mx-auto px-2 space-y-16 ">
                <p className='font-TTNormsLight text-center text-sm'>{t("attraction.att1")}</p>
                <p className='font-TTNormsLight text-center text-sm'>{t("attraction.att2")}</p>
                <p className='font-TTNormsLight text-center text-sm'>{t("attraction.att3")}</p>
           </div> */}
           {/* <div className='absolute'> <h1 className=' font-bold text-center md:pb-3 text-white text-2xl xl:text-4xl xl:p-4'>Surf Park</h1>
              <div className='grid grid-cols-2 place-content-evenly sm:mt-96 md:mt-5  md:grid-cols-3  md:place-content-end mt-64 ml-6 lg:mt-10 xl:mt-20 text-white'>
                <div className='hidden md:grid'></div>
                
                <div className='grid place-content-evenly md:place-content-end'>
                  <ul className='p-2'>
                    <li className='p-0 text-xs md:text-sm lg:text-lg'>1 {t("attraction.1")}</li>
                    <li className='p-0 text-xs md:text-sm lg:text-lg'>2 {t("attraction.2")}</li>
                    <li className='p-0 text-xs md:text-sm lg:text-lg'>3 {t("attraction.3")}</li>
                    <li className='p-0 text-xs md:text-sm lg:text-lg'>4 {t("attraction.4")}</li>
                  </ul>
                </div>
               <div className='grid place-content-evenly md:place-content-start'>
                  <ul className='p-2'>
                      <li className='p-0 text-xs md:text-sm lg:text-lg'>5 {t("attraction.5")}</li>
                      <li className='p-0 text-xs md:text-sm lg:text-lg'>6 {t("attraction.6")}</li>
                      <li className='p-0 text-xs md:text-sm lg:text-lg'>7 {t("attraction.7")}</li>
                      <li className='p-0 text-xs md:text-sm lg:text-lg'>8 {t("attraction.8")}</li>
                      <li className='p-0 text-xs md:text-sm lg:text-lg'>9 {t("attraction.9")}</li>
                    </ul>
                </div>
              </div>
          
           </div> */}
          
         
        {/* </div>
         */}
    </section>
    <section id='surfpark' className='bg-[#0e63ab] w-screen'>
    <div className='relative md:absolute  left-0 right-0 mx-auto  lg:mt-16'>
      <h1 className='text-white font-TTNormsLight text-xl  text-center mx-auto lg:p-4 lg:text-5xl'>Surfpark</h1>
      <div className='grid grid-cols-2  justify-self-centers text-white'>
        <div className='grid mx-auto'>
                    <ul className='p-2'>
                      <li className='p-0 text-xs md:text-sm lg:text-lg'>1 {t("attraction.1")}</li>
                      <li className='p-0 text-xs md:text-sm lg:text-lg'>2 {t("attraction.2")}</li>
                      <li className='p-0 text-xs md:text-sm lg:text-lg'>3 {t("attraction.3")}</li>
                      <li className='p-0 text-xs md:text-sm lg:text-lg'>4 {t("attraction.4")}</li>
                    </ul>
                  </div>
                <div className='grid mx-auto'>
                    <ul className='p-2'>
                        <li className='p-0 text-xs md:text-sm lg:text-lg'>5 {t("attraction.5")}</li>
                        <li className='p-0 text-xs md:text-sm lg:text-lg'>6 {t("attraction.6")}</li>
                        <li className='p-0 text-xs md:text-sm lg:text-lg'>7 {t("attraction.7")}</li>
                        <li className='p-0 text-xs md:text-sm lg:text-lg'>8 {t("attraction.8")}</li>
                        <li className='p-0 text-xs md:text-sm lg:text-lg'>9 {t("attraction.9")}</li>
                      </ul>
                </div>
      </div>
    </div>
   
    <div className='object-cover'>
           
           <img src={Surfpark} alt='Surf park full'
             className='object-contain object-bottom'/>

          </div>
    </section>
    </Fade>
  )
}

export default Attraction;