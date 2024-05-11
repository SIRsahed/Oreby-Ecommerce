import React from 'react'
import { createContext, useState, useContext, useEffect} from 'react'
import axios from 'axios'

let apiData = createContext()

const ContextApi = ({children}) => {
    let [info, setInfo] = useState([])
    let getdata = ()=> axios.get("https://dummyjson.com/products").then((response)=>{
        setInfo(response.data.products);
    })

    useEffect(()=>{
        getdata()
    },[])
  return (
    <apiData.Provider value={info}>{children}</apiData.Provider>
  )
}

export  {ContextApi, apiData}