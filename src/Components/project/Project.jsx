import React from 'react'
import Footer from '../Footer'
import Work from '../work/Work'
import Lab from './Lab'
import Zoomer from './Zoomer'
import { Links } from 'react-router-dom'
import Ports from './Ports'

function Project() {
  return <>
    <div className='h-fit w-full bg-[#131313]'>
       <h1 className='text-[40px] lg:text-[100px] text-white font-[pp] text-center  pt-20 lg:pt-28 font-[600]'> <span className=''>Work</span>Space</h1>
      <div className='text-white font-[pp1] text-[15px] md:text-[18px] mt-14 text-center'>
      <p>ALL | Portfolios | Ecommerce</p>
      <p>Arts & Culture | UI/UX Design | Development</p>
      </div>
      <div className='mt-20'>
      <Zoomer/>
      </div>
      <div className='ml-5 md:ml-0 mt-20'>
      <Work work={"OVERVIEW"}/>
      </div> 
      <Ports/>
    </div>
    <Footer/>
  </>
}

export default Project
