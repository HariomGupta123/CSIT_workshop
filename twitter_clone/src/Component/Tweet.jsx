import React from "react";
import Header from "./Header";
import TwitterBody from "./TwitterBody";
import Footer from "./Footer";

const Tweet=({name,lastName,content,avatar})=>{
    return<>
            <div className="tweet">
      <img
        src={avatar}
        alt="Profile Picture"
        height={50}
        width={50}
      />
      <div className="tweet-content">
        <Header name={name} lastName={lastName}/>
        <TwitterBody tweetText={content}/>
       <Footer/>
      
      </div>
    </div>
    </>
}
export default Tweet;
