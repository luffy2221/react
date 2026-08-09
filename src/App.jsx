import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="parent">
    <Card user = 'Hanish' age={21}/>
    <Card user = 'Aman' age={22}/>
    </div>
  )
}

export default App