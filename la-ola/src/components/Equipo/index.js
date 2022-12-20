import React from 'react';
import { useTranslation } from 'react-i18next';

import Render from './../../assets/renderPark.webp'

import sideSvg from './../../assets/sidebar.svg'
import {Fade} from 'react-awesome-reveal';


function Equipo() {
    const[t] = useTranslation("translation"); 

  return(
  <Fade triggerOnce>
    <section id="" className='bg-[#0e63ab] flex items-center w-screen justify-center h-48 lg:h-screen '>
   
    
      <div className=" hidden lg:inline-flex text-white font-bold p-10">
        <iframe className=' md:w-[750px] md:h-[450px] lg:w-[900px] lg:h-[600px]' src="https://www.youtube.com/embed/8ArC0N1NC2c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div className='lg:hidden'>
      <iframe width="320" height="170" src="https://www.youtube.com/embed/8ArC0N1NC2c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      

    
        
    </section>
  </Fade>
  )
}

export default Equipo