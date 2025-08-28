import React from 'react'

function Price({name , price ,h1 ,h2 , h3 , h4 , h5 ,h6 , h7}) {
    
  return (
    <div className='h-[80vh] w-[80vw] lg:w-[30vw] bg-black rounded-xl cursor-pointer'>
        <h1 className='text-white font-[pp] text-[40px] pl-5 pt-5 underline'> {name}</h1>
        <h1 className='text-[#EFCFA0] font-[pp] text-[70px] pl-5'>$ {price}</h1>
      <div className='text-[white] ml-5 leading-7 font-[pp]'>
      <p>1- {h1}</p>
        <p>2- {h2}</p>
        <p>3- {h3}</p>
        <p>4- {h4}</p>
        <p>5- {h5} </p>
        <p>6- {h6}</p>
        <p>7- {h7}</p>
      </div>
    </div>
  )
}

export default Price