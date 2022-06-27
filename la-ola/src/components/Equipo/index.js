import React from 'react';
import { useTranslation } from 'react-i18next';


function Equipo() {
    const[t] = useTranslation("translation"); 

  return (
    <section id="equipo" className='bg-blue-wave'>
         <div className='container flex flex-col-reverse md:flex-row items-center px-6-mx-auto-mt-10 space-y-0 md:space-y-0 px-6 mx-auto mt-10 space-y.0'>
            <div className='flex flex-col mb-32 space-y-12 md:w-2/3 text-white font-TTNormsReg font-semibold'>
                <h1 className='max-w-md text-3xl text-center md:text-3xl md:text-left font-semibold'>{t("team.title")}</h1>
                <p className='max-w-sm text-center md:text-left font-TTNormsLight'>{t("team.team1")} </p>
              
                <p className='max-w-sm text-center md:text-left font-TTNormsLight'>{t("team.team2")} </p> 
            </div> 
         </div>
      
           <div className='container flex flex-col-reverse md:flex-row items-center px-6-mx-auto space-y-0 md:space-y-0 px-6 mx-auto mt-10 space-y.0'>
            <div className='flex flex-col space-x-12 md:w-2/3'>
            </div>
 
            <div className='flex flex-col space-y-8 md:w-1/3 font-TTNormsReg text-white font-semibold'>
              <p className='max-w-md text-center md:text-right font-TTNormsLight'>{t("team.team3")} </p>
            </div>
        </div>
        <section id="mision" className='bg-slate-50'>
        <div className='container flex flex-col-reverse md:flex-row items-center px-6-mx-auto-mt-10 space-y-0 md:space-y-0 px-6 mx-auto mt-10 space-y.0'>
            <div className='flex flex-col mb-32 space-y-12 md:w-2/3 text-black font-TTNormsReg font-semibold'>
                <h1 className='max-w-md text-3xl mt-10 text-center md:text-3xl md:text-left font-semibold'>{t("mission.title")}</h1>
                <p className='max-w-sm text-center md:text-left font-TTNormsLight'>{t("mission.mission1")} </p>
            </div> 
            <div className='flex flex-col space-y-8 md:w-1/3 font-TTNormsReg text-black font-semibold'>
              {/* agregar foto */}
            </div>
            
         </div>
        </section>
    </section>
    
  )
}

export default Equipo