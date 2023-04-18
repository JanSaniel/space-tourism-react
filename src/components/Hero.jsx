import React from 'react';

const Hero = () => {
  return (
    <div className='text-white'>
      
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-left flex flex-col justify-center relative'>
        <p className='md:text-[28px] text-[#D0D6F9] font-barlowCondensed  p-1'>
            SO, YOU WANT TO TRAVEL TO
        </p>
        <h1 className='md:text-[150px] sm:text-6xl text-4xl  font-bellefair font-thin md:py-1'>
          SPACE
        </h1>
        <p className='max-w-[444px] md:text-[18px] text-xl  font-barlow text-[#D0D6F9]'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        <button class=" absolute w-72 h-72 rounded-full bg-white hover:bg-red-500 text-black right-0">
            Explore
        </button>
      </div>
    </div>
  );
};

export default Hero;