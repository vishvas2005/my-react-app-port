import React from 'react'

function Names({name , num}) {
  return <>
    <div>
      <h1 className='text-white uppercase w-[80vw] md:w-full text-[23px] md:text-[38px] font-[pp1] mt-20 md:mt-0 ml-10 md:ml-0'><span className=' text-[33px] md:text-[35px]'>{num}</span>. <span className='ml-2 md:ml-2'>{name}</span> </h1>
      <div className="line h-[2px] bg-white w-[80vw] ml-10 md:ml-0 md:w-[41vw] mt-4 absolute"></div>
    </div>
    
    </>
}

export default Names
