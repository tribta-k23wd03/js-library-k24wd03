import { useState } from "react";
import VideoPlayer from "./VideoPlayer";
import "./style.css";

function MyVideoApp() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://www.shutterstock.com/shutterstock/videos/3764408927/preview/stock-footage-pouring-drink-water-to-to-glass-of-water-slow-motion-in-blue-ice-cubes-super-slow-motion-fps.mp4"
      />
    </div>
  );
}

export default MyVideoApp;
