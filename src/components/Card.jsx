import { Star } from 'lucide-react'
import React from 'react'

const Card = () => {
  return (
    <div className='w-[16vw] h-84 rounded-3xl shadow-xl border-b-1 border-[#fd6c6caf]  overflow-hidden'>
      <div className='w-full h-[70%] '>
        <img className='w-full h-full object-cover rounded-b-3xl' src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
        <div className=' w-full  h-[30%] font-[av] p-4 flex flex-col justify-between'>
            <h1 className='text-xl font-semibold'>Vibe Bloome Crop</h1>
            <div className='flex items-center justify-between '>

            <div className='flex items-center gap-1 '>
                <Star size={20} fill='yellow' stroke='yellow'/> <p>4.6</p>
            </div>
            <h1>$26.75</h1>
            </div>
        </div>
    </div>
  )
}

export default Card
