import React from 'react'
import { useTranslation } from 'react-i18next';
import Slider from '../Slider/index'; 
import {SliderData} from '../Slider/SliderData';

import ModulosSvg from '../../assets/modulos/modulos.svg';
import {Fade} from 'react-awesome-reveal';


const Modulos = () => {
  const[t] = useTranslation("translation"); 

  return (
    <Fade triggerOnce>
    <div className="bg-[url('/src/assets/backgroundModulos.png')] bg-cover w-screen h-[100vh]  lg:h-[110vh] md:h-screen  object-fill text-white">
      <div className='hidden md:inline-grid w-screen h-screen'>
        <div className='p-4 grid grid-cols-2 w-screen items-center '>
          <div className=' mx-auto'>
            <Fade triggerOnce cascade direction='left'>
            <div className='p-4 md:max-w-md'>  
                    <span className='font-BoldItalic text-base md:text-xl'>{t("modulos.title1")}</span>
                    <p className='font-TTNormsLight text-xs md:text-base'>{t("modulos.sen1")}</p>
                  </div>
                  <div className='p-4 md:max-w-md '>  
                    <span className='font-BoldItalic text-base md:text-xl'>{t("modulos.title2")}</span>
                    <p className='font-TTNormsLight text-xs md:text-base'>{t("modulos.sen2")}</p>
                  </div>
                 
                  </Fade>
            </div>
            <div className=' order-last mx-auto'>
                <Fade triggerOnce direction='right'><img src ={ModulosSvg} 
                className='md:scale-75'
                alt='modulos'/></Fade>
            </div>
           
          </div>
         
      
      </div>
      <Fade triggerOnce>
      <div className='min-w-full gap-1 grid items p-2 grid-rows-3 md:hidden' >
        <Fade cascade triggerOnce direction='left'>
          <div className='p-3 md:max-w-md '>  
            <span className='font-BoldItalic text-xs sm:text-sm md:text-xl'>{t("modulos.title1")}</span>
            <p className='font-TTNormsLight text-xs md:text-base'>{t("modulos.sen1")}</p>
          </div>
          <div className=' p-3 md:max-w-md'>  
            <span className='font-BoldItalic  text-xs sm:text-sm md:text-xl'>{t("modulos.title2")}</span>
            <p className='font-TTNormsLight text-xs md:text-base'>{t("modulos.sen2")}</p>
          </div>
         
          <div className='hidden sm:hidden md:inline-flex md:order-4 md:col-span-2'>
            <img src ={ModulosSvg} alt='modulos'/>
          </div>
          <div className=' md:hidden'>
          <img src={ModulosSvg}
           className='object-contain mx-auto max-h-96 '/>
          </div>
          </Fade>
        </div>
        </Fade>
       
      
        
       
    </div>
    </Fade>
  )
}

export default Modulos