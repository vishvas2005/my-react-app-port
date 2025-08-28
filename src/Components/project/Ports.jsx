import React from 'react'
import { IoLibrary } from 'react-icons/io5'
import Parts from './Parts'

function Ports() {
  const arr1 = [{video1:"\src\assets\videos\sunsshine.mp4" , video2:"src\assets\videos\service.mp4" , webname1:"Sunshine", webname2:"Warri"}]
  return (
    <div className='h-fit w-full'>
      <h1 className='flex gap-2  text-[40px]  lg:text-[55px] text-white font-[pp] ml-[5vw] lg:ml-20 pt-[6vh] lg:pt-28 uppercase font-bold'>Library</h1>
      <Parts/>
    </div>
  )
}

export default Ports
