import React from "react";
import "./Suggestions.css";
import { Avatar } from "@mui/material";
import check from "../../assets/img/check.png";
import tarkan from "../../assets/img/suggestions/tarkan.jpg";
import henry from "../../assets/img/suggestions/henrycavill.jpg";
import cagatay from "../../assets/img/suggestions/cagatay.jpg";
import cemylmz from "../../assets/img/suggestions/cemylmz.jpg";
import jake from "../../assets/img/suggestions/jake.jpg";

const Suggestions = () => {
  return (
    <div className="suggestions">
      <div className="suggestions__header">
        <span className="avatar">
          <Avatar style={{cursor:"pointer"}}>M</Avatar>
          <div className="username__info">
            <span className="user">melih_23</span>
            <span className="realname">Melih KIR</span>
          </div>
        </span>
        <button className="change_button">Geçiş Yap</button>
      </div>

      <div className="suggestions__container">
        <div className="suggestions__title">Senin için önerilenler</div>
        <button className="more_button">Tümünü Gör</button>
      </div>
      <div className="suggestions__usernames">
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <img className="suggestions__check img1" src={check} alt="" style={{width:"12px"}}/>
              <Avatar alt="" src={tarkan} style={{width:"44px",height:"44px",cursor:"pointer"}}/>
              <div className="username__info">
                <span className="user">tarkan</span>
                <span className="relation">Instagram tavsiye ediyor</span>
              </div>
            </span>
          </div>
          <button className="follow_button">Takipt Et</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
            <img className="suggestions__check img2" src={check} alt="" style={{width:"12px"}}/>
            <Avatar alt="" src={henry} style={{width:"44px",height:"44px",cursor:"pointer"}}/>
              <div className="username__info">
                <span className="user">henrycavill</span>
                <span className="relation">Instagram tavsiye ediyor</span>
              </div>
            </span>
          </div>
          <button className="follow_button">Takipt Et</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
            <img className="suggestions__check img3" src={check} alt="" style={{width:"12px"}}/>
            <Avatar alt="" src={cagatay} style={{width:"44px",height:"44px",cursor:"pointer"}}/>
              <div className="username__info">
                <span className="user">cagatayulusoy</span>
                <span className="relation">Instagram tavsiye ediyor</span>
              </div>
            </span>
          </div>
          <button className="follow_button">Takipt Et</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
            <img className="suggestions__check img4" src={check} alt="" style={{width:"12px"}}/>
            <Avatar alt="" src={cemylmz} style={{width:"44px",height:"44px",cursor:"pointer"}}/>
              <div className="username__info">
                <span className="user">cmylmz</span>
                <span className="relation">Instagram tavsiye ediyor</span>
              </div>
            </span>
          </div>
          <button className="follow_button">Takipt Et</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
            <img className="suggestions__check img5" src={check} alt="" style={{width:"12px"}}/>
            <Avatar alt="" src={jake} style={{width:"44px",height:"44px",cursor:"pointer"}}/>
              <div className="username__info">
                <span className="user">jakegyllenhaal</span>
                <span className="relation">Instagram tavsiye ediyor</span>
              </div>
            </span>
          </div>
          <button className="follow_button">Takipt Et</button>
        </div>
      </div>
      <div className="suggestions__footer">
        <div className="suggestions__footerone">
          <a href="#">Hakkında</a> . <a href="#">Yardım</a> .{" "}
          <a href="#">Basın</a> . <a href="#">API</a> .{" "}
          <a href="#">İş Fırsatları</a> . <a href="#">Gizlilik</a> . <br />
          <a href="#">Koşullar</a> . <a href="#">Konumlar</a> .{" "}
          <a href="#">Dil</a> . <a href="#">Meta Verified</a>
        </div>
        <div className="suggestions__footertwo">© 2023 INSTAGRAM FROM META</div>
      </div>
    </div>
  );
};

export default Suggestions;
