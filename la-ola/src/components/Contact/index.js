import React from 'react';
import { useTranslation } from 'react-i18next';
import {AiOutlineLinkedin} from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai';
import Logo from './../../assets/logoblanco.svg'; 
import Wave from 'react-wavify'; 

function Contact() {
    const[t] = useTranslation("translation")

  return ( 
  <section id="contact" className='bg-black pb-0 mb-0'>
    <div className='container flex flex-col-reverse md:flex-row intems center px-6-mx-auto-mt-10 space-y-0 md:space-y-0 px-6 mx-auto mt-10 space-y.0'>
    <div className=' flex flex-col mb-32 space-y-1 md:w-1/2 text-white font-semibold font-TTNormsLight'>left
      <div><img src={Logo} className="h-72"/></div>
      <div>
        <p className='max-w-md text-justify md:text-right ml-5 '>{t("contact.copy")} </p>
      </div>
      <div className='flex flex-row mx-auto'>
          <button className='w-12 h-12 mt-4'>
          <a href = "https://ar.linkedin.com/company/la-ola-group" rel="noopener"><AiOutlineLinkedin className='w-12 h-12'/>
          </a>
          </button>
          <button className='w-12 h-12 mt-4'>
            <a href = "https://www.instagram.com/laolagroup/?hl=es-la" target="_blank" ><AiOutlineInstagram className='w-12 h-12'/></a>
          </button>
      </div>
        <p className='text-center space-y-10 mx-auto mt-10'>Info@laolagroup.com</p> 
    </div>
    <div className=' flex flex-col mb-32 space-y-12 md:w-1/2 text-white font-semibold font-TTNormsReg'> right</div>

  </div>
  <Wave mask="url(#mask)" fill="#1277b0" options={{
     height: 20,
     amplitude: 40,
     speed: 0.10,
     points: 3
  }} >
    <defs>
      <linearGradient id="gradient" gradientTransform="rotate(90)">
        <stop offset="0" stopColor="white" />
        <stop offset="0.5" stopColor="black" />
      </linearGradient>
      <mask id="mask">
        <rect x="0" y="0" width="2000" height="200" fill="url(#gradient)"  />
      </mask>
    </defs>
  </Wave>

  </section>
  
  )
 
}

export default Contact