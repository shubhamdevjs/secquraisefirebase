import React, { useState } from 'react'
import { useEffect } from 'react';
import { FaFilter } from "react-icons/fa";


const Filterdata=()=> {
    const[data, setData]=useState(1)

    const getfilter=()=>{
        // setData(data+1)
        console.log(data)
    }
    useEffect(()=>{
        getfilter();
    },[])

  return (
    <div onClick={getfilter()}><FaFilter/></div>
  )
}
export default Filterdata;