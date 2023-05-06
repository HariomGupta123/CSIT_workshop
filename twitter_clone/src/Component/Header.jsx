 import React from "react";
 const Header=({name,lastName})=>{
    return<>
     <div className="tweet-header">
            <h3 className="username">{name} </h3>
            <span className="handle">{lastName}</span>
            <span className="timestamp">- 5h</span>
          </div>

    </>
}
export default Header;



