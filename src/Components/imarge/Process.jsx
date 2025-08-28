import react from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import Liner from './Liner';

function Process(){
    const arr =[ {name:"DEVELOPMENT" , num:"01"} , {name:"GAMING",num:"02"},{name:"DESGINING",num:"03"},{name:"sports",num:"04"}
    ] ;
    return <>
    <div className='h-fit w-full bg-black'>
     <h1 className='flex md:gap-3 gap-1 text-white text-[34px] md:text-[53px] font-[pp] font-bold pt-20 pl-10 md:pl-24 '>PASSIONpIT <span className="mt-2 md:mt-4 ml-1 md:ml-1 text-[25px] md:text-[32px] -rotate-[30deg]"><FaArrowRightLong /></span> </h1>
     <div className='mt-20 md:flex justify-center gap-10 ml-10 md:ml-36'>
     {arr.map(e=>{
        return <Liner num={e.num} name={e.name}/>
     })}
     </div>
    </div>
    </>
}
export default Process;