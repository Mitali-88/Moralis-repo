import React from "react";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import './Settings.css';
import { Input } from "web3uikit";
import pfp1 from "../images/pfp1.png";
import pfp2 from "../images/pfp1.png";
import pfp3 from "../images/pfp1.png";
import pfp4 from "../images/pfp1.png";
import pfp5 from "../images/pfp1.png";
import { defaultImgs } from "../defaultimgs";
const Settings = () => {
  
  const pfps = [pfp1,pfp2,pfp3,pfp4,pfp5];
  const [selectedPFP, setSelectedPEP]= useState();
const inputFile = useRef(null);
const [selectedFile, setSelectedFile] = useState(defaultImgs[1]);

  const onBannerClick = () => {
inputFile.current.click();

const chnageHandler = (event)=>{
  const img = event.target.files[0];
  setSelectedFile(URL.createObjectURL(img));
}
  };
  return (
    <>
    <div className="pageIdentify">setting</div>
    <div className="settingsPage">
      <Input 
        label="Name"
        name="NameChange"
        width="100%"
        labelBgcolor="#141d26"
        // onChange={(e)=> setUsername(e.target.value)}

        />

        <Input
          label="Bio"
          name="bioChange"
          width="100%"
          labelBgcolor="#141d26"
          // onChange= {(e)=> setBio(e.target.value)}

          />

          <div className="pfp">Profile Image (Your NFTs)
          
          <div className="pfpOptions">
            {pfps.map((e,i) => {

              return(
                <>
                <img 
                src={e}
                className={
                  selectedPFP === e ? "pfpOptionSelected":"pfpOption"
                }
                onClick={() => {setSelectedPEP(pfps[i]);}}
                ></img>
                </>
              )
            })}

            </div>
          </div>


    </div>
    </>
  );
};

export default Settings;
