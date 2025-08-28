import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
function Zoomer() {
    const zoomer = useRef(null);
    useEffect(()=>{
        gsap.from(
            zoomer.current,
            {
               scale: 2,
              scrollTrigger:{
                trigger:zoomer.current,
                start:"top 30%",
                end:"top 20% ",
                scrub:1,
              }
            }
        )
    })
  return (
    <div className='h-[30vh] md:h-[70vh] w-[90vw] ml-5 md:ml-0 md:w-full relative overflow-hidden'>
      <video ref={zoomer}
        src="https://d20d59tu41zyp.cloudfront.net/LandingVideo.mp4"
        autoPlay
        loop
        muted
        className="h-[80vh] md:scale-[1.2] scale-[4] md:h-[42vh] z-0 md:mt-20 mx-auto"
      ></video>
    </div>
  )
}

export default Zoomer
