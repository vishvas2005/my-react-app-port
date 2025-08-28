import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

function Parts() {
  return <>    <div className='h-fit w-[50vw] bg-red-400 ml-[10vw] lg:ml-20 mt-20 rounded-xl overflow-hidden'>
     <img src="./studio.png" alt="" />
      <a href="https://vishvas2005.github.io/projects/"><h1 className='flex gap-3 underline hover:cursor-pointer text-[25px] lg:text-[50px] text-white absolute ml-[35vw] lg:ml-[53vw] mt-[5vw] lg:mt-[0vw] lg:-mt-[27vw] uppercase'> sunshine<span className=" pt-[1vh] lg:pt-4 text-[18px] lg:text-[37px]  -rotate-[30deg]"><FaArrowRightLong /></span></h1></a>
    </div>
    <div className='h-fit w-[50vw] ml-[45vw]  rounded-xl overflow-hidden mt-20'>
    <img src="./warriror.png" alt="" />
      <a href="https://vishvas2005.github.io/warriros/"><h1 className='flex gap-3 underline hover:cursor-pointer text-[25px] lg:text-[50px] text-white absolute -ml-[20vw] lg:-ml-[0vw] lg:ml-[53vw] mt-[5vw] lg:mt-[0vw] lg:-mt-[27vw] uppercase'>Warriors <span className=" pt-[1vh] lg:pt-4 text-[18px] lg:text-[37px]  -rotate-[30deg]"><FaArrowRightLong /></span></h1></a>
    </div>
    <div className='h-fit w-[50vw] ml-[10vw] lg:ml-20 mt-20 rounded-xl overflow-hidden'>
     <img src="./pro.png" alt="" />
      <a href="https://vishvas2005.github.io/vishvas/"><h1 className='flex gap-3 underline hover:cursor-pointer text-[25px] lg:text-[50px] text-white absolute ml-[35vw] lg:ml-[53vw] mt-[5vw] lg:mt-[0vw] lg:-mt-[27vw] uppercase'> PORtfolio<span className="  pt-[1vh] lg:pt-4 text-[18px] lg:text-[37px]  -rotate-[30deg]"><FaArrowRightLong /></span></h1></a>
    </div>
    </>

}

export default Parts
