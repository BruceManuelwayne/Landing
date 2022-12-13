import React from 'react'
import { useTranslation } from 'react-i18next';
import Slider from '../Slider/index'; 
import {SliderData} from '../Slider/SliderData';
import Dibujo from '../../assets/doodle.svg'



import {Fade} from 'react-awesome-reveal';


const Modulos = () => {
  const[t] = useTranslation("translation"); 

  return (
    <Fade triggerOnce>
    <div className="bg-[url('/src/assets/backgroundModulos.png')] bg-cover w-screen h-auto object-fill text-white">
   
      <div className='hidden md:inline-grid w-screen h-screen place-items-center'>
        <div className='container pb-2 flex flex-col-reverse items-center px-6-mx-auto space-y-0 md:space-y-0 px-6 mx-auto s'>
                  <div className='flex flex-col  space-y-8 text-white font-TTNormsReg'>
                    <Fade direction='left' delay={2} triggerOnce cascade>
                      <h1 className='max-w-lg lg:max-w-3xl  text-center font-BoldItalic text-base lg:text-xl'>{t("modulos.title1")}</h1>
                      <p className='max-w-md lg:max-w-3xl text-center text-sm lg:text-base font-TTNormsLight'>{t("modulos.sen1")} </p>
                      <h1 className='max-w-lg  lg:max-w-3xl text-center font-BoldItalic text-base lg:text-xl    '>{t("modulos.title2")}</h1>
                      <p className='max-w-md  lg:max-w-3xl text-sm text-center lg:text-base font-TTNormsLight'>{t("modulos.sen2")} </p> 
                    </Fade> 
                  </div> 
                
        </div>
       
      
      
      </div>
      <Fade triggerOnce>
      <div className='min-w-full gap-1 grid items p-2 grid-rows-2 md:hidden place-content-center place-items-center text-center'  >
        <Fade cascade triggerOnce direction='left'>
          <div className='p-3 md:max-w-md space-y-8 '>  
            <span className='font-BoldItalic text-base lg:text-xl'>{t("modulos.title1")}</span>
            <p className='font-TTNormsLight text-sm lg:text-base'>{t("modulos.sen1")}</p>
          </div>
          <div className=' p-3 md:max-w-md space-y-8'>  
            <span className='font-BoldItalic text-base lg:text-xl'>{t("modulos.title2")}</span>
            <p className='font-TTNormsLight text-sm lg:text-base '>{t("modulos.sen2")}</p>
          </div>
         
          
          <Fade triggerOnce>
            <div className='mx-auto'>
          
            
              <img src={Dibujo} alt='Dibujo' className=' mx-auto mb-4 scale-90 ml-8'/>  
              
            </div>
          </Fade>
          </Fade>
        </div>
        </Fade>
       
      
        
       
    </div>
    </Fade>
  )
}

export default Modulos