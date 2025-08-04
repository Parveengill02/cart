import React, { useState } from 'react';
import './cart.css';
function Cart() {

    const[proData,setproData]=useState([
        { title: "noodles", rs: 30, id: 1, qunt: 1 },
        { title: "biriyani", rs: 45, id: 2, qunt: 1 },
  { title: "chips", rs: 5, id: 3, qunt: 1 }
    ]);
    

    const increase=(index)=>{
        const newData=[...proData];
        newData[index].qunt++;
        setproData(newData);
    }
    const decrease=(index) =>{
        const newData=[...proData];
        if (newData[index].qunt>1)
        {
            newData[index].qunt--;
            setproData(newData);
        }
    }

    const total=() => {
        return proData.reduce((total,item)=> total + item.rs *item.qunt,0);
    }
  return (
    <div className="cart">
        {proData.map((item,index)=>(
            <div key={index} className="cartItems">
                <h2>{item.title}</h2>
                <h2>{item.rs*item.qunt}</h2>
                <div>
                <span><button onClick={()=>increase(index)}>+</button></span>
                <span>{item.qunt}</span>
                 <span><button onClick={()=>decrease(index)}>-</button></span>
                 </div>

            </div>
        ))}
        <div className="total">
            <p>Total Amount:Rs.{total()}</p>
        </div>
    </div> 
  )
}

export default Cart