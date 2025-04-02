import React from 'react'
import useLocalstorage from './hooks/useLocalstorage'

const CustomHooks = () => {
    const [name,setName] = useLocalstorage("username")

  return (
    <div>
        <h1>Use Localstorage hooks</h1>
   
      <input name='username' onChange={(e)=>setName(e.target.value)}/>

    </div>
  )
}

export default CustomHooks