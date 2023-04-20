import React from 'react';

const Hero = () => {
  return (
      <div className='max-w-[1440px] mt-[1rem] h-screen mx-auto text-left flex flex-wrap flex-col relative'>
        <div className='mt-[10rem]'>
          <p className='md:text-[28px] text-[#D0D6F9] font-barlowCondensed  p-1'>
            SO, YOU WANT TO TRAVEL TO
          </p>
        </div>
        <div className='mt-[5rem]'>
        <h1 className='md:text-[150px] text-[#FFFFFF] sm:text-6xl text-4xl font-bellefair font-thin md:py-1'>
          SPACE
        </h1>
        </div>
       <div className='mt-[5rem]'>
        <p className='max-w-[444px] md:text-[18px] text-xl  font-barlow text-[#D0D6F9]'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>
        <button class=" absolute w-72 h-72 rounded-full bg-white font-bellefair md:text-[32px] tracking-[0.751rem] text-sm text-black mt-[15rem] md:right-[150px]">
            EXPLORE
        </button>
      </div>
  );
};

export default Hero;