import React from 'react'

export const Mv = () => {
  return (
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
  )
}
