import React from 'react';
 
import Header from '../../components/Header';

import Tech from '../../components/Tech';

import Equipo from '../../components/Equipo'; 
import Attraction from '../../components/Attraction';
import Contact from '../../components/Contact';

import Main from '../../components/Main';

import Valores from '../../components/Valores';
import Modulos from '../../components/Modulos';


const LandingPageLayout = () => {

    return (
       
        <div className='h-screen w-screen flex flex-col bg-slate-50'>
          <Header/>
          <Main/>
          <Valores/>
          <Tech/>
        
          <Modulos/>
          
          <Attraction/>
          <Equipo/>
          <Contact/>
        </div>
  
        
        
    );
};

export default LandingPageLayout; 