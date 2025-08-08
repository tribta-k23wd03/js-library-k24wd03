import { useEffect, useRef } from "react";

function VideoPlayer({ isPlaying, src }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  });

  return <video src={src} ref={ref}></video>;
}

export default VideoPlayer;
