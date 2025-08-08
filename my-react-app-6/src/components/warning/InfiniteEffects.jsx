import { useEffect, useState } from "react";

function InfiniteEffects() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  });
  return (
    <div>
      <h1>InfiniteEffects</h1>
    </div>
  );
}

export default InfiniteEffects;
