import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useEffect, useRef } from 'react'

function Strip1({link1,link2,link3}) {
    const curr = useRef(null);
    useEffect(()=>{
        gsap.from(
            curr.current,
            {
                x:-200,
                y:-200,
                scrollTrigger:{
                    trigger:".image1",
                    start:"top 0%",
                    end:"end 5%",
                    scrub:2,
                }
            }
        )
    })
  return (
    <div ref={curr} className='h-[160vh] w-[32vw] rotate-[-40deg] -mt-32 ml-5 bg-black z-0 brightness-50'>
    <div className="image1">
      <img className='h-[50vh] w-[70vw] mt-10 rotate-[90deg]' src={link1} alt="" />
      <img className='h-[50vh] w-[70vw] mt-20 rotate-[90deg]' src={link2} alt="" />
      <img className='h-[50vh] w-[70vw] mt-20 rotate-[90deg]' src={link3} alt="" />
     
    </div>
    </div>  
  )
}

export default Strip1
