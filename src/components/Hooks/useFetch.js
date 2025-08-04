import React, { useEffect, useState } from 'react'

const useFetch=(apiFn,initialData=null)=> {
  const [data,setData]=useState(initialData);
  const [loading, setLoading]=useState(true);
  const [error, setError]=useState(null);

  const refetchData=()=>{
    setLoading(true);
    setError(null);
    apiFn()
     .then(res=>setData(res))
     .catch(err=>setError(err))
     .finally(()=>setLoading(false));
  };
  useEffect(()=>{
    refetchData();
  },[]);
  return {loading,data,error,refetchData};
};

export default useFetch