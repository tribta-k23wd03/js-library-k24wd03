import { useEffect, useRef, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const intervalCount = useRef(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      intervalCount.current += 1;
      setSeconds((s) => s + 1);
    }, 2_000);

    console.log(`Total invervals count: 
      ${intervalCount.current}`);

    return () => {
      clearInterval(intervalId);
      console.log("Interval ID cleared!");
    };
  }, []);

  return <h2>{seconds}</h2>;
}

export default Timer;
