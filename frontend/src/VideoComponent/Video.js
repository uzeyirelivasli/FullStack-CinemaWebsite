import React from "react";
import "./Video.css";

import videoImageOne from "../images/video_image1.png";
import videoLogo from "../images/imax_logo.png";

function Video() {
  return (
    <div
      className="video_container"
      style={{ backgroundImage: `url(${videoImageOne})` }}
    >
      <div className="video_description">
        <div className="video_description_top">
          <div className="video_logo">
            <img src={videoLogo} alt="video_logo" />
          </div>
          <h6>BEHIND THE SCENES</h6>
        </div>

        <h1 className="video_name">007</h1>
        <h5>THE FIRST 007 FILM SHOT WITH IMAX FILM CAMERAS | NO TIME TO DIE</h5>
        <h2>
          Director Cary Fukunaga explains why this film looks so much better
          with IMAX. IMAX tickets are on sale now.
        </h2>
        <h1 className="video_watchnow">WATCH NOW</h1>
      </div>
      <div className="video_start_button"></div>
    </div>
  );
}

export default Video;
