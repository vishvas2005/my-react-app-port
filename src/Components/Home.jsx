import React from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Work from "./work/Work";
import Services from "./Services";
import Imarge from "./imarge/Imarge";
import Process from "./imarge/Process";
import Playground from "./imarge/Playground";
import Contact from "./Contact";
import Footer from "./Footer";



function Home() {
    return<>
    <div className="h-fit w-[100vw] relative overflow-hidden">
    <Page1/>
    <Page2/>
    <Work work={"WORK"}/>
    <Services/>
    <Imarge/>
    <Process/>
    <Playground/>
    <Contact/>
    <Footer/>
    </div>
    </>
}
export default Home;