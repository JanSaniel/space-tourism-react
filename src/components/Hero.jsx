import React from 'react';

const Hero = () => {
  return (
      <div className='max-w-[1440px] items-center text-center mt-[1rem] h-screen flex flex-wrap flex-col relative  mx-auto
                      md:text-left md:items-start
                      ts:text-center ts:items-center '>
        <div className='md:mt-[10rem] md:pl-[9rem] ts:mt-[100px] mt-[50px]'>
          <p className='text-[#D0D6F9] font-barlowCondensed  p-1 text-[16px] tracking-[2.7px]
                          md:text-[28px] md:tracking-[4.72px]
                          ts:text-[20px] ts:tracking-[3.38px]'>
            SO, YOU WANT TO TRAVEL TO
          </p>
        </div>
        <div className='md:mt-[5rem] md:pl-[9rem] ts:mt-[50px] mt-[50px]'>
          <h1 className='text-[#FFFFFF] sm:text-6xl text-4xl font-bellefair font-thin md:py-1
                         md:text-[150px] text-[80px]
                         ts:text-[150px]'>
            SPACE
          </h1>
        </div>
       <div className='mt-[50px] md:pl-[9rem] ts:mt-[50px] '>
          <p className='md:max-w-[444px] text-xl  font-barlow text-[15px] text-[#D0D6F9] ts:max-w-[444px] max-w-[327px]
                        md:text-[16px]
                        ts:text-[16px]'>
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <button className="absolute mt-[450px] text-[20px] tracking-[1.25px] w-[150px] h-[150px] 
                           rounded-full bg-white font-bellefair   text-sm text-black 
                           md:mt-[15rem] md:text-[32px] md:tracking-[0.751rem] md:w-[274px] md:h-[274px]  md:right-[150px] 
                           ts:mt-[30rem] ts:text-[32px] ts:tracking-[2px] ts:w-[242px] ts:h-[242px] ">
            EXPLORE
        </button>
      </div>
  );
};

export default Hero;