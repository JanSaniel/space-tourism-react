import React from 'react';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-left flex flex-col justify-center'>
        <p className='md:text-[28px] text-[#D0D6F9] font-barlowCondensed  p-1'>
            SO, YOU WANT TO TRAVEL TO
        </p>
        <h1 className='md:text-[150px] sm:text-6xl text-4xl  font-bellefair font-thin md:py-1'>
          SPACE
        </h1>
        <p className='max-w-[444px] md:text-[18px] text-xl  font-barlow text-[#D0D6F9]'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg>
  <span class="sr-only">Icon description</span>
</button>
      </div>
    </div>
  );
};

export default Hero;