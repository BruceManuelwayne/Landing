import React, {useState}  from 'react';
import Logo from './../../assets/LOG_logos1-svg.svg'; 
import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';



export const Nav = () => {

let [open,setOpen] = useState(false); 

const {t, i18n} = useTranslation();
const changeLanguage = (language) => {
i18n.changeLanguage(language);
} 

  return (
    <nav className=' overflow-hidden flex items-center justify-between max-w-auto mx-auto  px-4 h-16 bg-white fixed left-0 right-0'>
        
        <img src={Logo} className=""/>
        
        {/* save image svg hamburger  */}
        <svg className="w-6 h-6 z-20 fixed right-5 top-6 cursor-pointer lg:hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox='0 0 24 24' stroke="currentColor" onClick={()=> setOpen(!open)}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" color="black"/>
        </svg> 
        <ul className={` backdrop-blur-lg md:pl-10 pr-28 z-10 text-black md:static fixed top-0 md:h-auto h-screen duration-500 ease-linear ${!open ? 'right-[-100%]': 'right-0'}`}>
            <li className='no-underline hover:underline  md:inline-block md:ml-10 ml-5 border-b-2 border-transparent hover:border-white duration-300 md:my-0 my-6 '>
                <Link to='/home'>Home</Link>   
            </li>
            <li className='no-underline hover:underline md:inline-block md:ml-10 ml-5 border-b-2 border-transparent hover:border-white duration-300 md:my-0 my-6'>
                <Link to='/tecnologia'>{t("nav.tecnologia")}</Link>    
            </li>
            <li className='no-underline hover:underline md:inline-block md:ml-10 ml-5 border-b-2 border-transparent hover:border-white duration-300 md:my-0 my-6'>    
                <Link to='/quienes somos'>{t("nav.quienes somos")}</Link>    
            </li>   
            <li className='no-underline hover:underline md:inline-block md:ml-10 ml-5 border-b-2 border-transparent hover:border-white duration-300 md:my-0 my-6'>
                <Link to='/atraccion'>{t("nav.atraccion")}</Link>       
            </li>
            <li className='no-underline hover:underline md:inline-block md:ml-10 ml-5 border-b-2 border-transparent hover:border-white duration-300 md:my-0 my-6'>
                <Link to='/negocio'>{t("nav.negocio")}</Link>       
            </li>
            <li className='no-underline hover:underline md:inline-block md:ml-10 ml-5 border-b-2 border-transparent hover:border-white duration-300 md:my-0 my-6'>
                <Link to='/home'>{t("nav.contacto")}</Link>       
            </li>
        </ul> 
            <button onClick={()=> changeLanguage("en")} type="button" className="px-6 py-2 border-2  border-black text-black font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">en</button>
            <button onClick={()=> changeLanguage("es")} type="button" className="px-6 py-2 border-2 border-black text-black font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">es</button> 
    </nav>

  )
}

export default Nav; 