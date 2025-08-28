import React from 'react'

function Liner({name,num}) {
  return (
    <div className='flex gap-10 mt-20 md:mt-0'>
      <div className="div h-[20vh] w-[0.7vw] md:w-1 bg-white rounded-md ">

      </div>
      <div className='w-[18vw] text-white text-[30px] font-[pp1] uppercase '>
        <h1 className='text-[45px] font-[pp]'>{num}.</h1>
        <h1>{name}</h1>
      </div>
    </div>
  )
}

export default Liner
