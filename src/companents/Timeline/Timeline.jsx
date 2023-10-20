import React, { useState } from "react";
import "./Timeline.css";
import Suggestions from "../Suggestions/Suggestions.jsx";
import Post from "../posts/Post";
import { Avatar } from "@mui/material";
import cr7 from "../../assets/img/timeline/cr7.jpg";
import cbum from "../../assets/img/timeline/cbum.jpg";
import selena from "../../assets/img/timeline/selena.jpg";
import nike from "../../assets/img/timeline/nike.jpg";
import swift from "../../assets/img/timeline/swift.jpg";
import diesel from "../../assets/img/timeline/diesel.jpg";
import shakira from "../../assets/img/timeline/shakira.jpg";
import beckham from "../../assets/img/timeline/beckham.jpg";
import natgeo from "../../assets/img/timeline/natgeo.jpg"
import direction from "../../assets/img/next.png"
import taylor_post from "../../assets/img/posts/taylor-home.jpg"
import shakira_post from "../../assets/img/posts/shakira-home.jpg"
import selena_post from "../../assets/img/posts/selena-home.jpg"
import nike_post from "../../assets/img/posts/nike-home.jpg"
import diesel_post from "../../assets/img/posts/diesel-home.jpg"
import cr7_post from "../../assets/img/posts/cr7-home.jpg"
import cbum_post from "../../assets/img/posts/cbum-home.jpg"
import beckham_post from "../../assets/img/posts/beckham-home.jpg"
import natgeo_post from "../../assets/img/posts/natio.mp4"

const Timeline = () => {
  const [posts, setPosts] = useState([
    {
      user: "natgeo",
      userImage: natgeo,
      video: natgeo_post,
      likes: 146.688,
      timespamp: "2d",
      explain: "When millions of monarchs are flying around you in the forests",
      comments:6.427,
    },
    {
      user: "nike",
      userImage: nike,
      postImage: nike_post,
      likes: 529.709,
      timespamp: "5d",
      explain: "Breathable, lightweight design 🤝 game-changing moves.",
      comments:1.837,
    },
    {
      user: "cristiano",
      userImage: cr7,
      postImage: cr7_post,
      likes: 798.647,
      timespamp: "1s",
      explain: "What an amazing atmosphere in our stadium! ⚽️⚽️",
      comments: 7.242,
    },
    {
      user: "taylorswift",
      userImage: swift,
      postImage: taylor_post,
      likes: 440.978,
      timespamp: "8s",
      explain: "🩵 Here are the back covers and vault track titles for 1989",
      comments: 12.421,
    },
    {
      user: "vindiesel",
      userImage: diesel,
      postImage: diesel_post,
      likes: 286.411,
      timespamp: "1g",
      explain: "Excited to share what’s coming…",
      comments: 2.108,
    },
    {
      user: "cbum",
      userImage: cbum,
      postImage: cbum_post,
      likes: 746.209,
      explain:"Grateful we get to take on life’s adventure together❤️",
      timespamp: "1g",
      comments: 26.982,
    },
    {
      user: "shakira",
      userImage: shakira,
      postImage: shakira_post,
      likes: 97.285,
      timespamp: "2g",
      explain:"This is so cute I just had to be in it! @belladose #ElJefe",
      comments: 6.182,
    },
    {
      user: "selenagomez",
      userImage: selena,
      postImage: selena_post,
      likes: 390.489,
      timespamp: "4g",
      explain:"This weeks inaugural Rare Impact Fund Benefit.",
      comments: 16.282,
    },
    {
      user: "davidbeckham",
      userImage: beckham,
      postImage: beckham_post,
      likes: 840.268,
      timespamp: "1h",
      explain:"Summer for one more week at least… ☀️ @dbeyewear",
      comments: 1.642,
    },
  ]);

  return (
    <div className="timeline">
      <div className="timeline__left">

        <div className="timeline__container">

        <div className="timeline__header">
        <span className="timeline__avatar">
          <Avatar className="timeline__usergreen" style={{width:"56px",height:"56px"}} src={beckham} />
          <div className="timeline__username">
            <span className="username">davidbeck...</span>
          </div>
        </span>
  
      </div>

      <div className="timeline__header">
        <span className="timeline__avatar">
        <Avatar className="timeline__usergreen" style={{width:"56px",height:"56px"}} src={shakira} />
          <div className="timeline__username">
            <span className="username">shakira</span>
          </div>
        </span>
        
      </div>

      <div className="timeline__header">
        <span className="timeline__avatar">
        <Avatar className="timeline__user" style={{width:"58px",height:"58px"}} src={cr7}/>
          <div className="timeline__username">
            <span className="username">cristiano</span>
          </div>
        </span>
        
      </div>

      <div className="timeline__header">
        <span className="timeline__avatar">
        <Avatar className="timeline__user" style={{width:"58px",height:"58px"}} src={cbum} />
          <div className="timeline__username">
            <span className="username">cbum</span>
          </div>
        </span>
  
      </div>

      <div className="timeline__header">
        <span className="timeline__avatar">
        <Avatar className="timeline__user" style={{width:"58px",height:"58px"}} src={selena} />
          <div className="timeline__username">
            <span className="username">selenagom...</span>
          </div>
        </span>
     
      </div>

      <div className="timeline__header">
        <span className="timeline__avatar">
        <Avatar className="timeline__user" style={{width:"58px",height:"58px"}} src={nike} />
          <div className="timeline__username">
            <span className="username">nike</span>
          </div>
        </span>
   
      </div>

      <div className="timeline__header">
        <span className="timeline__avatar">
        <Avatar className="timeline__user" style={{width:"58px",height:"58px"}} src={swift} />
          <div className="timeline__username">
            <span className="username">taylorswift</span>
          </div>
        </span>
       
      </div>

      <div className="timeline__header">
        <span className="timeline__avatar">
        <Avatar className="timeline__user" style={{width:"58px",height:"58px"}} src={diesel} />
        <img src={direction} alt="" className="timeline__direction"/>
          <div className="timeline__username">
            <span className="username">vindiesel</span>
          </div>
        </span>
    
      </div>



      </div>
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
             user={post.user}
             userImage={post.userImage}
             postImage={post.postImage}
             likes={post.likes}
             timespamp={post.timespamp}
             explain={post.explain}
             comments={post.comments}
             video={post.video}
             />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
};

export default Timeline;
