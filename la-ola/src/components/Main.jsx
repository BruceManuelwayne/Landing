import React from 'react'
import videoBg from '../assets/VideoBackground.mp4';
import { useTranslation } from 'react-i18next';
import keepWet from './../assets/keepwet.png'; 


const Main = () => {
    const[t] = useTranslation("translation"); 

  return (
    <div className='main bg-black'>
        <video src={videoBg}  loop muted controles/>
        <div className='bg black w-full  flex flex-row justify-center align-middle items-center mt-20'>
            <div className=' bg-black content w-full h-full flex flex-col ml-10'>
                <h1 className=' bg-black font-TTNormsReg font-bold ml-6 mt-5 text-4xl text-white' >{t("hero.olas")}</h1>
                <h1 className=' bg-black   font-TTNormsReg font-bold ml-6 text-4xl text-white'>{t("hero.olas2")}</h1>
            </div>
            <div className='bg-black justify-center items-center mr-10'>
            <img className='' src={keepWet} alt="" />
            </div>
        </div>
        
    </div>
  )
}

export default Main