import React, {useState, useRef} from 'react'; 
import Logo from './../../assets/logoblanco.svg'; 
import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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

 
    window.addEventListener("scroll",(e) => {
        if(window.scrollY >=100){
            nav.current.classList.add('chcolor')
        }
        else{
            nav.current.classList.remove('chcolor')
        }
    })

    return (
        <header className='bg-transparent relative '>    
            <div className="max-w-auto mx-auto bg-transparent">
                <nav ref={nav} className ="bg-transparent fixed left-0 right-0">
                    <div className='flex space-x-1 justify-center p-0.5'> 
                        <button onClick={()=> changeLanguage("en")} type="button" className="px-6 py-2 border-2  border-white text-white font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">en</button>
                        <button onClick={()=> changeLanguage("es")} type="button" className="px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">es</button> 
                    </div>
                    <div className= "max-w-7xl mx-auto bg-transparent ">
                        <div className ="flex justify-between">
                            <div className ="flex items-center">
                                <div>
                                    <img className= "object-scale-down h-32 wx-auto" src={Logo} alt="" />
                                </div>
                            </div>
                           {/* primary nav */}
                            <div className="hidden md:flex justify-between items-center space-x-3"> 
                                <ul className="hidden md:flex justify-between space-x-14 py-2 px-4 text-white font-TTNormsReg">
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
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" color="white"/>
                                        </svg> 
                                    </button>
                            </div>
                        </div>
                        <div className={`${!active && 'mobile-menu hidden'}`}>
                            <ul className = "block py-2 px-4 text-sm  text-white"> 
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
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );

};

export default Header; 
