import React from "react";
import './TweetInFeed.css';
import golf from "../images/golf.png";
import canoe from "../images/canoe.png";
import {defaultImgs} from "../defaultimgs";
import xdcIcon from "../images/xdcIcon.png";
import {Icon} from "web3uikit";

const TweetInFeed = () => {
  

  return (
    <>
    <div className="feedTweet">
     <img src={defaultImgs[0]} className="profilePic"></img>
     <div className="completeTweet">
      <div className="who">
      Mitali
      <div className="accWhen"> xdc33ad48vf...1b</div>
     </div>
  <div className="tweetContent">
    Nice Day Done coding Today
    
  </div>
<div className="interactions">
  <div className="interactioNums">
    <Icon fill="#ffffff" size={20} svg="messageCircle"></Icon>
  </div>
  <div className="interactioNums">
    <Icon fill="#ffffff" size={20} svg="star"></Icon>
  </div>
  <div className="interactioNums">
  <img src ={xdcIcon} className= "xdcStyles"></img>
  </div>
</div>
    </div>  
    </div>
    <div className="feedTweet">
     <img src={defaultImgs[0]} className="profilePic"></img>
     <div className="completeTweet">
      <div className="who">
      Chackox
      <div className="accWhen"> xdc3354648vf...8b</div>
     </div>
  <div className="tweetContent">
    Nice Day Done coding Today
    <img src ={golf} className="tweetImg"></img>
  </div>
<div className="interactions">
  <div className="interactioNums">
    <Icon fill="#ffffff" size={20} svg="messageCircle"></Icon>
  </div>
  <div className="interactioNums">
    <Icon fill="#ffffff" size={20} svg="star"></Icon>
  </div>
  <div className="interactioNums">
  <img src ={xdcIcon} className= "xdcStyles"></img>
  </div>
</div>
    </div>  
    </div>
    <div className="feedTweet">
     <img src={defaultImgs[0]} className="profilePic"></img>
     <div className="completeTweet">
      <div className="who">
      Hellxx
      <div className="accWhen"> xdcyh64d48vf...3c</div>
     </div>
  <div className="tweetContent">
    very hectic day done exercise lots of practise meditation handle TG excel sheets and many more tired enough
   
  </div>
<div className="interactions">
  <div className="interactioNums">
    <Icon fill="#ffffff" size={20} svg="messageCircle"></Icon>
  </div>
  <div className="interactioNums">
    <Icon fill="#ffffff" size={20} svg="star"></Icon>
  </div>
  <div className="interactioNums">
  <img src ={xdcIcon} className= "xdcStyles"></img>
  </div>
</div>
    </div>  
    </div>
    <div className="feedTweet">
     
    </div>  
    </>
  );
};

export default TweetInFeed;

