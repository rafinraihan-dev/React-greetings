import React from 'react'
import Desc from './components/card'
import {Description} from './components/card'
import {Hello} from './components/card'
import Navbar from './components/navbar'
const App = () => {
  return (
    <div>
      {Navbar()}
      {Desc()}
      <Description />  {/* we can call Description like these from components->cards. */}
      {Description()}  {/* we can also call Description like these from components->cards. */}
      <Hello />
      
      

    </div>
  )
}

export default App
