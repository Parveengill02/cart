import React, { useState } from 'react'
import useDelayedFetch from '../Hooks/useDelayedFetch'
import { getUser } from '../../api/fakeapi'

const List2=() =>{
    const { loading , data , error , execute}=useDelayedFetch(getUser);
    const[count,setCount]=useState(null);;
  return (
    <div style={{backgroundColor:'beige',paddingLeft:'50%' , paddingTop:'20px'}}>
      <h3 >Users</h3>
      <button onClick={()=>execute({count:Number(count)})}>Get List</button>
      <input type="number" value={count} onChange={(e)=>setCount(e.target.value)} placeholder="Enter number of users"/>
       {loading && <p style={{color:'blue'}}>Loading...</p>}
        {error && <p>Error: {error}</p>}
      
      <ul>
        {data && data.map((item, i) => <li key={i}>{item}</li>)}
      </ul>

    </div>

  )
}

export default List2