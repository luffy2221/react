import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = () => {
  return (
    <div className=' h-full shrink-0 overflow-hidden relative w-1/3 rounded-4xl'>
        <img className='h-full w-full object-cover ' src="https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

        < RightCardContent />
    </div>
  )
}

export default RightCard
