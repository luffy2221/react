import React from 'react'
import LeftText from './LeftText'
import RightContent from './RightContent'

const Center = (props) => {
  return (
    <div  className='pb-16 pt-10 flex gap-10 items-center px-20 h-[88vh]'>
        <LeftText />
        <RightContent users={props.users} />
    </div>
  )
}

export default Center
