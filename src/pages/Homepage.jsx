import React from "react";
import "./Homepage.css";
import Sidenav from "../companents/Sidenav/Sidenav";
import Timeline from "../companents/Timeline/Timeline";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage__nav">
        <Sidenav />
      </div>
      <div className="homepage__timeline">
        <Timeline />
      </div>
    </div>
  );
};

export default Homepage;
