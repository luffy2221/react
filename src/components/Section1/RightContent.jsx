import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {

  return (
    <div id='right' className='h-full overflow-x-auto p-6 w-2/3 flex flex-nowrap gap-10 rounded-3xl'>
      {props.users.map(function(elem ,idx){
        return <RightCard key={idx} id={idx} color={elem.color} img={elem.img} intro ={elem.intro} tag={elem.tag}/>
      })}
    </div>
  )
}

export default RightContent
