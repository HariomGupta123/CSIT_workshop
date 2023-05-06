import React from "react";
import Header from "./Header";
import TwitterBody from "./TwitterBody";
import Footer from "./Footer";

const Tweet=({name,lastName})=>{
    return<>
            <div className="tweet">
      <img
        src="https://placekitten.com/50/50"
        alt="Profile Picture"
        height={50}
        width={50}
      />
      <div className="tweet-content">
        <Header name={name} lastName={lastName}/>
        <TwitterBody/>
       <Footer/>
      
      </div>
    </div>
    </>
}
export default Tweet;
