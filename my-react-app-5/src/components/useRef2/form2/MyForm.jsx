import { useImperativeHandle, useRef } from "react";

function MyInput({ ref }) {
  const realInputRef = useRef(null);
  useImperativeHandle(ref, () => ({
    focus() {
      realInputRef.current.focus();
    },
    setValue() {
      realInputRef.current.value = "Change value from Child!";
    },
    setStyle(obj) {
      Object.assign(realInputRef.current.style, obj);
    },
    setBackground(bg) {
      realInputRef.current.style.background = bg;
    },
    disable() {
      realInputRef.current.disabled = true;
    },
  }));
  return <input ref={realInputRef} />;
}

function MyForm() {
  const inputRef = useRef(null);

  function handleFocus() {
    inputRef.current.focus();
  }
  function handleChangeValue() {
    inputRef.current.setValue();
  }
  function handleChangeStyle() {
    inputRef.current.setStyle({
      background: "yellow",
      color: "red",
      fontWeight: "bold",
    });
  }

  function handleChangeBg() {
    inputRef.current.setBackground("lime");
  }
  function handleDisable() {
    inputRef.current.disable();
  }

  return (
    <div>
      <MyInput ref={inputRef} />
      <div>
        <button onClick={handleFocus}>Focus to input</button>
      </div>
      <div>
        <button onClick={handleChangeValue}>Update Value</button>
      </div>
      <div>
        <button onClick={handleChangeStyle}>Change Style</button>
      </div>
      <div>
        <button onClick={handleDisable}>Disable Input</button>
      </div>
      <div>
        <button onClick={handleChangeBg}>Color the Input BG</button>
      </div>
    </div>
  );
}

export default MyForm;
