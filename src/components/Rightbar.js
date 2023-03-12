import React from "react";
import './Rightbar.css';
import explorerImage from "../images/explorerImage.png";
import rpcImage from "../images/rpcImage.png";
import academy from "../images/academy.png";
import youtube from "../images/youtube.png";
import js from "../images/js.png";
import { Input } from "web3uikit";


const Rightbar = () => {
  const trends = [
    {
      img: explorerImage,
      text: "BlocksScan Explorer for XDC Network | Demo video BlocksScan XDC Network Explorer ...",
      link: "https://www.youtube.com/watch?v=kYkDWIgxNZw",
    },
    {
      img: rpcImage,
      text: "XDCRPC - Decentralized RPC Service for XDC Network ...",
      link: "https://www.youtube.com/watch?v=E1yJxhnAqNU",
    },
    {
      img: academy,
      text: "Master DeFi in 2022. Start  at the Moralis Academy...",
      link: "https://academy.moralis.io/courses/defi-101",
    },
    {
      img: js,
      text: "Become a Web3 Developer with just simple JS...",
      link: "https://academy.moralis.io/all-courses",
    },
    {
      img: youtube,
      text: "Best youtube channel to learn about Web3...",
      link: "https://www.youtube.com/channel/UCgWS9Q3P5AxCWyQLT2kQhBw",
    },
  ];

  return (
    <>
    <div className="rightbarContent">
      <Input
        label="Search Twitter"
        name ="Search Twitter"
        prefixIcon="search"
        labelBgColor="#141d26" 
        >
      </Input>

    <div className="trends">
      News For You
      {trends.map((e) => {
          return(
            <>
            <div className="trend" onClick={() => window.open(e.link)}>
              <img src={e.img} className="trendImg"></img>
              <div className="trendText">{e.text}</div>
            </div>
            </>
          )
      })}
    </div>

    </div>
    </>
  );
};

export default Rightbar;
