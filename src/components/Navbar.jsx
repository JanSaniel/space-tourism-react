import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4  text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
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
