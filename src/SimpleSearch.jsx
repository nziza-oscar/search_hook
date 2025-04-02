import React, { useState } from 'react'

const SimpleSearch = () => {

    const data = [
        {name: "JavaScript"},{name:"C++" },{name:"Java"}
    ]
    const [query,setQuery] = useState("")
    const results = data.filter((item)=>item.name.includes(query))

  return (
    <div>
        <h1>Search</h1>
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


// Limited data support: This approach only works with plain strings, making it impractical for complex data structures.

// No support for nested objects: If your data has deeper structures (for example, { user: { name: "JavaScript" } }), this won’t work.

// No typo tolerance: A slight misspelling like "javascrpt" won’t match "JavaScript", which can frustrate users.

// Performance bottlenecks: Every keystroke triggers a full re-render, which can cause lag, especially with large datasets.