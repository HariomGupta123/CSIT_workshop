import React from "react"
const TwitterBody=({tweetText})=>{
    return<>
      <img
          className="profile-pic"
          src="https://placekitten.com/50/50"
          alt="Profile Picture"
        />
    <p>{tweetText}</p>
    </>
}
export default TwitterBody;
