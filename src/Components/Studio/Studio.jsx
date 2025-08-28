import React from 'react'
import MySplineScene from './MySplineScene'
import Footer from '../Footer'
import { FaArrowRightLong } from 'react-icons/fa6'
import Droper from './Droper'

function Studio() {
  return <>
    <div className='h-fit w-full bg-black '>
     <h1 className='text-white pt-36 mx-auto text-[18px] lg:text-[35px] w-[80vw] lg:w-[60vw] text-center font-[pp]'>Hi, I’m Vishvas — a Freelance Web Developer who builds modern, fast & scalable websites for startups and businesses.</h1>
     <div className='flex'>
     <img className='h-[20vh] lg:h-[50vh] mt-10 ml-[16vw] grayscale rounded-md' src="https://i.imgur.com/lFtLJLf.jpeg" alt="" />
     <h1 className='lg:relative absolute text-white text-[24px] lg:text-[40px] font-[pp] mt-[5vh] lg:mt-[20vh] ml-[60vw] lg:ml-10'>How i made it?</h1>
     <p className='text-gray-400 text-[18px] ml-20 lg:-ml-[19.5vw] mt-[10vh] lg:mt-[28vh] font-[400] font-[pp]'>With</p>
     <p className='text-yellow-200 text-[15px] lg:text-[25px] -ml-[13vw] lg:-ml-[3vw] mt-[15vh] lg:mt-[20vh] lg:mt-[32vh] font-[400] font-[pp]'>Passion</p>
     <p className='text-gray-400 text-[18px] lg:text-[20px] -ml-[80vw] lg:-ml-[2.9vw] mt-[38vh] font-[400] font-[pp]'>Hardwork</p>
     <p className='text-gray-400 text-[18px] lg:text-[20px] ml-[3.5vw]  mt-[28vh] lg:mt-[31vh] font-[400] font-[pp]'>Luck</p> 
     <p className='text-red-400 text-[18px] lg:text-[25px] ml-[3.5vw]  mt-[34vh] lg:mt-[34vh] font-[400] font-[pp]'>Consistency</p>
     <p className='text-gray-400 text-[18px] lg:text-[20px] -ml-[3.5vw] mt-[25vh] lg:mt-[29vh] font-[400] font-[pp]'>Failure</p>
     </div>
    </div>
    <div className='bg-black h-fit'>
     <h1 className=' text-white text-[30px] lg:text-[40px] pt-40 mx-auto w-[52vw] text-center font-[pp]'>More than <span className='text-[30px] lg:text-[50px] font-light text-gray-400'>
     100+</span> customers</h1>
     <div className='h-fit'>
     <Droper/>
     </div>
    </div>
    <Footer/>
    </>
}

export default Studio
