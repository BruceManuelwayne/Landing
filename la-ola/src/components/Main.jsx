import React from 'react'
//import videoBg from '../assets/VideoBackground.mp4';
import { useTranslation } from 'react-i18next';
import keepWet from './../assets/keepwet.png'; 


const Main = () => {
    const[t] = useTranslation("translation"); 

  return (
    <div className='w-full h-screen relative'>
      {/* <video src={videoBg} 
        className = 'w-full h-full object-cover' 
        
        muted
        loop
       
      />  */}
      <div className='bg-black absolute p-5 inset-x-0 bottom-0 w-full h-50 z-10 '> 
        <div className='bg-black w-full flex flex-row space-x-3 justify-around items-center '>
            <div className=' bg-black  h-full flex flex-col space-y-0 mt-3 w-1/2 '>
                <h1 className=' bg-black font-ExtraBlack  font-bold ml-6 text-sm  md:text-xl lg:text-3xl xl:text-4xl  text-white' >{t("hero.olas")}</h1>
                <h1 className=' bg-black font-ExtraBlack font-bold ml-6 text-sm md:text-xl lg:text-3xl xl:text-4xl  text-white'>{t("hero.olas2")}</h1>
            </div>
            <div className='bg-black w-1/2 '>
               <img className=' object-contain ' src={keepWet} alt="" />
            </div>
        </div>

      </div>
      
      
        {/* <video src={videoBg}  loop muted/>
        <div className='bg black w-full  flex flex-row justify-center align-middle items-center '>
            <div className=' bg-black content w-full h-full flex flex-col ml-10'>
                <h1 className=' bg-black font-ExtraBlack font-bold ml-6 mt-5 text-4xl text-white' >{t("hero.olas")}</h1>
                <h1 className=' bg-black   font-ExtraBlack font-bold ml-6 text-4xl text-white'>{t("hero.olas2")}</h1>
            </div>
            <div className='bg-black justify-center items-center mr-10'>
            <img className='' src={keepWet} alt="" />
            </div>
        </div> */}
        
    </div>
  )
}

export default Main