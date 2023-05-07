import React, { useState,useEffect } from "react";
import "./App.css"
import Tweet from "./Component/Tweet";
import axios from "axios"
import TwiterPosts from "./Component/TwiterPost";

const App=()=>{
  const [tweets,setTweets]=useState([]);
  {/*const names=[{name1:"hari",
                 lastname:"@gupta"},
                 {name1:"md",
                 lastname:"@khan"},
                 {name1:"Amamul",
                 lastname:"@haque"},
                
                ]*/}
  const fetchTweets=async ()=>{
    const posts= await axios.get("https://react-workshop-todo.fly.dev/posts/all",{
      headers:{
        apikey:"645739027213f63d43558c6b"
      }
    });
    console.log(posts.data);
    setTweets(posts.data)
  } 
  useEffect(()=>{
       fetchTweets();
  },[])

  return<>
     
      <TwiterPosts/>
       {tweets.map((tweet)=>{
        return <Tweet name={tweet.authorname} lastName={`@${tweet.authorname}`} content={tweet.content} avatar={`https://avatars.githubusercontent.com/u/${tweet.user.githubId}`} key={tweet._id} id={tweet._id}/>
       })}
      
      {/*<Tweet name={"niraj"} lastName={"@gupta"}/>
      <Tweet name={"aarif"} lastName={"@prajuli"}/>*/}
      {/*<div className="Ecomerse">
      <Ecomerse title={"t-shirt"} img={"https://kingdoodle.com/wp-content/uploads/2019/12/Red_Printo.jpg" } size={"large"} color={"red"} price={400}/>
      <Ecomerse title={"shoe"} img={"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" } size={"madium"} color={"red"} price={1000}/>
      <Ecomerse title={"jocket"} img={"https://wikimetal.info/wp-content/uploads/2020/04/Black-leather-jacket-for-men-1.jpg"} size={"small"} color={"black"} price={3000}/>
      </div>*/}
      

  </>
  
}
export default App;