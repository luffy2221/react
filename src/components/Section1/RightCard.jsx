import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (elem) => {  
  return (
    <div className=' h-full shrink-0 overflow-hidden relative w-1/3 rounded-4xl'>
        <img className='h-full w-full object-cover ' src={elem.img} alt="" />

        < RightCardContent id={elem.id} color={elem.color}  img={elem.img}
        intro={elem.intro}
        tag={elem.tag}/>
    </div>
  )
}

export default RightCard
