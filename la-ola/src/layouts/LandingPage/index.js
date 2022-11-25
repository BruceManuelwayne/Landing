import React from 'react'; 
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Hero2 from '../../components/Hero2';
import Tech from '../../components/Tech';
import Machine from '../../components/Machine';
import Equipo from '../../components/Equipo'; 
import Attraction from '../../components/Attraction';
import Contact from '../../components/Contact';

import Main from '../../components/Main';
import Render from '../../components/Render';
import Valores from '../../components/Valores';
import Modulos from '../../components/Modulos';
import { Fade } from 'react-awesome-reveal';
 

const LandingPageLayout = () => {

    return (
        <Fade triggerOnce cascade damping={0.8}>
            <div className='h-screen w-screen flex flex-col '>
        <Header/>
     
        <Main/>
          <Hero/>
          <Hero2/>
          <Render/>
          <Valores/>
        
          
          
         
  
          <Machine/>
      
          <Tech/>
          <Modulos/>
      
          <Equipo/>
          <Attraction/>
          <Contact/>

     
          
        </div>
        </Fade>
        
        
    );
};

export default LandingPageLayout; 