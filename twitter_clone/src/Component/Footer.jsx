import React, { useState } from "react";
const Footer=()=>{
    const [count,setCount]=useState(0);
    const add=()=>{
        setCount(count =>count + 1)
        setCount(count =>count + 1)

       
    }
    const [like,setLike]=useState(false);
    const toggle=()=>{
        setLike(!like)
        

       
    }
    
    return<>
     <div className="tweet-footer">
            <button className="btn-reply">Reply</button>
            <button className="btn-retweet">Retweet</button>
            <button className="btn-like" onClick={toggle}> {like? "liked" :"unliked"}</button>
            <button className="btn-share" onClick={add}> {count }Share</button>
          </div>

    </>
}
export default Footer;



