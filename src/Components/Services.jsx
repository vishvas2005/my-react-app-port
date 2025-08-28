import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import Names from './Names'

function Services() {
    const name1 = [{name:"web development" , num:"01"},
        {name:"dsa",num:"02"}
    ];
    const name2 = [{name:"programming",num:"03"} ,{name:"designing" ,num:"04"},
    ];
  return (
    <div className='lg:flex gap-20 h-fit lg:h-[60vh] w-full bg-black relative overflow-hidden '>
        <h1 className='flex gap-6 w-[30vw] text-white text-[34px] md:text-[53px] font-[pp] uppercase ml-8 md:ml-14 pt-10 md:pt-36 font-bold'>GRINDSET<span className="mt-2 md:mt-1 -ml-4 md:ml-10 text-[25px] md:text-[32px] -rotate-[30deg]"><FaArrowRightLong /></span></h1>
      <div className='h-[90vh] md:h-[60vh] w-full md:w-[60vw] relative overflow-hidden'>
        <div className='md:flex gap-20 mt-10 md:mt-32'>
            {name1.map(elem=>{
                return <Names key={elem.name} num={elem.num} name={elem.name} />
            })}
        </div>

          <div className='md:flex gap-0 md:gap-20 mt-0 md:mt-24'>
          {name2.map(elem=>{
                return <Names key={elem.name} num={elem.num} name={elem.name} />
            })}
          </div>
      </div>
    </div>
  )
}

export default Services
