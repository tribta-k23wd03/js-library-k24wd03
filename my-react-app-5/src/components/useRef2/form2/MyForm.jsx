import { useRef } from "react";

function MyInput({ ref }) {
  return <input ref={ref} />;
}

function MyForm() {
  const inputRef = useRef(null);

  function handleFocus() {
    inputRef.current.focus();
  }
  function handleChangeValue() {
    inputRef.current.value = "Child's value has been changed by Parent!.";
  }
  function handleChangeStyle() {
    inputRef.current.style.background = "yellow";
    inputRef.current.style.color = "red";
    inputRef.current.style.fontWeight = "bold";
  }
  function handleDisable() {
    inputRef.current.disabled = true;
  }

  return (
    <div>
      <MyInput ref={inputRef} />
      <div><button onClick={handleFocus}>Focus to input</button></div>
      <div><button onClick={handleChangeValue}>Update Value</button></div>
      <div><button onClick={handleChangeStyle}>Change Style</button></div>
      <div><button onClick={handleDisable}>Disable Input</button></div>
    </div>
  );
}

export default MyForm;
