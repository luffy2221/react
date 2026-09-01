import React from 'react'

const Navbar = () => {

    console.log("3:35");
    
  return (
    <div className='flex items-center justify-between px-18 py-8'>
        <h4 className='bg-black text-white px-6 py-3 uppercase rounded-full'>
            Target Audience
        </h4>

        <button className='bg-gray-200 text-black px-6 py-3 uppercase rounded-full tracking-wider text-sm'>
            Digital Banking Platfrom 
        </button>
    </div>
  )
}

export default Navbar
