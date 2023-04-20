import React from 'react'


const Navbar = () => {
  return (
    
    <div className='max-w-[1440px] flex flex-wrap items-center justify-between mx-auto pt-4 pl-4'>
      <a href="/" class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
      </a>
      <div className='fs:z-10'>
      <hr className="fs:h-px  fs:mr-[-7rem] fs:my-8 fs:w-[35rem] fs:mt-12 fs:bg-gray-200 fs:border-0"/>
      </div>
      <div className="hidden w-full  md:flex md:w-[750px] md:mr-[0px]" id="navbar-default">
        <ul className="font-barlowCondensed flex flex-col p-4 mt-4
                 md:text-[20px] md:ml-0 md:flex-row md:space-x-8 md:items-center md:w-[750px] md:pl-16 md:bg-white md:bg-opacity-[4%] md:backdrop-blur-md md:h-[96px]">
          <li>
            <a href="/" className="block py-2 pl-28 pr-4 text-white bg-blue-700 rounded md:bg-transparent 
                             md:p-4" >00 Home</a></li>
          <li>
            <a href="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent 
                             md:p-4" >01 Destination</a></li>
          <li>
            <a href="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent 
                             md:p-4" >02 Crew</a></li>
          <li>
            <a href="/" className="block py-2 pl-3 pr-9 text-white bg-blue-700 rounded md:bg-transparent 
                             md:p-4" >03 Technology</a></li>
          </ul>
      </div>
    </div>
    
  )
}

export default Navbar
