import React from 'react'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import useLenis from "./Components/Lenis.jsx/useLenis";

function App() {
  useLenis();
  return (
    <div className='h-fit w-[100vw] relative overflow-hidden'>
      <Navbar/>
    </div>
  )
}

export default App
