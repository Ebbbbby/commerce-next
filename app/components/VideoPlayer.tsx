"use client"; // Ensure the component is a client-side component

import { useState, useEffect } from "react";
import ReactPlayer from "react-player";

export default function VideoPlayer() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="h-full">
      <ReactPlayer
        url="https://videos.pexels.com/video-files/1943413/1943413-hd_1920_1080_24fps.mp4"
        controls
        width="100%"
        height="100%"
      />
    </div>
  );
}
