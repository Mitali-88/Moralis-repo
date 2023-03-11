import React from "react";
import { Link } from "react-router-dom";
import './Profile.css';
import {defaultImgs} from "../defaultimgs";
import TweetInFeed from "../components/TweetInFeed";
const Profile = () => {
  

  return (
    <>
   <div className="pageIdentify"> Profile </div>
   <img className="profileBanner" src={defaultImgs[1]}></img>
   <div classNae="pfpContainer">
<img className="profilePFP" src= {defaultImgs[0]}></img>
<div className="profileName">Mitali</div>
<div className="profileWallet">xdc33ad48vf...1b</div>
<Link to ="/settings">
  <div className="profileEdit">Edit profile</div>
</Link>
<div className="profileBio">
  Starting Web3 journey
</div>
<div className="profileTabs">
  <div className="profileTab">
    Your Tweets
  </div>
</div>
   </div>
   <TweetInFeed profile={true}></TweetInFeed>
    </>
  );
};

export default Profile;

