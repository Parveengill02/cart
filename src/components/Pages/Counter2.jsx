import React from 'react'
import useCounter from '../Hooks/useCounter';

function Counter2() {
     const {count,increment,decrement}=useCounter(0);
  return (
    <>
    <div className='counter1' style={{marginTop:'10px',backgroundColor:'#b1b163ff',padding:'10px'}}>Counter 2</div>
    <p>Count: {count}</p>
    <button onClick={()=>increment(2)}>Increment by 2</button>
     <button onClick={()=>decrement(3)}>Decrement by 3</button>
    </>
  )
}

export default Counter2