import React, {useState} from 'react'; 
import Logo from './../../assets/Logowhite.svg'; 

import { useTranslation } from 'react-i18next';

import {AiOutlineClose} from 'react-icons/ai'; 

import {TiThMenuOutline} from 'react-icons/ti';
import {FaFacebook} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';


const Header = () => {

    const [nav, setNav] = useState(false);

    const [logo, setLogo] = useState(false); 

  
    
    const handleNav = () => {
        setNav(!nav);
        setLogo(!logo);
    }
    const style = { color: "white" ,fontSize: "1.5em"};


    const {t, i18n} = useTranslation();
    const changeLanguage = (language) => {
    i18n.changeLanguage(language);
   } 



    return (
        <div  className=' bg-black flex w-screen justify-between items-center h-24 px-4 fixed z-20  font-CustomOla'>
            <div><a href='#home'>   
                 <img  className={logo ? 'hidden': 'object-scale-down h-40 w-40 '} src={Logo} alt="La Ola Group Logo" />
                </a>
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
                 <li className=' md:text-base hover:text-gray-400'>
                     <a href='https://la-ola-group.notion.site/Novedades-Sobre-Olas-Artificiales-3589e8eecf9e45728e4f34063ba78fee'>{t("nav.news")}</a>     
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
                                <a href='#valores2'>{t("nav.valores")}</a>          
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
                            
                            <li className='hover:text-gray-400 border-b'>
                                <a href='https://la-ola-group.notion.site/Novedades-Sobre-Olas-Artificiales-3589e8eecf9e45728e4f34063ba78fee'>{t("nav.news")}</a>       
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
    
    );

};

export default Header; 
