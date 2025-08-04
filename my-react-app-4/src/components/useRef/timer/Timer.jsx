import { useRef, useState } from "react";

function Timer() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const i = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(i.current);

    i.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(i.current);
  }

  let secondPassed = 0;

  if (startTime != null && now !== null) {
    secondPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h1>The time: {secondPassed.toFixed(2)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}

export default Timer;
