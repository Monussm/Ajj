import { useState } from "react";
import { useEffect } from "react";
const Api=()=>
{
    const [data,setData]=useState([])
    const url=""
    const getdetails=async()=>
    {
        const respones=await fetch(url)
        const newData=await respones.json()
        setData(newData,articles)
    }



useEffect(()=>
{
    getdetails

},[]

)

}
export default Api;