import React from 'react'
import { useTranslation } from 'react-i18next';
import logo from '../../assets/whiteOla.svg';
import circle1 from '../../assets/numbers/1.svg';
import circle2 from '../../assets/numbers/2.svg';
import circle3 from '../../assets/numbers/3.svg';
import circle4 from '../../assets/numbers/4.svg';
import circle5 from '../../assets/numbers/5.svg';
import {Fade} from 'react-awesome-reveal';

const Valores = () => {
    const[t] = useTranslation("translation"); 

  return (
    <>
    <Fade triggerOnce>
    <div className="bg-[url('/src/assets/valores.png')] bg-cover w-screen pt-5 text-white" id='valores' >

        <div className=' grid gap-4 grid-cols-1 sm:grid-cols-1  md:grid-cols-2 grid-rows-3 p-10 md:p-20 '>
        <Fade cascade delay={1000} triggerOnce>
            <div className='grid grid-custom gap-x-6 justify-items-end'>
                
                <div className='w-10 sm:scale-90 md:scale-100'>
                    <img src={circle1} alt='Circle1'/></div>
                <div className=''>  
                    <span className='font-BoldItalic text-base md:text-xl'>{t("valores.title1")}</span>
                    <p className='font-TTNormsLight text-sm md:text-base'>{t("valores.sen1")}</p>
                 </div>
            </div>
            <div className='grid grid-custom gap-x-6 justify-items-end'>
                <div className='w-10 sm:scale-90 md:scale-100'>
                    <img src={circle2} alt='Circle1'/>
                </div>
                <div>
                    <span className='font-BoldItalic text-base md:text-xl'>{t("valores.title2")}</span>
                    <p className='font-TTNormsLight text-sm md:text-base'>{t("valores.sen2")}</p>
                </div>  
            </div>
            <div className='grid grid-custom gap-x-6 justify-items-end'>
                <div className='w-10 sm:scale-90 md:scale-100'>
                    <img src={circle3} alt='Circle1'/>
                </div>
                <div className=''>
                    <span className='font-BoldItalic text-base md:text-xl'>{t("valores.title3")}</span>
                    <p className='font-TTNormsLight text-sm md:text-base'>{t("valores.sen3")}</p>
                </div>
            </div>
            <div className='grid grid-custom gap-x-6 justify-items-end'>
                <div className='w-10 sm:scale-90 md:scale-100'>
                    <img src={circle4} alt='Circle1'/>
                </div>
                <div>
                    <span className='font-BoldItalic text-base md:text-xl'>{t("valores.title4")}</span>
                    <p className='font-TTNormsLight text-sm md:text-base'>{t("valores.sen4")}</p>
                </div> 
            </div>
            <div className='grid grid-custom gap-x-6 justify-items-end'>
                <div className='w-10 sm:scale-90 md:scale-100'>
                    <img src={circle5} alt='Circle1'/>
                </div>
                <div className=''> 
                    <span className='font-BoldItalic text-base md:text-xl'>{t("valores.title5")}</span>
                    <p className='font-TTNormsLight text-sm md:text-base'>{t("valores.sen5")}</p>
                </div>
            </div>
            
            <div className='w-full h-32 hidden md:inline-grid'>
                <img className='mx-auto align-baseline ' src={logo} alt='whiteLogo'/>
            </div>
            <section id="tech">
            </section>
            </Fade>
        </div>
     
        
    </div>
    </Fade>
   
    </>
  )
}

export default Valores