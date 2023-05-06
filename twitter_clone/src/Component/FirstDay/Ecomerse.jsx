import React from "react";
import "./Ecomerse.css"
import Buttons from "./Buttons";
const Ecomerse=({title,img,color,size,price})=>{
    return<>
         <div className="container">
            <h2>{title}</h2>
           <img src={img} alt="img" className="img1"/>
           <p>size:{size}</p>
           <p>color:{color}</p>
          <Buttons price1={price}/>
         </div>
    </>
}
export default Ecomerse;