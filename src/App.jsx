import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleSearch from './SimpleSearch'
import CustomHooks from './CustomHooks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CustomHooks/>
      <SimpleSearch/>
    </div>
  )
}

export default App
