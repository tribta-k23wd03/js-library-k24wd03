// import { useRef } from "react";

import { useRef } from "react";

// function Counter() {
//   // hooks
//   const ref = useRef(0);
//   function handleClick() {
//     ref.current = ref.current + 1;
//     alert("You clicked " + ref.current + " times!!!");
//   }
//   return (
//     <div>
//       <button onClick={handleClick}>{`Click me!`}</button>
//       {/* 1 -> 2 -> 3 -> ... */}
//     </div>
//   );
// }

// export default Counter;

// useState()

function Counter() {
  const count = useRef(0);
  function handleClick() {
    count.current = count.current + 1;
  }
  return (
    <button
      onClick={handleClick}>{`You clicked ${count.current} times.`}</button>
  );
}

export default Counter;
