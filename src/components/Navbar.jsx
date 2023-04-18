import React from 'react'


const Navbar = () => {
  return (

    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4  text-white'>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
        </div>
        <ul className='flex'>
          <li className='flex-none p-4'>00 Home</li>
          <li className='flex-none p-4'>01 Destination </li>
          <li className='flex-none p-4'>02 Crew</li>
          <li className='flex-none p-4'>03 Technology</li>
        </ul>
    </div>
    
  )
}

export default Navbar
