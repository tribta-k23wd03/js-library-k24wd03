import { useRef } from "react";

function Input() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus(); // input
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus to input bar</button>
    </>
  );
}

export default Input;
