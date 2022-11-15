import React from "react";
import "./BackgroundVideo.css";

function BackgroundVideo(props) {
  return (
    <div className="BackgroundVideo">
      <video
        src="././videos/sun-shining.mp4"
        alt="weather"
        id="backgroundVideo"
        autoplay
        muted
        loop
      ></video>
    </div>
  );
}
