import React, { useState } from 'react'

const useDelayedFetch=(apiFn)=>{
    const[data,setData]=useState(null);
    const [loading,setLoading]=useState(false);  
    const [error,setError]=useState(null);

    const execute=async(params)=>{
       setLoading(true);
       setError(null);
       

      try{
         const res=await apiFn(params);
         setData(res);
      } 
      catch(err){
        setError(err);

      }
      setLoading(false);
    };
    return {data,loading,error,execute}
}

export default useDelayedFetch