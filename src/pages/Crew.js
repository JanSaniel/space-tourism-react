import React, {useState} from 'react'
import crews from '../data/crew.json'

export default function Crew() {

  const [crew, setCrew] = useState(crews[0]);
  const [active, setActive] = useState(1);


  return (
    <div  className=' fs:bg-crew-desktop  md:bg-crew-desktop ts:bg-crew-tablet bg-crew-mobile bg-no-repeat bg-cover
                      relative flex flex-col  items-center h-screen w-screen
                      mt-0 
                      md:text-left md:items-start md:justify-start md:h-screen md:w-full
                      ts:items-center ts:h-full 
                      fs:w-[1920px]'>
         <div className='flex flex-row w-[221px] 
                         mt-[88px]
                         md:mt-[200px] md:w-[382px] md:ml-[166px]
                         ts:absolute ts:mt-[136px] ts:ml-6 ts:w-[272px] ts:left-0'>
            <p className='text-[#808080] font-barlowCondensed font-extrabold p-1 pr-4 text-[16px] tracking-[2.7px]
                          md:text-[28px] md:tracking-[4.72px]
                          ts:text-[20px] ts:tracking-[3.38px]'>02</p>
            <p className='text-[#FFFFFF] font-barlowCondensed  p-1 text-[16px] tracking-[2.7px]
                          md:text-[28px] md:tracking-[4.72px]
                          ts:text-[20px] ts:tracking-[3.38px] ts:ml-0'>MEET YOUR CREW</p>
        </div>
        <div className="flex items-center justify-center
                        border-b-[2px] border-gray-600
                        ts:border-0
                        w-[327px] h-[223px] pl-4 mt-8
                        md:ml-[700px] md:mt-[150px] md:w-[568px] md:h-[712px] md:mr-[600px] md:pl-0
                        ts:mt-[620px] ts:w-[456px] ts:h-[572px]
                        fs:ml-[900px] ">
            <div>
                <img src={crew.images.png} className="w-[177.12px] h-[222px] 
                                                    md:w-[568px] md:h-[712px]
                                                    ts:w-[456px] ts:h-[572px] ts:mt-0" alt="..." />
            </div>
        </div>
        <div className="flex space-x-4 mt-[30px]
                        md:absolute md:mt-[700px] md:ml-[165px]
                        ts:absolute ts:mt-[520px]">
            {crews.map((crewHolder) => ( 
                  <button type="button" key ={crewHolder.id}  className={` rounded-full ${active === crewHolder.id ? 'bg-white' : ' bg-gray-500'}                                                                         
                                                                           w-[10px] h-[10px] hover:bg-white`}
                   onClick={() => {setCrew(crewHolder); setActive(crewHolder.id);}}></button>
                ))}
        </div>
        <div className="pl-10 pr-10 text-center
                        ts:absolute ts:mt-[220px]
                        md:text-left md:pl-[165px] md:mt-[350px]">
            <h1 className=' text-gray-500 font-bellefair font-thin uppercase 
                           mt-[30px] text-[18px]
                           md:text-[32px] md:py-1
                           ts:text-[24px]'>
               {crew.role} 
            </h1>
            <h2 className='text-[#FFFFFF] font-bellefair font-thin md:py-1 uppercase
                           text-[24px] 
                           md:text-[56px]
                           ts:text-[40px]'>
              {crew.name} 
            </h2>
            <h3 className='text-[#D0D6F9] font-barlow 
                           text-[15px]  w-[327px] mt-[50px]
                           md:text-[18px] md:mt-4 md:w-[444px] md:py-1 
                           ts:text-[16px] ts:w-[458px]'>
              {crew.bio} 
            </h3>
          </div>
        
    </div>
  )
}
