import React from 'react';
import { useTranslation } from 'react-i18next';
import Surfpark from './../../assets/GroupSurfpark.webp';

import {Fade} from 'react-awesome-reveal';

const Attraction = () => {

  const {t, i18n} = useTranslation();
  const changeLanguage = (language) => {
  i18n.changeLanguage(language);
} 

  return (
    <Fade triggerOnce fraction={0.6}>
    <section id ="attraction" className='bg-[#0e63ab] w-screen'>
    </section>
    <section id='surfpark' className='bg-[#0e63ab] w-screen'>
    <div className='relative md:absolute  left-0 right-0 mx-auto'>
      <h1 className='text-white font-CustomOla text-base lg:text-xl text-center mx-auto md:mt-2 p-8 underline '>SURFPARK</h1>
      <div className='grid grid-cols-2  justify-items-sretch text-white'>
      <Fade triggerOnce cascade delay={1500} fraction={0.6} direction='left'>
          <div className='grid mx-auto text-left justify-self-end font-TTNormsLight max-w-md'>
          
                    <ul className='p-4 ml-2 md:ml-18 text-left '>
                      <li className='p-0 text-sm  lg:text-base'> <span className='font-CustomOla pr-1 '>1</span>  {t("attraction.1")}</li>
                      <li className='p-0 text-sm lg:text-base'><span className=' font-CustomOla pr-1'>2</span> {t("attraction.2")}</li>
                      <li className='p-0 text-sm lg:text-base'><span className=' font-CustomOla pr-[1px]'>3</span> {t("attraction.3")}</li>
                      <li className='p-0 text-sm lg:text-base'><span className=' font-CustomOla pr-1'>4</span> {t("attraction.4")}</li>
                    </ul>
                  </div>
                <div className='grid mx-auto text-left  justify-center font-TTNormsLight '>
                    <ul className='p-4'>
                        <li className='p-0 text-sm lg:text-base'><span className=' font-CustomOla pr-1'>5</span> {t("attraction.5")}</li>
                        <li className='p-0 text-sm lg:text-base'><span className=' font-CustomOla pr-1'>6</span> {t("attraction.6")}</li>
                        <li className='p-0 text-sm lg:text-base'><span className=' font-CustomOla pr-1'>7</span> {t("attraction.7")}</li>
                        <li className='p-0 text-sm lg:text-base'><span className=' font-CustomOla pr-1'>8</span> {t("attraction.8")}</li>
                        <li className='p-0 text-sm lg:text-base'><span className=' font-CustomOla pr-1'>9</span> {t("attraction.9")}</li>
                      </ul>
                </div>
          </Fade>
      </div>
    </div>
   
    <div className='object-cover'>
    <section id='contact2'></section>
           <img src={Surfpark} alt='Surf park full'
             className='object-contain object-bottom'/>
   
          </div>
         
    </section>
    </Fade>
  )
}

export default Attraction;