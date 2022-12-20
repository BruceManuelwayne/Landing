import React from 'react';
import { useTranslation } from 'react-i18next';

import Render from './../../assets/renderPark.webp'

import sideSvg from './../../assets/sidebar.svg'
import {Fade} from 'react-awesome-reveal';


function Equipo() {
    const[t] = useTranslation("translation"); 

  return(
  <Fade triggerOnce>
    <section id="" className='bg-slate-50 flex items-center w-screen justify-center h-screen '>
   
    
      <div className=" text-white font-bold  border shadow-lg p-10">
        <iframe className='md:w-[750px] md:h-[450px] lg:w-[900px] lg:h-[600px]' width="650" height="400" src="https://www.youtube.com/embed/8ArC0N1NC2c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      

    
        
    </section>
  </Fade>
  )
}

export default Equipo