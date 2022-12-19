import React from 'react'
import { useTranslation } from 'react-i18next';
import logo from '../../assets/whiteOla.svg';
import circle from '../../assets/Circle.svg';
import Dibujo from '../../assets/doodle.svg';
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
        <div className="bg-[url('/src/assets/backgroundModulos.webp')] bg-cover w-screen h:auto lg:h-screen p-8 text-white grid content-center " id='valores' >
        <h1 className='text-white font-CustomOla text-base lg:text-xl text-center mx-auto pt-4'>{t("valores.title")}</h1>
            <div className='mx-8 my-8'>
                <div className=' grid gap-4 grid-cols-1 sm:grid-cols-1 justify-items-stretch text-justify md:grid-cols-2 '>
                    <Fade cascade delay={1000} triggerOnce>

                        <div className='grid grid-custom gap-x-4 '>
                            
                            <div className='w-7 md:w-8 '>
                                <img src={circle} className='' alt='Circle1'/></div>
                            <div className=''>  
                                <span className='font-BoldItalic text-base lg:text-xl'>{t("valores.title1")}</span>
                                <p className='font-TTNormsLight text-sm lg:text-base'>{t("valores.sen1")}</p>
                            </div>
                        </div>
                        
                        <div className='grid grid-custom gap-x-4 justify-items-end'>
                            <div className='w-7 md:w-8 '>
                                <img src={circle} alt='Circle1'/>
                            </div>
                            <div className=''>
                                <span className='font-BoldItalic text-base lg:text-xl'>{t("valores.title3")}</span>
                                <p className='font-TTNormsLight text-sm lg:text-base'>{t("valores.sen3")}</p>
                            </div>
                        </div>
                       
                    
                        <div className='grid grid-custom gap-x-4 justify-items-end'>
                        
                            <div className='w-7 md:w-8 '>
                        
                                <img src={circle} alt='Circle1'/>
                            </div>
                            
                            <div className=''> 
                                <span className='font-BoldItalic text-base lg:text-xl'>{t("valores.title5")}</span>
                                <p className='font-TTNormsLight text-sm lg:text-base'>{t("valores.sen5")}</p>
                                <section id='tech2'></section>
                            </div>
                        </div>
                        <div className='grid grid-custom gap-x-4 justify-items-end'>
                            <div className='w-7 md:w-8 '>
                                <img src={circle} alt='Circle1'/>
                            </div>
                            <div>
                                <span className='font-BoldItalic text-base lg:text-xl'>{t("valores.title4")}</span>
                                <p className='font-TTNormsLight text-sm lg:text-base'>{t("valores.sen4")}</p>
                            </div> 
                        </div>
                        <div className='grid grid-custom gap-x-4 justify-items-end'>
                            <div className='w-7 md:w-8 '>
                                <img src={circle} alt='Circle1'/>
                            </div>
                            <div>
                                <span className='font-BoldItalic text-base lg:text-xl'>{t("valores.title2")}</span>
                                <p className='font-TTNormsLight text-sm lg:text-base'>{t("valores.sen2")}</p>
                            </div>  
                        </div>
                        <div className='grid'>
                            <div className='sm:max-w-xs md:max-w-sm justify-self-center'>
                                <img className='mx-auto justify-self-center ml-6 md:ml-0 ' src={Dibujo} alt='whiteLogo'/>
                            </div>
                         </div>
                        
                    
                    <section id="tech">
                    </section>
                    </Fade>
                </div>
        
            
            </div>
        </div>
    </Fade>
   
    </>
  )
}

export default Valores