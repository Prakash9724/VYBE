import { ChevronDown, Search, ShoppingCart } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-16 px-10  flex items-center justify-between'>
        <div className='flex gap-5 '>
            <h2 className='font-[helvatica] font-medium text-lg tracking-wide'>Shop</h2>
            <h2 className='font-[helvatica] font-medium text-lg tracking-wide'>Collection</h2>
            <h2 className='font-[helvatica] font-medium text-lg tracking-wide'>About</h2>
            <h2 className='font-[helvatica] font-medium text-lg tracking-wide'>Contact</h2>
        </div>
        <div>
            <h1 className='font-[vibe] font-medium text-2xl tracking-wide'>VYBE</h1>
        </div>
        <div className='flex items-center justify-center gap-4'>
        <Search className='text-black'/>
               <div className='border-1 h-8 flex rounded-4xl items-center justify-center  overflow-hidden'>
                <img className='w-8 h-full rounded-full' src="https://images.unsplash.com/photo-1531891570158-e71b35a485bc?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <ChevronDown size={20} className='pr-1'/>
               </div>
                <div className='flex gap-2 items-center justify-center border-1  border-red-500  px-1  py-1 rounded-4xl'>
                    <div className='bg-[#FD6D6C] h-full px-2 rounded-[15px] py-0.5 '>
                    <ShoppingCart  className='w-full h-full text-white '/>
                    </div>
                    <h1 className='pr-1 font-semibold font-[helvatica]'>1 Product</h1>
                </div>
        </div>
    </div>
  )
}

export default Navbar