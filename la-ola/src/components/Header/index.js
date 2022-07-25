import React, {useState, useRef} from 'react'; 
import Logo from './../../assets/LOG_logos1-svg.svg'; 
import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Wave from 'react-wavify'; 
//import "./index.css";  does not work with tailwind logic.


//home tecnologia quienes somos atraccion negocio contacto 

const Header = () => {

    const nav = useRef(null);
    //multilengua
  
    const {t, i18n} = useTranslation();
    const changeLanguage = (language) => {
    i18n.changeLanguage(language);
   } 

    const [active, setActive] = useState(false); 
    const onClick = () => {
        setActive(!active);
    };

 
    // window.addEventListener("scroll",(e) => {
    //     if(window.scrollY >=100){
    //         nav.current.classList.add('chcolor')
    //     }
    //     else{
    //         nav.current.classList.remove('chcolor')
    //     }
    // })

    return (
        <header className='bg-white relative '>    
            <div className="max-w-auto mx-auto bg-white">
                <nav ref={nav} className ="bg-white fixed left-0 right-0 w-screen">
                   
                    <div className= "max-w-7xl mx-auto bg-white ">
                        <div className ="flex space-x-60">
                            <div className ="flex items-center">
                                <div>
                                    <img className= "" src={Logo} alt="" />
                                </div>
                            </div>
                           {/* primary nav */}
                            <div className="hidden md:flex justify-between items-center space-x-3"> 
                            
                                <ul className="hidden md:flex justify-between space-x-14 py-2 px-2 text-black font-TTNormsReg">
                                    <li className='no-underline hover:underline'>
                                        <Link to='/home'>Home</Link>   
                                    </li>
                                    <li className='no-underline hover:underline'>
                                        <Link to='/tecnologia'>{t("nav.tecnologia")}</Link>    
                                    </li>
                                    <li className='no-underline hover:underline'>    
                                        <Link to='/quienes somos'>{t("nav.quienes somos")}</Link>    
                                    </li>   
                                    <li className='no-underline hover:underline'>
                                        <Link to='/atraccion'>{t("nav.atraccion")}</Link>       
                                    </li>
                                    <li className='no-underline hover:underline'>
                                        <Link to='/negocio'>{t("nav.negocio")}</Link>       
                                    </li>
                                    <li className='no-underline hover:underline'>
                                        <Link to='/home'>{t("nav.contacto")}</Link>       
                                    </li>
                                </ul> 
                            </div>
                            <div className="md:hidden flex items-center py-4 px-4">
                                    <button className='mobile-menu-button' onClick={onClick}>
                                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox='0 0 24 24' stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" color="black"/>
                                        </svg> 
                                    </button>
                            </div>
                        </div>
                        <div className={`${!active && 'mobile-menu hidden'}`}>
                            
                            <ul className = "block py-2 px-4 text-sm  text-black">
                        
 
                                <li className="hover:bg-gray-800">
                                    <Link className="flex w-full text-base pt-2.5 px-2.5" to='/home'>Home</Link>   
                                </li>
                                <li className="hover:bg-gray-800">
                                    <Link className="flex w-full text-base pt-2.5 px-2.5" to='/tecnologia'>Tecnologia</Link>    
                                </li>
                                <li className="hover:bg-gray-800">    
                                    <Link className="flex w-full text-base pt-2.5 px-2.5" to='/quienes somos'>Quines Somos</Link>    
                                </li>   
                                <li className="hover:bg-gray-800">
                                    <Link className="flex w-full text-base pt-2.5 px-2.5" to='/atraccion'>Atraccion</Link>       
                                </li>
                                <li className="hover:bg-gray-800">
                                    <Link className="flex w-full text-base pt-2.5 px-2.5" to='/negocio'>Negocio</Link>       
                                </li>
                                <li className="hover:bg-gray-800">
                                    <Link className="flex w-full text-base pt-2.5 px-2.5" to='/home'>Contacto</Link>       
                                </li>
                            </ul>
                            <div className='absolute inset-0 flex justify-center items-center z-50'>
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

                            </div>
                            
                        </div>
                       
                    </div>
                </nav>
            </div>
        </header>
    );

};

export default Header; 
