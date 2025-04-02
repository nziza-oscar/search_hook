import React, { useState } from 'react'

const SimpleSearch = () => {

    const data = [
        {name: "JavaScript"},{name:"C++" },{name:"Java"}
    ]
    const [query,setQuery] = useState("")
    const results = data.filter((item)=>item.name.includes(query))

  return (
    <div>
        <input placeholder='Search....' type='text' value={query} onChange={(e)=>setQuery(e.target.value)}/>
        <ul>
            {
                results.map((item)=>(<li key={item.name}>{item.name}</li>))
            }
        </ul>
    </div>
  )
}

export default SimpleSearch