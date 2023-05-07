import { useState } from "react";
import "../CSS/TwiterPost.css"
import axios from "axios";
const TwiterPosts=()=>{
    const [tweetContent,setTweetContent]=useState('');
    const [imageUrl,setImageUrl]=useState('')
    const upload=async()=>{
        try{
        const res= axios.post("https://react-workshop-todo.fly.dev/posts/",{
           
             content:tweetContent,
            image:"https://www.mercurynews.com/wp-content/uploads/2016/09/20160607__messi-06081.jpg?w=645"
        },{
            headers:{
                apiKey:" 645739027213f63d43558c6b"
            }
        })
       
       setTweetContent("")
       setImageUrl("")
    }catch(e){
        console.log(e)
        alert("error uploading tweet")
       }
    }
    const handleSubmit=()=>{
        console.log({tweetContent});
        upload();
    }
    return<>
       <div className="twiterPost" >
          <div>
            <input type="text" value={imageUrl} onChange={(e)=>{setImageUrl(e.target.value)}}/>
             <textarea id="tweet-text" value={tweetContent} onChange={(e)=>{setTweetContent(e.target.value)}} className="" placeholder="What is happening">

             </textarea>
             
          </div>
          <div className="tweet-control">
          <span id="char-count">258</span>
          <button id="tweet-btn" onClick={handleSubmit}>Tweet</button>

          </div>
          
         

       </div>

    </>
}
export default TwiterPosts;