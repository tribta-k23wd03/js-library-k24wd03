import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function ClickCount() {
  const [count, setCount] = useState(0);
  // useState chứa 2 giá trị (biến lưu trữ & function cập nhật biến đó.)
  // ngoài ra useState có thể khởi tạo giá trị ban đầu trong ().

  // count = 0
  // setCount()

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button className="btn btn-danger" onClick={handleClick}>
      click {count} times.
    </button>
  );
  // 1.  count = 1
  // 2.  count = 2
  // 3.  count = 3
  // ... infinite loops
}
