import React from 'react'
import { CiInstagram } from 'react-icons/ci';
import { Link, Route, Routes } from 'react-router-dom';
import Studio from './Studio/Studio';


function Footer() {
  return <>
    <div className='md:flex h-[110vh] md:h-[52vh] w-full bg-[#131313]'>
      <div className="lefti h-[52vh] w-[50vw]">
          <div className="socials font-[pp1] text-[35px] md:text-[30px] pt-20 md:pt-0 text-white ml-10 md:ml-20 mt-0 md:mt-20 leading-none">
            <p className='font-[pp] font-[600] text-[15px] font-light'>SOCIALS</p>
            <h1 className='flex gap-2 mt-5'>YOUTUBE</h1>
            <h1 className='mt-4 md:mt-1'>LINKEDIN</h1>
            <h1 className='mt-4 md:mt-1'>BEHANCE</h1>
            <h1 className='mt-4 md:mt-1'>INSTAGRAM</h1>
          </div>
      </div>
      <div className="righti  h-[52vh] w-[50vw]">
           <div className="fonttttt text-end mr-20 mt-10 md:mt-20">
           <p className='text-[15px] md:text-[17px] text-white font-[pp]'>Don't be a stranger!</p>
           <h1 className='text-[22px] md:text-[27px] text-white ml-10 md:ml-0 mt-5 md:mt-1 font-[pp1]'>Vishvasgupta788@gmail.com</h1>
           <p className='text-[17px] md:flex gap-20 ml-10 md:ml-16 mt-6 text-white font-[pp] uppercase text-start md:text-end'><Link to='/studio'>STUDIO</Link><Link to='/work'> <p>WORK</p> </Link><p>contact</p></p>
           <p className='w-[40vw] md:w-52 text-[15px] md:text-[22px] text-white font-[pp1] mt-28 md:mt-6'>~ Vishvas gupta</p>
           </div>
      </div>
    </div>
    <Routes>
      <Route path='/studio' element={<Studio/>}></Route>
    </Routes>
  </>
}

export default Footer
