

import React, { useEffect, useState } from 'react'


function getData (key,initialValue){
    const value = localStorage.getItem(key)

    if(value) return JSON.parse(value)

  return initialValue instanceof Function ? initialValue() : initialValue;
    
}

const useLocalstorage = (key,initialValue) => {
  const [value,setValue] = useState(()=>{
    return getData(key,initialValue)
  })

//   
useEffect(()=>{
    if(value !== undefined){
        console.log(value,"value    ")
        localStorage.setItem(key,JSON.stringify(value))
    }
    if(value === "" || value === undefined ){
        localStorage.removeItem(key)
    }
},[value])

return [value,setValue]
}

export default useLocalstorage