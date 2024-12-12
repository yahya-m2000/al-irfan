"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface SlideshowProps {
  images: string[];
}

export default function Slideshow({ images }: SlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); // 7 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            currentIndex === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            fill
            src={image}
            alt={`Slide ${index}`}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="absolute inset-0 bg-green-300 mix-blend-multiply" />
        </div>
      ))}
    </div>
  );
}
