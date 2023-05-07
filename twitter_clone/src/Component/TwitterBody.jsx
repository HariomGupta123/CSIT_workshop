import React from "react"
import { useNavigate } from "react-router-dom";
const TwitterBody=({tweetText,id})=>{
  const navigate=useNavigate();
  const navigateToTweet=()=>{
    navigate(`/tweet/${id}`);
  };
    return<>
    <div onClick={navigateToTweet}>
      <img
          className="profile-pic"
          src="https://placekitten.com/50/50"
          alt="Profile Picture"
        />
    <p>{tweetText}</p>
    </div>
    </>
}
export default TwitterBody;
