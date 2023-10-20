import React from "react";
import "./Sidenav.css";
import HomeIcon from "@mui/icons-material/Home";
import logo from '../../assets/img/logo.png';
import { Avatar } from "@mui/material";
import threads from "../../assets/img/threads.png";
import search from "../../assets/img/search.png";
import compas from "../../assets/img/compass.png";
import video from "../../assets/img/video.png";
import massage from "../../assets/img/massage.png";
import more from "../../assets/img/more.png";
import heart from "../../assets/img/heart.png";
import morem from "../../assets/img/menubar.png";


const sidenav = () => {
  return (
    <div className="sidenav">
      <img
        className="sidenav__logo"
        src={logo}
        alt="Instagram Logo"
        style={{cursor:"pointer"}}
      />

      <div className="sidenav__buttons">

          <button className="sidenav__buttonone">
            <HomeIcon style={{fontSize:'32px'}}/>
            <span>Ana Sayfa</span>
          </button>

          <button className="sidenav__button">
            <img src={search} alt="" />
            <span>Ara</span>
          </button>

          <button className="sidenav__button">
            <img src={compas} alt="" />
            <span>Keşfet</span>
          </button>
       
          <button className="sidenav__button">
            <img src={video} alt="" />
            <span>Reels</span>
          </button>
       
          <button className="sidenav__button">
            <img src={massage} alt="" />
            <span>Mesajlar</span>
          </button>
      
          <button className="sidenav__button">
           <img src={heart} alt="" />
            <span>Bildirimler</span>
          </button>
     
          <button className="sidenav__button">
          <img src={more} alt="" />
            <span>Oluştur</span>
          </button>
 
          <button className="sidenav__button">
            <Avatar style={{width:"24px",height:"24px",marginLeft:"2px"}}/>
            <span>Profil</span>
          </button>


      </div>
      <div className="sidenav__more">
        
        <button className="sidenav__button">
          <img src={threads} alt="" />
          <span>Threads</span>
        </button>

        <button className="sidenav__button">
          <img style={{width:"36px",marginLeft:"-2.5px"}} src={morem} alt="" />
          <span>Daha Fazla</span>
        </button>
      </div>
      <div className="sidenav__border"></div>
    </div>
  );
};

export default sidenav;
