import { useEffect, useRef } from "react";

function VideoPlayer({ isPlaying, src }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      console.log("Calling video.play()");
      ref.current.play();
    } else {
      console.log("Calling video.pause()");
      ref.current.pause();
    }
  },[isPlaying]);

  return <video src={src} ref={ref}></video>;
}

export default VideoPlayer;
