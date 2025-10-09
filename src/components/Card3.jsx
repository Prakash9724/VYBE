import React from 'react'
import img9 from "../assets/img/img9.png"
import { Mail } from "lucide-react";




const Card3 = () => {
    return (
        <div className="w-96 h-[60vh] shadow-lg rounded-4xl z-30 overflow-hidden font-[hel2] rotate-5 translate-x-10 translate-y-25">
    
    
          <div className="w-full h-[30%]  flex flex-col items-center pt-8 justify-between   p-5 ">
          <div className='flex items-center gap-5  w-full'>
          <img className='w-14 h-14 object-cover rounded-full' src="https://images.unsplash.com/photo-1755311901850-f1412f67219a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <div>
          <h1 className='text-xl font-[hel2]'>Elen Jackson</h1>
          <p className='text-sm font-[av]'>OG Member</p>
          </div>
          </div>
          <p className='text-md font-[av]'>Wearing VYBE makes me feel like I own the streets.
             #VybeTrib0</p>
          
          </div>
    
    
          <div className="w-full rounded-4xl h-[70%] ">
            <img className="w-full h-full object-cover object-top rounded-4xl" src={img9} alt="" />
          </div>
    
        </div>
      );
    };
export default Card3
