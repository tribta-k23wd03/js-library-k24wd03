import { useState } from "react";

export default function UseState() {
  const [count, setCount] = useState(0); // count = 0;
  // Top (level) of function.
  // Khi khai báo 1 hooks bất kỳ thì
  // luôn đặt ở Top.
  //   let count = 0;
  // tạo vùng nhớ chứa value = 0;

  function increaseCountValue() {
    // (count = count + 1) === (count += 1) === (count ++)
    // phép gán re-assigned
    // khi khai báo const cho variable
    setCount(count + 1);
  }
  // document.addEventListener("click", increaseCountValue)

  // Vấn đề: Mỗi khi mà có tương tác với web,
  // React.DOM sẽ Re-render & Reset count về lại 0.
  // => sử dụng method useState để store value.

  // Bottom of Function (component).
  // render area (XML)

  //   return <button onClick={increaseCountValue()}>click {count} times.</button>;
  // tuyệt đối không call event mà không chèn sự kiện kích hoạt ví dụ như:
  // onClick.
  return <button onClick={increaseCountValue}>click {count} times.</button>;
}
