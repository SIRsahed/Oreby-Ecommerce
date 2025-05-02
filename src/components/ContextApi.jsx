import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
let apiData = createContext()


const ContextApi = ({ children }) => {
  let [info, setInfo] = useState([])

  let getData = () => axios.get("https://api-fresh-harvest.code-commando.com/api/v1/products").then((response) => {
    setInfo(response.data.data);
    
  })
  useEffect(() => {
    getData()
  }, [])
  
  console.log(info);
  return (
    <apiData.Provider value={info}>{children}</apiData.Provider>
  )
}

export { ContextApi, apiData }