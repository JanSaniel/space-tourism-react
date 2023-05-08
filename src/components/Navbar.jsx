import React , { useState } from 'react'
import { NavLink } from 'react-router-dom';


const Navbar = () => {

  const normalLink = " ";
  const activeLink = "relative cursor-pointer transition-all duration-500"
                    +"before:content-[''] before:absolute before:left-0 before:w-full before:h-[4px] before:opacity-100 before:duration-500 before:bg-white md:before:-bottom-2 ts:before:-bottom-6";
  const mobileNormalLink = " ";
  const mobileActiveLink = "relative cursor-pointer transition-all duration-500 "
  +" before:content-[''] before:absolute before:right-0 before:w-1 before:h-[30px] before:opacity-100 before:duration-500 before:bg-white ";

  const [nav, setNav] = useState(false);
  const handleNav = () => {
        setNav(!nav);
    };

  
  return (
    
    <div className='max-w-[1440px] flex  items-center justify-between mx-auto 
                    md:pt-4 md:pl-4 
                    ts:pt-0'>
        <NavLink exact to="/" className="flex items-center ml-5 mt-[20px] 
                                         md:mt-5            
                                         ts:mt-1 ts:ml-7">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
        </NavLink>
        <div className='fs:z-10'>
             <hr className="fs:h-px  fs:mr-[-7rem] fs:my-8 fs:w-[35rem] fs:mt-12 fs:bg-gray-200 fs:border-0"/>
        </div>
        <div className="hidden
                        md:flex md:w-[750px] md:mr-[0px] 
                        ts:flex ts:w-[450px] ts:ml-[-40]" 
             id="navbar-default">
            <ul className="font-barlowCondensed flex bg-white bg-opacity-[4%] backdrop-blur-md
                       md:text-[20px] md:ml-0 md:p-4 md:mt-4 md:flex-row md:space-x-8 md:items-center md:w-[750px] md:pl-16 md:h-[96px]
                       ts:text-[18px] ts:ml-0 ts:flex-row ts:space-x-8 ts:items-center ts:w-[450px] ts:pl-10 ts:h-[96px]">
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                       <p className="block  text-white w-full shrink-0 
                                     md:bg-transparent md:p-4 
                                     relative cursor-pointer transition-all duration-500 
                                     before:content-[''] before:absolute before:left-0 before:w-0 before:h-[4px] 
                                     before:opacity-0  before:transition-all before:duration-500 before:bg-white
                                     md:before:-bottom-2 
                                     ts:before:-bottom-6
                                     hover:before:w-full hover:before:opacity-100"> 00 HOME</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/destination" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                       <p className="block  text-white w-full shrink-0 
                                     md:bg-transparent md:p-4 
                                     relative cursor-pointer transition-all duration-500 
                                     before:content-[''] before:absolute before:left-0 before:w-0 before:h-[4px] 
                                     before:opacity-0  before:transition-all before:duration-500 before:bg-white
                                     md:before:-bottom-2 
                                     ts:before:-bottom-6
                                     hover:before:w-full hover:before:opacity-100"> 01 DESTINATION</p>
                    </NavLink>
                </li>                                 
                <li>
                    <NavLink to="/crew" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                       <p className="block  text-white w-full shrink-0 
                                     md:bg-transparent md:p-4 
                                     relative cursor-pointer transition-all duration-500 
                                     before:content-[''] before:absolute before:left-0 before:w-0 before:h-[4px] 
                                     before:opacity-0  before:transition-all before:duration-500 before:bg-white
                                     md:before:-bottom-2 
                                     ts:before:-bottom-6
                                     hover:before:w-full hover:before:opacity-100"> 02 CREW</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/technology" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                       <p className="block  text-white w-full shrink-0 
                                     md:bg-transparent md:p-4 
                                     relative cursor-pointer transition-all duration-500 
                                     before:content-[''] before:absolute before:left-0 before:w-0 before:h-[4px] 
                                     before:opacity-0  before:transition-all before:duration-500 before:bg-white
                                     md:before:-bottom-2 
                                     ts:before:-bottom-6
                                     hover:before:w-full hover:before:opacity-100"> 03 TECHNOLOGY</p>
                    </NavLink>
                </li>                               
            </ul>
      </div>


      <div onClick={handleNav} className='block z-20 ts:hidden md:hidden mr-5 mt-3'>
          {nav ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/></g></svg>
               : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fillRule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg>}
      </div>
      <ul className={nav ?'absolute md:hidden ts:hidden z-10 font-barlowCondensed text-[18px] right-0 top-[0] w-[254px] h-full border-r border-r-gray-900 bg-white bg-opacity-[4%] backdrop-blur-[50px] ease-in-out duration-500'
                         :'font-barlowCondensed text-[18px] top-[0] w-[254px] h-full border-r border-r-gray-900 bg-white bg-opacity-[4%] backdrop-blur-[50px] ease-in-out duration-500 fixed right-[-100%] '}>
            
                <li className='mt-[118px]'>
                <NavLink to="/" className={({ isActive }) => (isActive ? mobileActiveLink : mobileNormalLink)}>
                                <p className="pl-8 h-8 text-white tracking-[3px] 
                                relative cursor-pointer transition-all duration-500 font-medium
                                before:content-[''] before:absolute before:right-0 before:w-1 before:h-0  
                                before:opacity-0 before:duration-500 before:bg-white
                                hover:before:h-[30px] hover:before:opacity-100">00 HOME</p> 
                                </NavLink>
                </li>
                <li className='mt-[25px]'>
                <NavLink to="/destination" className={({ isActive }) => (isActive ? mobileActiveLink : mobileNormalLink)}>
                                <p className=" pl-8 h-8 text-white tracking-[3px] 
                                relative cursor-pointer transition-all duration-500 font-medium
                                before:content-[''] before:absolute before:right-0 before:w-1 before:h-0  
                                before:opacity-0 before:duration-500 before:bg-white
                                hover:before:h-[30px] hover:before:opacity-100">01 DESTINATION</p> 
                                </NavLink>
                </li>
                <li className='mt-[25px]'>
                <NavLink to="/crew" className={({ isActive }) => (isActive ? mobileActiveLink : mobileNormalLink)}>
                                <p className="pl-8 h-8 text-white tracking-[3px] 
                                relative cursor-pointer transition-all duration-500 font-medium
                                before:content-[''] before:absolute before:right-0 before:w-1 before:h-0  
                                before:opacity-0 before:duration-500 before:bg-white
                                hover:before:h-[30px] hover:before:opacity-100">02 CREW</p> 
                                </NavLink>
                </li>
                <li className='mt-[25px]'>
                <NavLink to="/technology" className={({ isActive }) => (isActive ? mobileActiveLink : mobileNormalLink)}>
                                <p className="pl-8 h-8 text-white tracking-[3px] 
                                relative cursor-pointer transition-all duration-500 font-medium
                                before:content-[''] before:absolute before:right-0 before:w-1 before:h-0  
                                before:opacity-0 before:duration-500 before:bg-white
                                hover:before:h-[30px] hover:before:opacity-100">03 TECHNOLOGY</p> 
                                </NavLink>
                </li>
                
               
          </ul>
    </div>
    
  )
}

export default Navbar
