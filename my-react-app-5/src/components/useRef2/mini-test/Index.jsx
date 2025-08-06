// FIXME:

import { useRef, useState } from "react";
import { flushSync } from "react-dom";

export default function Index() {
  const listRef = useRef(null);
  const [text, setText] = useState("");
  const [items, setItems] = useState(initialItems);

  function handleAdd() {
    const newItem = { id: nextId++, text: text };
    setText("");
    flushSync(() => {
      setItems([...items, newItem]);
    });

    listRef.current.lastChild.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAdd}>ADD NEW ITEM</button>
      <ul ref={listRef}>
        {items.map((i) => (
          <li key={i.id}>{i.text}</li>
        ))}
      </ul>
    </div>
  );
}

// Initial value
let nextId = 0;
let initialItems = [];
for (let i = 0; i < 20; i++) {
  initialItems.push({
    id: nextId++,
    text: "Item #" + (i + 1),
  });
}
