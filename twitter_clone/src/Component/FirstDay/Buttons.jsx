import React, { useState } from "react"
const Buttons=({price1})=>{
    const [add,setAdd]=useState(1);
    const Add1=()=>{
        setAdd(add +1)
         
    }
    const decrease=()=>{
        setAdd (add - 1)
       

    }
    return<>

     <span>Qauntity:</span><button className="remove" onClick={decrease}>-</button>
     <span> {add} </span>
     <button className="add1" onClick={Add1}>+</button><br/>
     <span style={{margin:20}}>price: {add*price1}</span>
    </>
}
export default Buttons;