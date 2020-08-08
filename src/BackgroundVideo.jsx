import React from "react";
import "./back-ground-video.style.scss";

const VideoBackground = () => {
  return (
    <div>
      <video
        src="https://encrypted-vtbn3.gstatic.com/video?q=tbn:ANd9GcQ0N3LZWsGqu2m73UPqteKYLcRSHnN2TrVYGj_-UjjVNPfVGxw-"
        autoPlay
        loop
        playsinline
        muted
        poster="polina.jpg"
      ></video>

      <header className="viewport-header">
        <h1>
          Explore
          <span>IPM</span>
        </h1>
      </header>
    </div>
  );
};

export { VideoBackground };
