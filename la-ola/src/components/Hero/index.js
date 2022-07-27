
import React from 'react'; 
import { useTranslation } from 'react-i18next';
import Nav from '../../components/Nav';

export default function Hero() {
  const[t] = useTranslation("translation"); 
  
  return (
      <section className='bg-hero h-screen bg-cover flex flex-col justify-center items-center pb-32 gap-y-6'>
      <br></br>
      <br></br>
      <br></br>
        <div className="flex flex-col h-screen text-6xl text-white text-center bg-center items-center flex-auto justify-center mt-50 ">
          <div className= "mx-auto items-center text-center ">
      
            <h1 className='font-CustomOla justify-right pointer-events-none object-scale-down relative lg:text-7xl md:text-5xl sm-text-5xl text-3xl mb-14 mt-32 px-28'>{t("hero.olas")}</h1>
            <button type="button" className="flex-auto flex-col justify-center px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out">{t("hero.conocenos")}</button>
          </div>
         
      </div>
      
      </section>
  )
}

