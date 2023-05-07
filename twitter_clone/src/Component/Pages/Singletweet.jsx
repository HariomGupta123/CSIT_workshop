import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Tweet from "../Tweet";
import axios from "axios";

const SingleTweet=()=>{
    const [tweet,setTweets]=useState(null)
    const {id}=useParams();
    const fetchTweet= async ()=>{
        const p= await axios.get("https://react-workshop-todo.fly.dev/post/${id}",{
            headers:{
            apiKey:"645739027213f63d43558c6b"}
        });
    }
    useEffect(()=>{
          fetchTweet()
    },[])
    return<>
    {tweet ? (
    <Tweet 
        avatar={"https://avatars.githubusercontent.com/u/"}
        content={tweet?.content}
        id={tweet?.id}
        name={tweet?.user.fullname}
        lastName={tweet?.use.name}/>
    ) :null}
        
    </>
}
export default SingleTweet;