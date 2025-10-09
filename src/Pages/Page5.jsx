import React from 'react'
import Card2 from '../components/Card2'
import Card3 from '../components/Card3'
import Card4 from '../components/Card4'
import { MoveRight, Users } from 'lucide-react'

const Page5 = () => {
  return (
    <div className='w-full h-full relative  my-10'>

        {/* header section  */}
      <div className='w-full relative h-24 flex flex-col justify-center items-center gap-3  '>
        <h1 className='text-5xl  text-[#292929] font-[Helvatica] font-bold text-center' >Community Hub</h1>
        <p className='font-[av] font-medium text-[#3B3B3B]'>Join the Tribe , Express Your Vibe</p>
      </div>


      {/* body section  */} 

      <div className='relative h-[calc(100vh-96px)] w-full  flex gap-10 px-32 '>
        <Card2/> 
        <Card3/>
        <Card4/>
      </div>
       {/* Left side bottom element */}
       <div className='absolute bottom-20 left-8 w-80 rounded-[30%_70%_70%_30%/40%_30%_70%_60%]'>
         <div className="bg-[#FFE3E2] rounded-[25px] p-6 shadow-lg">
           <p className="text-[#3F3F3F] font-medium text-sm leading-relaxed">
             Whether you're here to get inspired or to inspire others, the tribe is waiting.
           </p>
         </div>
       </div>

       {/* Right side top element */}
       <div className='absolute top-32 right-8 w-80'>
         <div className="bg-[#FFE3E2] rounded-[25px] p-6 shadow-lg">
           <p className="text-[#3F3F3F] font-medium text-sm leading-relaxed">
             Where fashion meets connection. Exclusive drops, style battles, and real connections – all in one place.
           </p>
         </div>
       </div>

       <div className='w-[18%]  left-1/2 -translate-x-1/2  absolute bottom-4  '>
         
       <div className="w-full    flex items-center h-13 pl-6 pr-1 py-1 justify-between bg-[#FD6D6C] rounded-[30px]">
           <h1 className="text-white font-[av] text-lg">Join The Vybe Tribe</h1>
           <div className="bg-white px-5 py-2 h-full rounded-full">
             <Users className="text-black " />
           </div>
         </div>
       </div>
    </div>
  )
}

export default Page5
