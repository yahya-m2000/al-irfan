import Image from "next/image";
import React from "react";

type HeroImageProps = {
  image?: string;
  video?: string;
  title?: string;
  subtitle?: string;
};

const HeroImage: React.FC<HeroImageProps> = ({ image, video }) => {
  if (video) {
    return (
      <div
        style={{
          backgroundColor: "lightgreen",
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
  }

  if (image) {
    return (
      <div
        style={{
          backgroundColor: "lightcoral",
          padding: "20px",
          margin: "10px",
        }}
      >
        <Image src={image} alt="Hero" width={10} height={10} />
      </div>
    );
  }

  return null;
};

export default HeroImage;
