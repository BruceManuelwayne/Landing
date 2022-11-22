import React from 'react'
import { useTranslation } from 'react-i18next';
import buzo from './../..//assets/buzo.png';
import sideSvg from './../../assets/sidebar.svg'

const Hero2 = () => {

    const[t] = useTranslation("translation"); 

  return (
    <div className='flex flex-row bg-slate-50 '>
        <div className='relative left-0  top-28 md:top-32 lg:top-44 xl:mt-24 '>
          <img src={sideSvg} alt='sidedetail' className=' scale-150'/>
      </div>
     
    <div className='h-full flex p-10 '>
  
        
      <div className=' flex flex-wrap items-center align-middle justify-center text-start space-y-2 lg:space-y-0'> 
        <div className='font-BoldItalic  pb-2 xs:text-base sm:text-l md:text-2xl text-[#0E63AB] sm:p-8  bg-yellow  justify-center  max-w-3xl  '>{t("mission.title")}:<div className='font-TTNormsLight text-black'>{t("mission.mission1")}</div></div>
        <div className='font-BoldItalic  pb-2 xs:text-base sm:text-l md:text-2xl text-[#0E63AB] sm:p-8  justify-center  max-w-3xl'>{t("mission.title2")}:<p className='font-TTNormsLight text-black'>{t("mission.vision")}</p></div>
      </div>
    
      

    </div>
    <div className='h-auto object-cover flex-auto'>
      <img src={buzo}
      alt='buzoOla'
      />
    </div>
</div> 
  )
}

export default Hero2