
import React from 'react'; 
import { useTranslation } from 'react-i18next';

import foto from './../../assets/slabCity.png';
import logo from './../../assets/logoola.svg';
import buzo from './../..//assets/buzo.png';

export default function Hero() {
  const[t] = useTranslation("translation"); 
  
  return (
    <section id="ola" className='bg-slate-50 pb-60  w-screen'>
      <div className='flex flex-nowrap'>
        <div className='h-auto w-auto flex-auto'>
          <div className='bg-[#0E63AB] h-[688px] w-[688px]'>
            <div className='z-8 relative flex object-scale-down left-24 top-24 w-[841px] h-[869px]'>
                    <img src = {foto} className='h- w-full object-cover sm: scale-50 md:scale-75 lg:scale-90'/>
            </div>
          </div>
        </div>
        <div className='mt-48 p-10 ml-72 h-auto flex flex-wrap	'>
          <div className=' bg-slate-50 flex flex-col md:w-2/3 font-TTNormsReg text-black align-top'>
             <img src = {logo} className='object-scale-down h-40 w-40 '/> 
            <p className='max-w-prose text-center md:text-left md:text-lg font-TTNormsLight'>{t("ola.mainInfo")} </p>
          </div>
        </div>
      </div>
      <div className='flex flex-row flex-nowrap space-y-80 justify-end'>
        <div className='h-full flex-auto content-center '>
          <div className=' flex flex-col flex-wrap justify-between content-center text-start '> 
            <div className='font-BoldItalic sm:text-l md:text-2xl text-[#0E63AB] sm:p-10 md:p-60 bg-yellow mt-80 justify-center  max-w-3xl  '>{t("mission.title")}:<div className='font-TTNormsLight text-black'>{t("mission.mission1")}</div></div>
            <div className='font-BoldItalic sm:text-l md:text-2xl text-[#0E63AB] sm:p-10 md:p-60 justify-center  max-w-3xl'>{t("mission.title2")}:<p className='font-TTNormsLight text-black'>{t("mission.vision")}</p></div>
          </div>
         
          

        </div>
        <div className='h-auto object-cover flex-auto flex-nowrap'>
          <img src={buzo}
          alt='buzoOla'
          />
        </div>
      </div>

    </section>
  )
}

