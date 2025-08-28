import React, { useEffect, useRef } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import Strip1 from './Strip1'
import Strip2 from './Strip2'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'



function Lab() {
  const loader = useRef(null);
  useEffect(()=>{
    gsap.from(
      loader.current
      ,{
         opacity:0,
         duration:4,
         scrollTrigger:{
          trigger:loader.current,
          start:"top 80%",
          end:"top 20%",
          scrub:1,
         }
      }
    )
  })
  return (
    <div className='h-[83vh] w-full flex -gap-14 relative overflow-hidden bg-black  '>
      <h1 ref={loader} className='flex gap-5 absolute z-10 font-[pp1] text-white text-[100px] left-[40%] mt-[15%] tracking-wide brightness-125'>FLUX <span className=" mt-2 md:mt-10 text-[26px] md:text-[50px] -rotate-[30deg]"><FaArrowRightLong /></span> </h1>
       <Strip1 link1={"https://images3.alphacoders.com/133/thumb-1920-1331316.jpeg"}
       link2={"https://images.alphacoders.com/134/thumb-1920-1348852.png"}
       link3={"https://img.freepik.com/free-photo/anime-landscape-person-traveling_23-2151038199.jpg?t=st=1741980945~exp=1741984545~hmac=0c2d44b5e2209bfcfa893b80fe224680c585f7846c13c7190e2f3d31e91a1d16&w=1380"}/>
       <div className='-mt-32'>
       <Strip1 link1={"https://images.alphacoders.com/132/thumb-1920-1329910.jpeg"}
       link2={"https://images6.alphacoders.com/138/thumb-1920-1383228.png"}
       link3={"https://images5.alphacoders.com/132/thumb-1920-1329801.jpeg"}/>
       </div>
       <Strip2/>
       <img className='rotate-[50deg] -right-[17vw] -mt-6 h-[30vh] w-[30vw] absolute z-0' src="https://images3.alphacoders.com/133/thumb-1920-1331316.jpeg" alt="" />
      </div>
  )
}

export default Lab
