import { Gift, Mail, Timer } from 'lucide-react';
import React from 'react'
import img10 from "../assets/img/img10.png"

const Card4 = () => {
    return (
        <div className="w-96 h-[65vh] shadow-lg rounded-4xl overflow-hidden font-[hel2] -rotate-10 translate-x-16 translate-y-50">
          
          <h1 className=' py-6 text-xl font-[hel2] text-center'>Upcoming Challenges 🔥</h1>
          <div className="w-full rounded-4xl h-[40%] px-[18px] my-2  ">
            <img className="w-full h-full object-cover object-top rounded-4xl scale-110" src={img10} alt="" />
          </div>
    
          <div className="w-full h-[60%]  p-4 ">
            <div className="flex items-center gap-2 mb-2 ">
             
              <h1>Style Remix Challenge </h1>
            </div>
            <p className="font-[av] text-sm leading-[1.2] mb-2">
              Show off your unique vibe by mixing and matching your favouraite picese from our latest collection. 
            </p>

            <div className='font-[av] flex  flex-col gap-4 pt-2'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <Timer stroke='#FD6D6C'/> 
                        <span>Deadline </span>
                    </div>
                    <h1>July 15</h1>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <Gift stroke='#FD6D6C'/> 
                        <span>Rewards </span>
                    </div>
                    <h1>Exclusive Discount Codes</h1>
                </div>
            </div>
        
    
            <div className="flex items-center justify-center mt-2">
              {" "}
              <button className="w-[50%] mx-auto   h-10 rounded-3xl bg-[#FD6D6C] mt-2 text-white">
                Join News Letter
              </button>
            </div>
            
          </div>
        </div>
      );
    };

export default Card4
