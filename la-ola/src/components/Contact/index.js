import React from 'react';
import { useTranslation } from 'react-i18next';
import {AiOutlineLinkedin} from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai';
import Logo from './../../assets/LOG_logos1-svg.svg'; 
import Wave from 'react-wavify'; 
import {Fade} from 'react-awesome-reveal';


function Contact() {
    const[t] = useTranslation("translation")

  return ( 
  <Fade triggerOnce cascade className='bg-slate-50'>
  <section id="contact" className='bg-slate-50 pb-0 mb-0 h-auto w-screen'>
    <div className='container flex content-center items-center flex-col-reverse md:flex-row items center px-6-mx-auto-mt-10 space-y-0 md:space-y-0 px-6 mx-auto mt-10 space-y.0'>
    <div className=' flex flex-col mb-32 space-y-1 content-center items-center md:w-1/2 text-white font-semibold font-TTNormsLight'>
      <div><img src={Logo} alt='' className=" h-60 scale-90 md:scale-100 "/></div>
      <div>
        <p className='max-w-md text-justify md:text-right ml-5 text-[#0E63AB] '>{t("contact.copy")} </p>
      </div>
      <div className='flex flex-row mx-auto'>
          <button className='w-12 h-12 mt-4'>
          <a href = "https://ar.linkedin.com/company/la-ola-group" rel="noopener"><AiOutlineLinkedin className='w-12 h-12 text-[#0E63AB]'/>
          </a>
          </button>
          <button className='w-12 h-12 mt-4'>
            <a href = "https://www.instagram.com/laolagroup/?hl=es-la" target="_blank" ><AiOutlineInstagram className='w-12 h-12 text-[#0E63AB]'/></a>
          </button>
      </div>
        <p className='text-center space-y-10 mx-auto mt-10 text-[#0E63AB]'>Info@laolagroup.com</p> 
    </div>
    <div className=' flex flex-col mb-32 space-y-12 w-full md:w-1/2  text-blue-wave font-semibold font-TTNormsReg'> 
 
      <div className='rounded overflow-hidden'> 
        
        <iframe 
          
          src="https://app.fillout.com/t/5DAFLVLYxwus"
          width="100%"
          height="600px"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="Interesadosv2"
          overflow="hidden"
     
          >
        </iframe>


      
       </div>
    
    </div>

  </div>
  <Wave mask="url(#mask)" fill="#0762aa" options={{
     height: 10,
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
  </Fade>
  
  )
 
}

export default Contact