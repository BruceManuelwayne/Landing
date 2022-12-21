import React from 'react';
import { useTranslation } from 'react-i18next';

import Render from './../../assets/renderPark.webp'

import sideSvg from './../../assets/sidebar.svg'
import {Fade} from 'react-awesome-reveal';


function Equipo() {
    const[t] = useTranslation("translation"); 

  return(
  <Fade triggerOnce>
   <section id='ventajas' className='w-screen bg-[#0e63ab] p-6'>
   <div className="flex flex-col items-center w-2/3 mx-auto ">
	
	<div className="relative h-0 overflow-hidden max-w-full w-full" 
		  style={{paddingBottom:'56.25%'}}>
		<iframe
       		src="https://www.youtube.com/embed/8ArC0N1NC2c"
            frameborder="0"
            allowfullscreen
            class="absolute top-0 left-0 w-full h-full"
        ></iframe>
	</div>
</div>  
   </section>
  </Fade>
  )
}

export default Equipo