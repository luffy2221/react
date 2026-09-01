import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log("afjifj", props.users);
  console.log("4:15 something");
  
  return (
    <div className='h-full overflow-x-auto p-6 w-2/3 flex flex-nowrap gap-10 rounded-3xl'>
      < RightCard />
    </div>
  )
}

export default RightContent
