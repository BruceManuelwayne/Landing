import React from 'react'
import { useTranslation } from 'react-i18next';

import {Fade} from 'react-awesome-reveal';
import circle from '../../assets/Circle.svg';


const Modulos = () => {
  const[t] = useTranslation("translation"); 

  return (
    <Fade triggerOnce>
    <section id='ventajas'>
    <div className="bg-[url('/src/assets/valores.webp')]  bg-cover bg-center  w-screen h-auto p-2 lg:p-8 xl:p-10 text-white grid content-start">
    <div className=''>
      <h1 className=' font-CustomOla text-base lg:text-xl text-center mx-auto p-6 underline'>{t("advantages.title")}</h1>
    </div>  
    <div className='mx-8 my-8'>
                <div className=' grid gap-4 grid-cols-1 sm:grid-cols-1 justify-items-stretch text-justify md:grid-cols-2 xl:mb-24 '>
                    <Fade cascade delay={1000} triggerOnce>
                      <div className='grid grid-custom gap-x-4 justify-items-end'>
                            <div className='w-3 mt-[5px] md:mt-[4px] md:w-4 '>
                                <img src={circle} alt='Circle1'/>
                            </div>
                            <div className=''>
                                <span className='font-BoldItalic text-base lg:text-xl'>{t("modulos.title1")}</span>
                                <p className='font-TTNormsLight text-sm lg:text-base'>{t("modulos.sen1")}</p>
                            </div>
                        </div>
                        <div className='grid grid-custom gap-x-4 '>
                            
                            <div className='w-3 mt-[5px] md:mt-[4px] md:w-4 '>
                                <img src={circle} className='' alt='Circle1'/></div>
                            <div className=''>  
                                <span className='font-BoldItalic text-base lg:text-xl '>{t("machine.titulo")}</span>
                                <p className='font-TTNormsLight text-sm lg:text-base'>{t("machine.machine1")}</p>
                            </div>
                        </div>
                        <div className='grid grid-custom gap-x-4 justify-items-end'>
                            <div className='w-3 mt-[5px] md:mt-[4px] md:w-4  '>
                                <img src={circle} alt='Circle1'/>
                            </div>
                            <div>
                                <span className='font-BoldItalic text-base lg:text-xl '>{t("modulos.title2")}</span>
                                <p className='font-TTNormsLight text-sm lg:text-base'>{t("modulos.sen2")}</p>
                            </div>  
                        </div>
                       
                        <div className='grid grid-custom gap-x-4 justify-items-end'>
                            <div className='w-3 mt-[5px] md:mt-[4px] md:w-4  '>
                                <img src={circle} alt='Circle1'/>
                            </div>
                            <div>
                                <span className='font-BoldItalic text-base lg:text-xl '>{t("machine.componentes")}</span>
                                <p className='font-TTNormsLight text-sm lg:text-base'>{t("machine.compInfo")}</p>
                            </div> 
                        </div>
                        <div className='grid grid-custom gap-x-4 justify-items-end'>
                            <div className='w-3 mt-[5px] md:mt-[4px] md:w-4 '>
                                <img src={circle} alt='Circle1'/>
                            </div>
                            <div>
                                <span className='font-BoldItalic text-base lg:text-xl '>{t("advantages.title1")}</span>
                                <p className='font-TTNormsLight text-sm lg:text-base'>{t("advantages.set1")}</p>
                            </div> 
                        </div>
                        <div className='grid grid-custom gap-x-4 justify-items-end'>
                            <div className='w-3 mt-[5px] md:mt-[4px] md:w-4  '>
                                <img src={circle} alt='Circle1'/>
                            </div>
                            <div>
                                <span className='font-BoldItalic text-base lg:text-xl capitalize'>{t("advantages.title2")}</span>
                                <p className='font-TTNormsLight text-sm lg:text-base'>{t("advantages.set2")}</p>
                            </div> 
                        </div>
                    </Fade>
                </div>
        
            
            </div>
   
   
  
       
      
        
       
    </div>
    </section>
    </Fade>
  )
}

export default Modulos