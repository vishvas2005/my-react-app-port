import { div } from 'framer-motion/client'
import React from 'react'
import Price from './Price'

const Comp = () => {
  const arr1=[{name:"Basic" , price:"100" , h1:"5-page static responsive website (Home, About, Services, Contact, Gallery ya Blog" , h2:"Basic design template" , h3:"Inquiry/contact form" , h4:"Basic SEO setup" , h5:"Basic social media integration (Facebook, Instagram connect)" , h6:"1 revision included" , h7:" Basic web hosting (1 year) Delivery: 1-2 weeks", },
    
  {name:"Standard",price:"200" ,h1:"10-page responsive website (plus services detail, gallery, blog/news)" , h2:"Custom design aur branding" , h3:"Dynamic gallery/news manager" , h4:"Form integrations (newsletter, WhatsApp, etc.)" , h5:"Advanced SEO setup & Google Analytics" , h6:"Content creation/edit (up to 10 pages)" , h7:" 2 design concepts, 2 revisions & Admin backend console (content update) & Delivery: 2-3 weeks",},
  
  {name:"Premium",price:"300" ,h1:"Unlimited/dynamic CMS based website (fully customizable)" , h2:"Custom animations, interactive effects" , h3:"Full e-commerce with cart, payment gateway, inventory" , h4:"Advanced SEO (ongoing), full analytics, performance optimization" , h5:"Content creation (up to 20 pages), blog management" , h6:"Membership/login system " , h7:"Unlimited revisions Priority support, fast delivery (1-2 weeks possible)",}]
  return (
    <div className="h-fit lobby">
        <h1 className='h-fit text-[70px] text-white font-[pp] pt-10 ml-10'>Pricing</h1>
        <div className='h-fit flex flex-col md:flex-row lg:flex gap-6 h-screen w-full mt-10 ml-12'>
          {arr1.map((elem)=><Price name={elem.name} price={elem.price} h1={elem.h1} h2={elem.h2} h3={elem.h3} h4={elem.h4} h5={elem.h5} h6={elem.h6} h7={elem.h7} />)}
        </div>
    </div>
  )
}

export default Comp
