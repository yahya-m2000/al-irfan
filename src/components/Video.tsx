import React from "react";

type VideoProps = {
  video: string;
};

const Video: React.FC<VideoProps> = ({ video }) => {
  return (
    <div
      style={{
        backgroundColor: "lightyellow",
        padding: "20px",
        margin: "10px",
      }}
    >
      <video controls width="100%">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
