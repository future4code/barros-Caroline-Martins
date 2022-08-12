import React, { useEffect, useState } from "react";
import axios from "axios";




const useRequestData=(url)=>{
    const [data, setData]=useState(undefined)
    const [isLoading, setLoading]=useState (undefined)
    const [erro, setErro]= useState(undefined)


    useEffect(()=>{
        setLoading(true);
        axios.get(url).then((response)=>{
            setLoading(false)
            setData(response.data.trips)
        }).catch((error)=>{
            setLoading()
            setErro(error)
        })
    },[])

    return [data, isLoading, erro];

}

export default useRequestData;