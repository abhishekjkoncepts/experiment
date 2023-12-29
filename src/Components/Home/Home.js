import React from "react";
import "./Home.css";

import video from "../../assets/video/VideoWithoutText.mp4";

const Home = () => {
  return (
    <section className="home">
      <div className="overlay"></div>
      <video
        src={video}
        muted
        autoPlay
        width="100%"
        controls={false}
        loop={true}
        type="video/mp4"
      ></video>

      <div className="homeContent container">
        <div className="textDiv">

          <h1 style={{fontSize:"60px"}}>Best Hoardings in Delhi</h1>

          <h1 className="homeTitle">Search your Holidays</h1>
          
        </div>
      </div>
    </section>
  );
};

export default Home;
