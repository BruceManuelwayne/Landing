import React from 'react';
import { useTranslation } from 'react-i18next';
import Doodle from './../../assets/doodle.svg';


function Machine() {
    const[t] = useTranslation("translation"); 

  return (
    <section id="machine" className='bg-[#0E63AB] w-screen	'>

        <div className='container pb-2 flex flex-col-reverse md:flex-row items-center px-6-mx-auto-mt-10 space-y-0 md:space-y-0 px-6 mx-auto mt-10 space-y.0'>
                <div className='flex flex-col mb-32 space-y-8 md:w-2/3 text-white font-TTNormsReg'>
                    <h1 className='max-w-md  text-center font-BoldItalic text-base md:text-3xl  md:text-left'>{t("machine.titulo")}</h1>
                    <p className='max-w-sm text-center md:text-left  font-TTNormsLight'>{t("machine.machine1")} </p>
                    <h1 className='max-w-md  text-center font-BoldItalic text-base md:text-3xl  md:text-left '>{t("machine.componentes")}</h1>
                    <p className='max-w-sm text-center md:text-left font-TTNormsLight'>{t("machine.compInfo")} </p> 
                </div> 
                <div className='flex flex-col mb-32 pl-2 space-y-8 md:w-2/3 align-middle'>
                  <img src={Doodle} alt='Doodle'
                  className='scale-75 md:scale-100'/>
                </div>
            </div>
            {/* <section id = "maintenance" className='bg-slate-50'>
              <div className='container flex flex-col-reverse md:flex-row items-center px-6-mx-auto space-y-0 md:space-y-0 px-6 mx-auto mt-10 space-y.0'>
                <div className='flex flex-col space-x-12 md:w-2/3'>
                </div>
    
                <div className=' bg-slate-50 flex flex-col space-y-8  md:w-1/3 font-TTNormsReg text-black'>
                  <h1 className='max-w-md text-3xl text-center md:text-3xl md:text-right font-TTNormsLight'>{t("machine.main")}</h1>
                  <p className='max-w-md text-center md:text-right font-TTNormsLight'>{t("machine.mainInfo")} </p>
                </div>
              </div>
            </section>    */}
  
       
    </section>
    
  )
}

export default Machine