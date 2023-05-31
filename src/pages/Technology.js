import React, {useState}  from 'react'
import techs from '../data/technology.json'
import useWindowSize from '../components/useWindowSize';

export default function Technology() {

  const [tech, setTech] = useState(techs[0]);
  const [active, setActive] = useState(1);
  const windowSize = useWindowSize()

  return (
    <div  className=' bg-technology-mobile fs:bg-technology-desktop  md:bg-technology-desktop ts:bg-technology-tablet bg-no-repeat bg-cover
                      relative flex flex-col items-center text-center
                      w-full h-screen'>
        <div className=' font-barlowCondensed text-[16px] tracking-[2.7px]
                         ts:text-[20px] ts:tracking-[3.38px]
                         md:text-[28px] md:tracking-[4.72px]
                         flex flex-row 
                         w-[221px]  mt-[88px]
                         ts:w-full ts:mt-[136px]
                         md:mt-[200px]  md:ml-[10px]'>
            <p className='text-[#808080]  font-extrabold
                          p-1 pr-4
                          ts:pl-8
                          md:pl-40'>
                            03</p>
            <p className='text-[#FFFFFF]
                          p-1'>
                            SPACE LAUNCH 101</p>
        </div>
        <div className='md:flex md:flex-row 
                        md:w-full md:mt-[10px]'>
            <div className="md:flex md:flex-row md:order-3 
                            w-full mt-8 
                            ts:mt-10 
                            md:mt-0 md:justify-end">
                 { windowSize.width < 1040 ?
                    <div>
                    <img src={tech.images.landscape} className="w-full h-[170px]
                                                                ts:h-[310px]" alt="..."/> </div> :
                    <div>
                    <img src={tech.images.portrait} className="md:h-[527px]  md:w-[515px]" alt="..."/> 
                    </div>
                  }
            </div>
            <div className="flex space-x-4 justify-center 
                            md:flex-col md:items-end md:space-y-8 md:order-1 md:justify-start
                            font-bellefair text-[16px] font-thin 
                            mt-[30px] 
                            md:mt-20 md:pl-40">
                    {techs.map((techHolder) => ( 
                      
                  <button type="button" key ={techHolder.id}  className={`rounded-full border-gray-500 border-[1px]
                                                                        ${active === techHolder.id ? 'bg-white text-black ' : ' text-white '}  
                                                                        hover:bg-white hover:text-black                                                                 
                                                                         w-[40px] h-[40px]
                                                                         ts:w-[60px] ts:h-[60px]
                                                                         md:w-[80px] md:h-[80px]`}
                          onClick={() => {setTech(techHolder); setActive(techHolder.id);}}
                  >{techHolder.id} </button>
                  
                ))}
            </div>
            <div className="text-center
                            md:text-left 
                            flex flex-col justify-center items-center 
                            md:items-start md:justify-start md:order-2
                            w-full
                            md:mt-20 md:pl-20">
                <h1 className='font-barlowCondensed text-[#D0D6F9] text-[16px] tracking-[2.36px] font-thin uppercase 
                               ts:tracking-[2.7px]
                               mt-[30px] md:mt-0'>
                               THE TERMINOLOGY...
                </h1>
                <h2 className='font-bellefair text-[#FFFFFF] text-[24px] font-thin  uppercase
                               ts:text-[40px]
                               md:text-[56px]
                               mt-3'>
                          {tech.name} 
                </h2>
                <div className='w-[327px]
                                ts:w-[458px]
                                md:w-[440px]'>
                    <h3 className='font-barlow text-[#D0D6F9] text-[15px]
                                   ts:text-[16px]
                                   md:text-[18px]
                                   mt-5'>
                        {tech.description} 
                    </h3>
                </div>
            </div>
          </div>
    </div>
  )
}
