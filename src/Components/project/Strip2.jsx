import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all'
import React, { useEffect, useRef } from 'react'

function Strip2() {
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
    <div>
      <div ref={curr} className='h-[160vh] w-[32vw] absolute rotate-[-40deg] -mt-[35vh] ml-[5vw] z-0 brightness-50'>
      <img className='h-[50vh] w-[70vw] mt-10 rotate-[90deg]' src="https://images3.alphacoders.com/132/thumb-1920-1328396.png" alt="" />
      <img className='h-[50vh] w-[70vw] mt-20 rotate-[90deg]' src="https://images6.alphacoders.com/131/thumb-1920-1311137.png" alt="" />
      <img className='h-[50vh] w-[70vw] mt-20 rotate-[90deg]' src="https://img.freepik.com/free-photo/anime-landscape-person-traveling_23-2151038199.jpg?t=st=1741980945~exp=1741984545~hmac=0c2d44b5e2209bfcfa893b80fe224680c585f7846c13c7190e2f3d31e91a1d16&w=1380" alt="" />
      
</div>
    </div>
  )
}

export default Strip2
