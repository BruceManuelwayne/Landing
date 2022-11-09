import React from 'react'
import { useTranslation } from 'react-i18next';
import logo from '../../assets/whiteOla.svg';
import circle1 from '../../assets/numbers/1.svg';
import circle2 from '../../assets/numbers/2.svg';
import circle3 from '../../assets/numbers/3.svg';
import circle4 from '../../assets/numbers/4.svg';
import circle5 from '../../assets/numbers/5.svg';


const Valores = () => {
    const[t] = useTranslation("translation"); 

  return (
    <>
    <div className="bg-[url('/src/assets/valores.png')] bg-cover h-screen w-full text-white">
    
        <div className=' min-h-screen w-full grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 grid-rows-3 p-10 md:p-40 '>
            <div className='grid grid-custom gap-x-6 justify-items-end'>
                <div className='w-10'>
                    <img src={circle1} alt='Circle1'/></div>
                <div className=''>  <span className='font-semibold text-xl'>{t("valores.title1")}</span>
                 <p className='font-TTNormsLight'>{t("valores.sen1")}</p></div>
            </div>
            <div className='grid grid-custom gap-x-6 justify-items-end'>
                <div className='w-10'>
                    <img src={circle2} alt='Circle1'/>
                </div>
                <div>
                    <span className='font-semibold text-xl'>{t("valores.title2")}</span>
                    <p className='font-TTNormsLight'>{t("valores.sen2")}</p>
                </div>  
            </div>
            <div className='grid grid-custom gap-x-6 justify-items-end'>
                <div className='w-10'>
                    <img src={circle3} alt='Circle1'/>
                </div>
                <div>
                    <span className='font-semibold text-xl'>{t("valores.title3")}</span>
                    <p className='font-TTNormsLight'>{t("valores.sen3")}</p>
                </div>
            </div>
            <div className='grid grid-custom gap-x-6 justify-items-end'>
                <div className='w-10'>
                    <img src={circle4} alt='Circle1'/>
                </div>
                <div>
                    <span className='font-semibold text-xl'>{t("valores.title4")}</span>
                    <p className='font-TTNormsLight'>{t("valores.sen4")}</p>
                </div> 
            </div>
            <div className='grid grid-custom gap-x-6 justify-items-end'>
                <div className='w-10'>
                    <img src={circle5} alt='Circle1'/>
                </div>
                <div> 
                    <span className='font-semibold text-xl'>{t("valores.title5")}</span>
                    <p className='font-TTNormsLight'>{t("valores.sen5")}</p>
                </div>
            </div>
            <div className='w-full h-32'>
                <img className='mx-auto align-baseline ' src={logo} alt='whiteLogo'/>
            </div>
        </div>
    </div>

    </>
  )
}

export default Valores