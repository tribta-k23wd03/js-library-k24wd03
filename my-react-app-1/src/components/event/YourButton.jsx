// document.AddEventListener = ("click", (e)=>{e})

// sử dụng ReactDOM để xử lý event.
export default function YourButton() {
  function handleClick() {
    alert("You clicked me!!!");
  }

  return (
    <div>
      <button onClick={handleClick}>Click me please!</button>
      {/* <button onClick={handleClick()}>Click me please!</button> */}
      {/* Nếu call function mà không có dấu "()" thì
      nó sẽ lấy cú pháp của funciton đó và hiển thị.
      Ngược lại nếu có dấu "()" thì nó sẽ thực thi function. */}
    </div>
  );
}
