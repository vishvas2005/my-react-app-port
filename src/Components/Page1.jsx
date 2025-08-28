import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

function page1() {
  const Titleref = useRef(null);

  useEffect(() => {
    gsap.from(
      Titleref.current,
      {
        opacity: 0,
        scrollTrigger: {
          trigger: Titleref.current,
          start: "top 95%",
        },
      },
      []
    );
  });
  return (
    <div className="h-screen w-full relative bg-black overflow-hidden">
      <video
        src="https://d20d59tu41zyp.cloudfront.net/LandingVideo.mp4"
        autoPlay
        loop
        muted
        className="  h-[80vh] md:scale-[1.2] scale-[4] md:h-[102vh] z-0"
      ></video>
      <div className="h-fit w-full">
        <h1 className="block lg:hidden text-white text-[90px] absolute top-[40vh] left-[5vw] font-[Angton4] leading-none mt-[20vh]">VISHVAS <br /> GUPTA</h1>
        <p className="hidden lg:block" ref={Titleref}>
          <h1 className="md:flex  lg:gap-48 absolute text-[35px] lg:text-[55px] font-bold top-28 lg:top-[40vh] left-[14vw] lg:left-[10.5vw] z-100 text-white font-[pp1] ">
            {" "}
            <span className="ml-8 lg:ml-20">CREATIVE</span>
            <h1>PLAYGROUND</h1>
          </h1>

          <h1 className="absolute text-[35px] md:text-[55px] text-center font-bold top-[44vh] md:top-[53vh] -left-[5vw] md:left-[17vw] leading-none md:leading-1 z-100 text-white font-[pp1] ">
            WHERE ART AND DESIGN MEET.
          </h1>

          <h1 className="absolute text-[35px] md:text-[55px] font-bold top-[58vh] md:top-[64vh] text-center -left-[5vw] md:left-[12vw] leading-none md:leading-1 z-100 text-white font-[pp1]">
            CRAFTING MEANINGFUL CONCEPTS
          </h1>

          <h1 className="absolute text-[35px] md:text-[55px] font-bold top-[75vh] md:top-[75vh] -left-[5vw] md:left-[13vw] leading-none md:leading-1 z-100 text-white font-[pp1] text-center">
            THROUGH PURPOSEFUL CREATION.
          </h1>
        </p>
      </div>
    </div>
  );
}

export default page1;
