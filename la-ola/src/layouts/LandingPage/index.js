import React from 'react'; 
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Tech from '../../components/Tech';
import Machine from '../../components/Machine';
import Equipo from '../../components/Equipo'; 
import Attraction from '../../components/Attraction';
import Contact from '../../components/Contact';
import Nav from '../../components/Nav';


const LandingPageLayout = () => {

    return (
        <div className='h-screen flex flex-col '>
            <Nav/>
            <Hero/>
            <Tech/>
            <Machine/>
            <Equipo/>
            <Attraction/>
            <Contact/>
        </div>
        
    );
};

export default LandingPageLayout; 