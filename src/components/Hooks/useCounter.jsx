import React, { useState } from 'react'

const useCounter=(initialValue=0)=>{
    const [count,setCount]=useState(initialValue);

    const increment =(value=1)=>{
setCount((prev)=>prev+value);
    };

    const decrement=(value=1)=>{
        setCount((prev)=>prev-value);
    };
  return {count,increment,decrement}
};
export default useCounter