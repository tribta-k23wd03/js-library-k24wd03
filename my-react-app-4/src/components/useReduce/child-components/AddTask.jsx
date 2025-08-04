import { useState } from "react";

function AddTask({ onTaskAdd }) {
  const [text, setText] = useState();
  return (
    <>
      <input
        placeholder="Add task"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          onTaskAdd(text);
        }}>
        Add
      </button>
    </>
  );
}

export default AddTask;
