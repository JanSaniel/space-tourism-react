import React from 'react'

function Home() {
  return (
    <div className='fs:bg-home-desktop  md:bg-home-desktop ts:bg-home-tablet bg-home-mobile bg-no-repeat bg-cover
                    items-center text-center mt-0  flex  flex-col relative  h-screen w-screen
                    md:text-left md:items-start 
                    ts:text-center ts:items-center'>
        <div className='mt-[120px]
                        md:mt-[25rem] md:pl-[9rem] 
                        ts:mt-[170px] 
                        fs:pl-[18rem] '>
            <p className='text-[#D0D6F9] font-barlowCondensed  p-1 text-[16px] tracking-[2.7px]
                            md:text-[28px] md:tracking-[4.72px]
                            ts:text-[20px] ts:tracking-[3.38px]'>
            SO, YOU WANT TO TRAVEL TO
            </p>
        </div>
        <div className='mt-[50px]
                        md:mt-[5rem] md:pl-[9rem] 
                        ts:mt-[50px]
                        fs:pl-[18rem] '>
            <h1 className='text-[#FFFFFF] sm:text-6xl text-4xl font-bellefair font-thin md:py-1
                           md:text-[150px] text-[80px]
                           ts:text-[150px]'>
            SPACE
            </h1>
        </div>
        <div className='mt-[50px] 
                        md:pl-[9rem] 
                        ts:mt-[50px] 
                        fs:pl-[18rem] '>
            <p className='font-barlow text-[15px] text-[#D0D6F9]  w-[327px]
                          md:text-[16px] md:max-w-[444px]
                          ts:text-[16px] ts:max-w-[444px]'>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
            </p>
        </div>
        <button className="absolute mt-[550px] text-[20px] tracking-[1.25px] w-[150px] h-[150px] 
                           rounded-full bg-white font-bellefair   text-sm text-black 
                           md:mt-[28rem] md:text-[32px] md:tracking-[0.751rem] md:w-[274px] md:h-[274px]  md:right-[140px] 
                           ts:mt-[35rem] ts:text-[32px] ts:tracking-[2px] ts:w-[242px] ts:h-[242px] 
                           fs:right-[400px] ">EXPLORE</button>
    </div>
  );
}
export default Home
