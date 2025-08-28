import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Studio from "./Studio/Studio";
import Project from "./project/Project";
import Holla from "./Contact/Holla";

function Navbar() {
  const [ham, setham] = useState(true);
  return (
    <>
      <div className="flex md:flex lg:flex gap-[35vw] md:gap-[35vw] lg:gap-[35vw] h-24 md:h-24 lg:h-24 -mt-4 sm:-mt-4 lg:-mt-4 w-full sm:w-full lg:w-full absolute sm:absolute lg:absolute blur-2 sm:blur-2 lg:blur-2 z-20 sm:z-20 lg:z-20 bg-[#00000089] sm:bg-[#00000089] lg:bg-[#00000089] ">
        <button
          onClick={() => setham(!ham)}
          className="p-4 text-[28px] rounded-full mt-5 ml-5 text-white"
        >
          <RxHamburgerMenu />
        </button>
        <img className="h-[10vh] lg:h-[10vh] mt-[2vh] lg:mt-[4vh] lg:fixed fixed right-[4vw] lg:right-10" src="./vg.png" alt="" />
      </div>
      <div
        className={` ${
          ham
            ? "h-screen w-full bg-red-400 hidden "
            : "h-screen w-full bg-black block "
        } `}
      >
        <div className="flex lg:flex">
     <div className="left h-screen w-[20vw] lg:w-[55vw]">
      <div className="h-[36vh] lg:h-[50vh] w-[80vw] lg:w-[47vw] mt-0 lg:mt-40 ml-[10vw]  lg:ml-16">
      <img className="h-full w-full pt-20 lg:pt-0" src="./man.jpg" alt="img" />
      </div>
     </div>
     <div className="right h-screen w-[50vw] lg:w-[45vw] absolute lg:relative ">  
      <div className="h-screen w-[50vw] mt-[40vh] lg:mt-0 ml-[5vw] lg:ml-0 leading-none">
       <Link to="/"> <h1 onClick={()=>setham(!ham)} className="text-white text-[70px] lg:text-[80px] font-[Angton4] mt-40 ml-1">
          HOME{" "}
        </h1></Link>

      <Link to="/studio"> <h1 onClick={()=>setham(!ham)} className="text-white text-[70px] lg:text-[80px] font-[Angton4] ml-1">
          STUDIO{" "}
        </h1></Link>

       <Link to="/work"> <h1 onClick={()=>setham(!ham)} className="text-white text-[70px] lg:text-[80px] font-[Angton4] ml-1">
          WORK
        </h1></Link>

       <Link to="/contact"> <h1 onClick={()=>setham(!ham)} className="text-white text-[70px] lg:text-[80px] font-[Angton4] ml-1">
          CONTACT
        </h1></Link>

        <p className="text-[15px] lg:text-[21px] text-white font-[pp] absolute left-4 lg:left-4 mt-[10vh] lg:mt-32 md:mt-0 md:left-20 md:bottom-20">~Vishvasgupta788@gmail.com</p>
       </div>
       </div>
      </div>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/studio" element={<Studio/>}/>
        <Route path="/work" element={<Project/>}/>
        <Route path="/contact" element={<Holla/>}/>
      </Routes>
    </>
  );
}

export default Navbar;
