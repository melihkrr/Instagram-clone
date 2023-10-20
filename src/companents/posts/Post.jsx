import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import { MoreHoriz } from "@mui/icons-material";
import like from "../../assets/img/heart.png";
import saved from "../../assets/img/saved.png";
import comment from "../../assets/img/chat.png";
import send from "../../assets/img/send.png";
import check from "../../assets/img/check.png";
import happiness from "../../assets/img/happiness.png";
import { useEffect } from 'react';

const Post = ({
  user,
  userImage,
  postImage,
  likes,
  timespamp,
  explain,
  comments,
  video,

}) => {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerAuthor">
          <Avatar
            className="post__avatar"
            style={{ width: "32px", height: "32px" }}
            src={userImage}
            alt=""
          />
          <span className="post__user">{user} </span>
          <img
            src={check}
            alt=""
            style={{
              width: "12px",
              display: "flex",
              alignItems: "center",
              marginLeft: "5px",
              marginRight: "-4px",
            }}
          />
          <span className="post__time">&nbsp; • {timespamp}</span>
        </div>
        <MoreHoriz />
      </div>
      <div></div>
      <div className="post__image">
        {postImage && (
        <img src={postImage} alt="" />)}
      </div>

      <div className="post__content">
  {video && (
    <video width="100%" height="585px" controls autoPlay loop>
      <source src={video} type="video/mp4" />
    </video>
  )}
</div>

      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconsMain">
            <img className="postIcon" src={like} alt="" />
            <img className="postIcon" src={comment} alt="" />
            <img className="postIcon" src={send} alt="" />
          </div>
          <div className="post__iconSave">
            <img className="postIcon" src={saved} alt="" />
          </div>
        </div>
        <div className="post__userlike">
          <span className="post__like">{likes} beğenme</span>
          <div className="post__likename">
            <span className="post__username">{user}</span>
            <span className="post__username">{explain}</span>
          </div>
          <span className="post__comments">{comments} yorumun tümünü gör</span>
          <div className="post__lastdiv">
            <textarea
              aria-label="Yorum ekle..."
              placeholder="Yorum ekle..."
            ></textarea>
            <img src={happiness} alt="" />
          </div>
          <div className="post__border"></div>
        </div>
      </div>
    </div>
  );
};

export default Post;
