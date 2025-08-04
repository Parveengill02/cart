import React from 'react'
import useCounter from '../Hooks/useCounter'
import "./counter.css"
function Counter1() {
    const {count,increment,decrement}=useCounter(0);
  return (
    <>
    <div className='counter1' style={{marginTop:'10px',backgroundColor:'#e3e381',padding:'10px'}}>Counter1</div>
    <p>Count: {count}</p>
    <button onClick={()=>increment()}>Increment by 1</button>
     <button onClick={()=>decrement()}>Decrement by 1</button>
    </>
    
  )
}

export default Counter1