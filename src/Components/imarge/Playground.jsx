import React, { useEffect, useRef } from "react";
import Random from "./Randoms";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function Playground() {
  const rand = [{h: "10", w : "12"}];
  const firstref = useRef(null);
  useEffect(()=>{
    gsap.from(
      firstref.current,
      {
        y:-100,
        scrollTrigger:{
          trigger:firstref.current,
          start:"top 80%",
          end: "top 20%",
          scrub:1,
        }
      }
    )
  },[])
  return (
    <div className="h-[130vh] w-full bg-black">
      <h1 className="text-white font-[pp1] text-[55px] md:text-[120px] ml-10 md:ml-28 absolute pt-[40vh] z-20">LET'S <span className="invisible">eop</span> <span className="ml-16 md:ml-0">IMAGINE</span> TOGETHER</h1> 
     <div>

     <div ref={firstref} className={`h-[25vh] w-[30vw] md:h-[38vh] md:w-[13vw] rounded-md ml-10 md:ml-28 mt-40 md:mt-12 overflow-hidden absolute z-10 md:z-0`}>
        <img className='h-full w-full z-10' src="https://d20d59tu41zyp.cloudfront.net/archive/tall/3.jpg" alt="" />
    </div>

    <div className={`h-[18vh]  w-[43vw] md:h-[25vh] md:w-[18vw] rounded-md ml-[43vw] md:ml-[32vw] mt-[36vh] md:mt-[30vh] overflow-hidden absolute z-0`}>
        <img className='h-full w-full z-10' src="https://d20d59tu41zyp.cloudfront.net/archive/wide/3.jpg" alt="" />
    </div>

    <div className={`h-[20vh] w-[52vw] md:h-[25vh] md:w-[18vw] rounded-md ml-[32vw] md:ml-[70vw] mt-[8vh] md:mt-[11vh] overflow-hidden absolute z-0 md:z-0`}>
        <img className='h-full w-full z-10' src="https://d20d59tu41zyp.cloudfront.net/archive/wide/2.jpg" alt="" />
    </div>

    <div className={` h-[15vh] w-[25vw] md:h-[20vh] md:w-[10vw] rounded-md ml-[70vw] md:ml-[45vw] mt-[78vh] md:mt-[81vh] overflow-hidden absolute z-0`}>
        <img className='h-full w-full z-10' src="https://d20d59tu41zyp.cloudfront.net/archive/tall/2.png" alt="" />
    </div>

    <div className={`h-[20vh]  w-[30vw] md:h-[30vh] md:w-[10vw] rounded-md ml-[4vw] md:ml-[13vw] mt-[70vh] md:mt-[80vh] overflow-hidden absolute z-0`}>
        <img className='h-full w-full z-10' src="https://d20d59tu41zyp.cloudfront.net/archive/tall/17.png" alt="" />
    </div>

    <div className={`h-[60vh] w-[70vw] md:h-[40vh] md:w-[35vw] rounded-md ml-[15vw] md:ml-[63vw] mt-[80vh] md:mt-[78vh] overflow-hidden absolute z-0`}>
    <video className="h-full w-full" src="https://d20d59tu41zyp.cloudfront.net/LandingVideo.mp4" autoPlay loop muted></video>
    </div>

     </div>
    </div>
  );
}

export default Playground;
