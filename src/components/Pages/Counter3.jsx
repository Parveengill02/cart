import React, { useState } from 'react'
import useCounter from '../Hooks/useCounter';

function Counter3() {

   const {count,increment,decrement}=useCounter(10);
   const [input,setInput]=useState(2);
  return (
    <>
    <div className='counter1' style={{marginTop:'10px',backgroundColor:'#e3e381',padding:'10px'}}>Counter 3</div>
    <p>Count: {count}</p>
    <button onClick={()=>increment(-5)}>Increment by -5</button><br/>
    <input type="number" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
     <button onClick={()=>decrement(Number(input))}>Decrement by {input}</button>
    </>
  )
}

export default Counter3