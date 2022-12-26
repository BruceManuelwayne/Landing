import React from 'react';
import { useTranslation } from 'react-i18next';

import {Fade} from 'react-awesome-reveal';

function Machine() {
    const[t] = useTranslation("translation"); 

  return (
   
    <section id="machine" className='bg-[#0E63AB] w-screen pb-6'>
       <Fade triggerOnce fraction={0.5} >
        <div className='container pb-2 flex flex-col-reverse items-center px-6-mx-auto-mt-10 space-y-0 md:space-y-0 px-6 mx-auto mt-10 space-y.0'>
                <div className='flex flex-col mb-32 space-y-8 text-white font-TTNormsReg'>
                  <Fade direction='left' delay={2} triggerOnce cascade>
                    <h1 className='max-w-md lg:max-w-3xl text-center font-BoldItalic text-base lg:text-xl'>{t("machine.titulo")}</h1>
                    <p className='max-w-sm  lg:max-w-3xl text-center text-sm lg:text-base font-TTNormsLight'>{t("machine.machine1")} </p>
                    <h1 className='max-w-md lg:max-w-3xl  text-center font-BoldItalic text-base lg:text-xl '>{t("machine.componentes")}</h1>
                    <p className='max-w-sm lg:max-w-3xl  text-sm text-center lg:text-base font-TTNormsLight'>{t("machine.compInfo")} </p> 
                  </Fade> 
                </div> 
              
            </div>
     
  </Fade>
    </section>
 
  )
}

export default Machine