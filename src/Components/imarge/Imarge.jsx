import React from 'react'

function Imarge() {
  return (
    <div className='h-fit w-full bg-[#131313]'>
      <div className="image h-[100vh] w-[85vw] pt-20 mx-auto relative overflow-hidden rounded-md">
        <img className='md:h-[60vh] md:w-full h-[34vh] w-[92vw] rounded-md' src="./studioSectionImage.webp" alt="" />
        <h1 className='text-[33px] w-[80vw] md:w-[70vw] md:text-[60px] font-[pp1] text-white absolute top-36 md:top-52 left-3 md:left-32 leading-none md:leading-1 text-center '>I AM CREATOR OF MEANING
        AND THIS IS MY MANIFESTO</h1>
      </div>
      <div className='h-full w-full -mt-[40vh] md:-mt-20'>
        <p className=' w-[70vw] md:w-[40vw] font-[700] text-white font-[pp] text-[14px] md:text-[17.5px] text-center mx-auto font-light'>More than a designer, I believe in the transcendent power of communication and how it can change the world. Through sustainable, collaborative and meaningful projects my aim to enrich our cultural heritage while allowing people to see in a new light.</p>
        <h1 className='md:w-[40.5vw] text-white text-[35px] md:text-[60px] font-[pp1] text-center mx-auto leading-[40px] md:leading-[80px] mt-20 md:mt-40'>DESIGNING THE WORLD WE WANT TO LIVE IN</h1>
      </div>
      <div className='h-20 w-full'></div>
    </div>
  )
}

export default Imarge
