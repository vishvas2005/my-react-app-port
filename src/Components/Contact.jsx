import React from 'react'
import { FaArrowDownAZ } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";

function Contact() {
  return (
    <div className='h-fit w-full bg-black'>
      <h1 className=' flex gap-2 text-[30px] md:text-[80px] text-white font-[pp1] md:font-[pp] justify-center pt-10'>CONTACT ME <span className='text-[30px] md:text-[40px] font-light mt-2 md:mt-12'> <FaArrowDownAZ /></span></h1>
      <div className="line h-[1.5px] rounded-md  w-[65vw] md:w-[43vw] mx-auto mt-0 md:-mt-2 bg-white "></div>
      <p className='text-[white] font-[pp] text-[15px] md:text-[20px] mt-10 text-center' >"The best ideas come from a simple ‘Hello’!" 👏</p>
     <button className='flex gap-2 p-3 w-40  rounded-full border-[1.5px] text-white uppercase font-[pp1] mt-16 md:mt-20 ml-[27vw] md:ml-[43vw] justify-center'>Contact <span className='mt-1'><IoIosCall /></span></button>
     <div className='h-24 w-full'></div>
    </div>
  )
}

export default Contact
