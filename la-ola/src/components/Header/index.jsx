import React, {useState} from 'react'; 
import Logo from './../../assets/Logowhite.svg'; 

import { useTranslation } from 'react-i18next';

import {AiOutlineClose} from 'react-icons/ai'; 

import {TiThMenuOutline} from 'react-icons/ti';
import {FaFacebook} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

//import "./index.css";  does not work with tailwind logic.


//home tecnologia quienes somos atraccion negocio contacto 

const Header = () => {

    const [nav, setNav] = useState(false);

    const [logo, setLogo] = useState(false); 

  
    
    const handleNav = () => {
        setNav(!nav);
        setLogo(!logo);
    }
    const style = { color: "white" ,fontSize: "1.5em"};

    //const nav = useRef(null);
    //multilengua
  
    const {t, i18n} = useTranslation();
    const changeLanguage = (language) => {
    i18n.changeLanguage(language);
   } 

    // const [active, setActive] = useState(false); 
    // const onClick = () => {
    //     setActive(!active);

    // };

 
    // window.addEventListener("scroll",(e) => {
    //     if(window.scrollY >=100){
    //         nav.current.classList.add('chcolor')
    //     }
    //     else{
    //         nav.current.classList.remove('chcolor')
    //     }
    // })

    return (
        <div  className=' bg-black flex w-screen justify-between items-center h-24 px-4 fixed z-20  font-TTNormsLight'>
            <div>
                 <img onClick={handleNav} className={logo ? 'hidden': 'object-scale-down h-40 w-40 '} src={Logo} alt="" />
            </div>
            <ul className='hidden md:flex text-white font-CustomOla md:text-sm'>
                <li className='md:text-base hover:text-gray-400 '>
                    <a href='#home'>HOME</a>    
                 </li>
                 <li className=' md:text-base hover:text-gray-400'>    
                    <a href='#ola'> {t("nav.quienes somos")}</a>
                 </li>
                 <li className=' md:text-base hover:text-gray-400'>
                    <a href='#valores'>{t("nav.valores")}</a>   
                 </li>   
                 <li className=' md:text-base hover:text-gray-400'>
                     <a href='#tech'>{t("nav.tecnologia")} </a>  
                 </li>
                
                 <li className=' md:text-base hover:text-gray-400'>
                     <a href='#ventajas'>{t("nav.negocio")}</a>  
                 </li>
                 <li className=' md:text-base hover:text-gray-400'>
                     <a href='#attraction'>{t("nav.surfpark")}</a>     
                 </li>
                 <li className=' md:text-base hover:text-gray-400   text-blue-400 font-bold '>
                     <a href='#contact'>{t("nav.contacto")}</a>      
                 </li>
            </ul>
            <div className='flex flex-col  md:space-x-4 md:flex-row space-y-2 '>
            <div class=" hidden md:inline-flex p-4">
                <button onClick={()=> changeLanguage("en")} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                    Eng
                </button>
                <button onClick={()=> changeLanguage("es")} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                    Esp
                </button>
            </div>
{/*                 
                <button onClick={()=> changeLanguage("en")} type="button" className="px-6 py-2 border-2  border-white text-white font-medium text-xs leading-tight uppercase rounded-full hover:bg-gray hover:bg-opacity-10 focus:outline-none focus:ring-0 transition duration-150 ease-in-out z-20">en</button>
                <button onClick={()=> changeLanguage("es")} type="button" className="px-6 py-2 border-2  border-white text-white font-medium text-xs leading-tight uppercase rounded-full hover:bg-gray hover:bg-opacity-10 focus:outline-none focus:ring-0 transition duration-150 ease-in-out z-20">es</button>  */}
            </div>
            {/* mobile menu */}
            <div onClick={handleNav} className=' mr-4 mb-2 md:hidden p-4'>
                {nav ? <AiOutlineClose style={style} 
                 size={20} className='absolute z-10'/> :  <TiThMenuOutline style={style} className='absolute z-10' /> }
            </div>

            <div handleNav className={nav ? 'absolute left-0 top-0 w-screen text-white px-4 py-7 flex-col bg-black': 'absolute left-[-100%]'} >
                    <div>
                        <img className='object-scale-down h-32 w-32 ' src={Logo} alt="" />
                    </div>
                    <div class="inline-flex  justify-center p-2">
                            <button onClick={()=> changeLanguage("en")} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                                Eng
                            </button>
                            <button onClick={()=> changeLanguage("es")} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                                Esp
                            </button>
                    </div>
                    
                  
                        <ul  onClick={handleNav} >
                            <li className='hover:text-gray-400 border-b'>
                                <a href='#home'>HOME</a>  
                            </li>
                           <li className='hover:text-gray-400 border-b'>    
                                <a href='#ola'> {t("nav.quienes somos")}</a>    
                            </li>
                            <li className='hover:text-gray-400 border-b'>
                                <a href='#valores'>{t("nav.valores")}</a>          
                            </li>   
                            <li className='hover:text-gray-400 border-b'>
                                <a href='#tech'>{t("nav.tecnologia")} </a>     
                            </li>
                            
                            <li className='hover:text-gray-400 border-b'>
                                <a href='#ventajas'>{t("nav.negocio")}</a>       
                            </li>
                            <li className='hover:text-gray-400 border-b'>
                                <a href='#attraction'>{t("nav.surfpark")}</a>       
                            </li>
                            <li className='hover:text-gray-400 border-b   text-blue-400 font-bold '>
                                <a href='#contact'>{t("nav.contacto")}</a>       
                            </li>
                        </ul>
                        <div className='flex justify-between my-6 p-4'>
                            < a href='https://www.facebook.com/laolagroup'>
                            <FaFacebook style={style} className='icon'/> 
                            </a>
                           
                            <a href='https://www.youtube.com/@laolagroup9425'>
                            <FaYoutube style={style} className='icon'/>
                            </a>
                            <a href='https://www.instagram.com/laolagroup/?hl=es'>
                            <FaInstagram style={style} className='icon'/>
                            </a>
                            <a href='https://www.linkedin.com/company/la-ola-group/'>
                            <FaLinkedin style={style} className='icon'/>
                            </a>
                            
                        </div>
                      
             </div>
              
            
        </div>
        // <header className='bg-black sticky top-0 overflow-hidden'>    
        //     <div className='max-w-auto mx-auto bg-black sticky top-0 overflow-hidden'>
        //         <nav ref={nav} className ="bg-black fixed left-0 right-0 w-screen">
        //             <div className= "max-w-7xl mx-auto bg-black ">
        //                 <div className ="flex space-x-60 sticky">
        //                     <div className ="flex items-center">
        //                         <div>
        //                             <img className='object-scale-down h-40 w-40' src={Logo} alt="" />
        //                         </div>
        //                     </div>
        //                    {/* primary nav */}
        //                     <div className="hidden md:flex justify-between items-center space-x-3"> 
                            
        //                         <ul className="hidden md:flex justify-between space-x-14 py-2 px-2 text-white font-TTNormsReg">
        //                             {/* hover:underline underline-offset-4 decoration-wavy */}
        //                             <li className='hover:text-gray-400'>
        //                                 <Link to='/home'>Home</Link>   
        //                             </li>
        //                             <li className='hover:text-gray-400'>
        //                                 <Link to='/tecnologia'>{t("nav.tecnologia")}</Link>    
        //                             </li>
        //                             <li className='hover:text-gray-400'>    
        //                                 <Link to='/quienes somos'>{t("nav.quienes somos")}</Link>    
        //                             </li>   
        //                             <li className='hover:text-gray-400'>
        //                                 <Link to='/atraccion'>{t("nav.atraccion")}</Link>       
        //                             </li>
        //                             <li className='hover:text-gray-400'>
        //                                 <Link to='/negocio'>{t("nav.negocio")}</Link>       
        //                             </li>
        //                             <li className='hover:text-gray-400'>
        //                                 <Link to='/home'>{t("nav.contacto")}</Link>       
        //                             </li>
        //                         </ul> 
        //                     </div>
        //                     <div className="md:hidden flex items-center py-4 px-4 bg-transparent ">
        //                             <button className='mobile-menu-button mr-5' onClick={onClick}>
        //                                 <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox='0 0 24 24' stroke="currentColor">
        //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" color="black"/>
        //                                 </svg> 
        //                             </button>
        //                     </div>
        //                 </div>
        //                 <div className={`${!active && 'mobile-menu hidden'} md:hidden bg-white`}>
        //                    <div className='relative bg-white'></div>
        //                     <div className='relative h-48 bg-white'>
        //                                 <Wave mask="url(#mask)" fill="#1277b0" options={{
        //                                     height: 20,
        //                                     amplitude: 40,
        //                                     speed: 0.10,
        //                                     points: 3
        //                                 }} >
        //                                     <defs>
        //                                     <linearGradient id="gradient" gradientTransform="rotate(90)">
        //                                         <stop offset="0" stopColor="white" />
        //                                         <stop offset="0.4" stopColor="black" />
        //                                     </linearGradient>
        //                                     <mask id="mask">
        //                                         <rect x="0" y="0" width="2000" height="200" fill="url(#gradient)"  />
        //                                     </mask>
        //                                     </defs>
        //                                 </Wave>

        //                     </div>
        //                         <ul className = "block py-2 px-4  text-sm-olatext-black absolute inset-y-10 inset-x-0 ">
    
        //                             <li className="hover:bg-transparent">
        //                                 <Link className="flex w-full text-base pt-2.5 px-2.5 hover:underline" to='/home'>Home</Link>   
        //                             </li>
        //                             <li className="hover:bg-transparent">
        //                                 <Link className="flex w-full text-base pt-2.5 px-2.5 hover:underline" to='/tecnologia'>Tecnologia</Link>    
        //                             </li>
        //                             <li className="hover:bg-transparent">    
        //                                 <Link className="flex w-full text-base pt-2.5 px-2.5 hover:underline" to='/quienes somos'>Quines Somos</Link>    
        //                             </li>   
                        
        //                             <li className="hover:bg-transparent">
        //                                 <Link className="flex w-full text-base pt-2.5 px-2.5 hover:underline" to='/atraccion'>Atraccion</Link>       
        //                             </li>
        //                             <li className="hover:bg-white">
        //                                 <Link className="flex w-full text-base pt-2.5 px-2.5 hover:underline" to='/negocio'>Negocio</Link>       
        //                             </li>
        //                             <li className="hover:bg-transparent">
        //                                 <Link className="flex w-full text-base pt-2.5 px-2.5 hover:underline" to='/home'>Contacto</Link>       
        //                             </li>
                            
        //                         </ul>
                            
                                
        //                     </div>
                        
        //                 </div>
        //             </nav>
        //     </div>
        // </header>
    );

};

export default Header; 
