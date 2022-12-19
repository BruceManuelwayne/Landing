import React from 'react'
import { useTranslation } from 'react-i18next';
import Dibujo from '../../assets/doodle.svg'
import {Fade} from 'react-awesome-reveal';
import circle from '../../assets/Circle.svg';


const Modulos = () => {
  const[t] = useTranslation("translation"); 

  return (
    <Fade triggerOnce>
    <section id='ventajas'>
    <div className="bg-[url('/src/assets/valores.webp')]  bg-cover w-screen h-auto lg:h-screen p-8 text-white grid content-center">
    <div className=''>
      <h1 className=' font-CustomOla text-base lg:text-xl text-center mx-auto pt-8 lg:m-10  '>{t("advantages.title")}</h1>
    </div>  
    <div className='mx-8 my-8'>
                <div className=' grid gap-4 grid-cols-1 sm:grid-cols-1 justify-items-stretch text-justify md:grid-cols-2 '>
                    <Fade cascade delay={1000} triggerOnce>
                      <div className='grid grid-custom gap-x-4 justify-items-end'>
                            <div className='w-7 md:w-8 '>
                                <img src={circle} alt='Circle1'/>
                            </div>
                            <div className=''>
                                <span className='font-BoldItalic text-base lg:text-xl'>{t("modulos.title1")}</span>
                                <p className='font-TTNormsLight text-sm lg:text-base'>{t("modulos.sen1")}</p>
                            </div>
                        </div>
                        <div className='grid grid-custom gap-x-4 '>
                            
                            <div className='w-7 md:w-8 '>
                                <img src={circle} className='' alt='Circle1'/></div>
                            <div className=''>  
                                <span className='font-BoldItalic text-base lg:text-xl'>{t("machine.titulo")}</span>
                                <p className='font-TTNormsLight text-sm lg:text-base'>{t("machine.machine1")}</p>
                            </div>
                        </div>
                        <div className='grid grid-custom gap-x-4 justify-items-end'>
                            <div className='w-7 md:w-8 '>
                                <img src={circle} alt='Circle1'/>
                            </div>
                            <div>
                                <span className='font-BoldItalic text-base lg:text-xl'>{t("modulos.title2")}</span>
                                <p className='font-TTNormsLight text-sm lg:text-base'>{t("modulos.sen2")}</p>
                            </div>  
                        </div>
                       
                        <div className='grid grid-custom gap-x-4 justify-items-end'>
                            <div className='w-7 md:w-8 '>
                                <img src={circle} alt='Circle1'/>
                            </div>
                            <div>
                                <span className='font-BoldItalic text-base lg:text-xl'>{t("machine.componentes")}</span>
                                <p className='font-TTNormsLight text-sm lg:text-base'>{t("machine.compInfo")}</p>
                            </div> 
                        </div>
                        <div className='grid grid-custom gap-x-4 justify-items-end'>
                            <div className='w-7 md:w-8 '>
                                <img src={circle} alt='Circle1'/>
                            </div>
                            <div>
                                <span className='font-BoldItalic text-base lg:text-xl'>{t("advantages.title1")}</span>
                                <p className='font-TTNormsLight text-sm lg:text-base'>{t("advantages.set1")}</p>
                            </div> 
                        </div>
                        <div className='grid grid-custom gap-x-4 justify-items-end'>
                            <div className='w-7 md:w-8 '>
                                <img src={circle} alt='Circle1'/>
                            </div>
                            <div>
                                <span className='font-BoldItalic text-base lg:text-xl'>{t("advantages.title2")}</span>
                                <p className='font-TTNormsLight text-sm lg:text-base'>{t("advantages.set2")}</p>
                            </div> 
                        </div>
                    </Fade>
                </div>
        
            
            </div>
   
   
      {/* <div className='hidden md:inline-grid w-screen h-screen place-items-center'>
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
        </Fade> */}
       
      
        
       
    </div>
    </section>
    </Fade>
  )
}

export default Modulos