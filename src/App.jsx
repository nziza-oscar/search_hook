import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleSearch from './SimpleSearch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <SimpleSearch/>
    </div>
  )
}

export default App
