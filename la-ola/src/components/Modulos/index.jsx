import React from 'react'
import { useTranslation } from 'react-i18next';
import Slider from '../Slider/index'; 
import {SliderData} from '../Slider/SliderData';

import ModulosSvg from '../../assets/modulos/modulos.svg';


const Modulos = () => {
  const[t] = useTranslation("translation"); 

  return (
    <div className="bg-[url('/src/assets/backgroundModulos.png')] bg-cover w-screen h-screen object-fill text-white">
      <div className='hidden md:inline-grid w-screen h-screen'>
        <div className='p-4 grid grid-cols-2 w-screen items-center '>
          <div className=' mx-auto'>
            <div className='p-4 md:max-w-md'>  
                    <span className='font-BoldItalic text-base md:text-xl'>{t("modulos.title1")}</span>
                    <p className='font-TTNormsLight text-xs md:text-base'>{t("modulos.sen1")}</p>
                  </div>
                  <div className='p-4 md:max-w-md '>  
                    <span className='font-BoldItalic text-base md:text-xl'>{t("modulos.title2")}</span>
                    <p className='font-TTNormsLight text-xs md:text-base'>{t("modulos.sen2")}</p>
                  </div>
                  <div className='p-4 md:max-w-md  '>  
                    <span className='font-BoldItalic text-base md:text-xl p-0' >{t("modulos.title3")}</span>
                   
                      <li className='font-TTNormsLight text-xs md:text-base p-0'>{t("modulos.li1")}</li>
                      <li className='font-TTNormsLight text-xs md:text-base p-0'>{t("modulos.li2")}</li>
                      <li className='font-TTNormsLight text-xs md:text-base p-0'>{t("modulos.li3")}</li>
                  
                    
                  </div>
            </div>
            <div className=' order-last mx-auto'>
                <img src ={ModulosSvg} 
                className='md:scale-90'
                alt='modulos'/>
            </div>
           
          </div>
         
      
      </div>
      
      <div className=' min-w-full grid items grid-cols-3 md:p-4 md:grid-cols-2 md:justify-center justify-items-start md:hidden' >
          <div className='p-4 md:max-w-md '>  
            <span className='font-BoldItalic text-sm sm:text-sm md:text-xl'>{t("modulos.title1")}</span>
            <p className='font-TTNormsLight text-xs md:text-base'>{t("modulos.sen1")}</p>
          </div>
          <div className='p-4 md:max-w-md'>  
            <span className='font-BoldItalic  text-sm sm:text-sm md:text-xl'>{t("modulos.title2")}</span>
            <p className='font-TTNormsLight text-xs md:text-base'>{t("modulos.sen2")}</p>
          </div>
          <div className='p-4 md:max-w-md'>  
            <span className='font-BoldItalic  text-sm sm:text-sm md:text-xl p-0'>{t("modulos.title3")}</span>
            <li className='font-TTNormsLight text-xs md:text-base p-0'>{t("modulos.li1")}</li>
            <li className='font-TTNormsLight text-xs md:text-base p-0'>{t("modulos.li2")}</li>
            <li className='font-TTNormsLight text-xs md:text-base p-0'>{t("modulos.li3")}</li>
          </div>
          <div className='hidden sm:hidden md:inline-flex md:order-4 md:col-span-2'>
          <img src ={ModulosSvg} alt='modulos'/>
        </div>
        </div>
       
        <div className='md:hidden'>
          <Slider slides={SliderData} />
        </div>
        
       
    </div>
  )
}

export default Modulos