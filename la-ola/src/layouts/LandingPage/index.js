import React from 'react'; 
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Tech from '../../components/Tech';
import Machine from '../../components/Machine';
import Equipo from '../../components/Equipo'; 
import Attraction from '../../components/Attraction';
import Contact from '../../components/Contact';
import Nav from '../../components/Nav';
import Main from '../../components/Main';
import Render from '../../components/Render';
import Valores from '../../components/Valores';


const LandingPageLayout = () => {

    return (
        <div className='h-screen w-full flex flex-col '>
            <Header/>
            <Main/>
            <Hero/>
            <Render/>
            <Valores/>
            <Tech/>
            <Machine/>
            <Equipo/>
            <Attraction/>
            <Contact/>
        </div>
        
    );
};

export default LandingPageLayout; 