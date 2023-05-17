import React, { useState } from 'react'
import destinations from '../data/destinations.json'


function Destination() {
 
  const [planet, setplanet] = useState(destinations[0]);
  const [active, setActive] = useState(1);

  return (
    <div className='fs:bg-destination-desktop  md:bg-destination-desktop ts:bg-destination-tablet bg-destination-mobile bg-no-repeat bg-cover
                    max-w-full items-center text-center mt-0 max-h-full flex  flex-col relative  mx-auto
                    md:text-left md:items-center md:flex md:flex-row md:justify-center
                    ts:items-center'>
      <div className='md:w-[50%] fs:w-[40%]'>
        <div className='flex flex-row w-[221px] justify-center 
                        mt-[88px]
                        md:mt-[200px] md:w-[382px] md:ml-[166px]
                        ts:absolute ts:mt-[136px] ts:ml-6 ts:w-[272px] ts:left-0'>
            <p className='text-[#808080] font-barlowCondensed font-extrabold p-1 text-[16px] tracking-[2.7px]
                          md:text-[28px] md:tracking-[4.72px]
                          ts:text-[20px] ts:tracking-[3.38px]'>01</p>
            <p className='text-[#FFFFFF] font-barlowCondensed  p-1 text-[16px] tracking-[2.7px]
                          md:text-[28px] md:tracking-[4.72px]
                          ts:text-[20px] ts:tracking-[3.38px] ts:ml-0'>PICK YOUR DESTINATION</p>
        </div>
        <div className='
                       md:h-[445px] md:mt-[350px] md:ml-[100px]
                       ts:h-[300px] ts:mt-[220px]
                       fs:ml-[0px]'> 
            <img src={planet.images.png} className="w-[170px] h-[170px] mt-[51px] ml-6
                                                    md:w-[445px] md:h-[445px]
                                                    ts:w-[300px] ts:h-[300px] ts:mt-0" alt="..." />
        </div>
        </div>
        <div className='md:mt-[310px]'>
        <div className="inline-flex  font-barlowCondensed text-[#FFFFFF] 
                        mt-[40px] text-[16px]  ml-4 
                        md:ml-4
                        ts:ml-10" role="group">

            {destinations.map((destination) => (
               <button type="button" key ={destination.id} className={`py-2  mr-8 uppercase
                                                relative cursor-pointer transition-all duration-500 tracking-[2.7px]
                                                before:content-[''] before:absolute before:left-0 before:w-${active === destination.id ? 'full' : '0'}  before:h-[2px] 
                                                before:opacity-${active === destination.id ? '100' : '0'}  before:transition-all before:duration-500 before:bg-white
                                                before:-bottom-1 active:text-[#5ccde4] 
                                                hover:before:w-full hover:before:opacity-100`}
                                                onClick={() => {setplanet(destination); setActive(destination.id);}}>
                                                {destination.name}
              </button>
            ))}
        </div>
        <div className='mt-[50px]
                        md:mt-[5rem] md:ml-4 
                        ts:mt-[50px]
                        fs:mt-[50px] '>
            <h1 className='text-[#FFFFFF] sm:text-6xl text-4xl font-bellefair font-thin md:py-1 uppercase
                           text-[56px]
                           md:text-[100px]
                           ts:text-[80px]'>
           {planet.name} 
            </h1>
        </div>
        <div className='border-b-[2px] border-gray-600 pb-5
                        mt-[25px] 
                        md:ml-4 
                        ts:mt-[50px] 
                        fs:mt-[50px]'>
            <p className='leading-loose font-barlow text-[15px] text-[#D0D6F9]  max-w-[325px]
                          md:text-[18px] md:max-w-[444px]
                          ts:text-[16px] ts:max-w-[573px]'>
                  {planet.description} 
            </p>
        </div>
        <div className='mt-[10px] 
                        md:mb-[5rem] md:justify-start md:ml-4
                        ts:mt-[20px] ts:flex ts:flex-row ts:justify-center
                        fs:mt-[20px] '>
            <div className="pl-10 pr-10
                            md:pl-0 md:ml-0">
                <h1 className='text-[#D0D6F9] sm:text-6xl font-barlowCondensed font-thin md:py-1 uppercase tracking-[2.7px]
                           mt-[20px] text-[16px]
                           md:text-[15px]
                           ts:text-[15px]'>
                  AVG. DISTANCE
                </h1>
                <h2 className='text-[#FFFFFF] sm:text-6xl font-bellefair font-thin md:py-1 uppercase
                           text-[28px]
                           md:text-[28px]
                           ts:text-28px]'>
                  {planet.distance} 
                </h2>
            </div>
            <div className="pl-10 pr-10
                            md:pl-0">
            <h1 className='text-[#D0D6F9] sm:text-6xl font-barlowCondensed font-thin md:py-1 uppercase tracking-[2.7px]
                           mt-[20px] text-[16px]
                           md:text-[15px]
                           ts:text-[15px]'>
              EST. TRAVEL TIME
            </h1>
            <h2 className='text-[#FFFFFF] sm:text-6xl font-bellefair font-thin md:py-1 uppercase
                           text-[28px] pb-[70px]
                           md:text-[28px]
                           ts:text-[28px]'>
              {planet.travel} 
            </h2>
            </div>
        </div>
        </div>
    </div>
  );
}
export default Destination



