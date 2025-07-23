// 1. If condition
//      if(condition){true}else{false}

import AdminPanel from "./login/AdminPanel";
import LoginForm from "./login/LoginForm";

// 2. Ternary condition
// CheckLogin ? <AdminPanel/> : <LoginForm/>

// 3. Boolean condition
// true && true // ưu tiên falsy
// true && false
// true || false // ưu tiên truthy
// true ?? false // ?? dùng để kiểm tra kết quả trả về là undefined/ null
function isLoggedIn() {
  return Math.random() < 0.5 ? <AdminPanel /> : undefined;
}
// true/false

export default function CheckLogin() {
  //   let content;

  //   if (isLoggedIn()) {
  //     content = <AdminPanel />;
  //   } else {
  //     content = <LoginForm />;
  //   }

  //   return <div>{isLoggedIn() ? <AdminPanel /> : <LoginForm />}</div>;
  return <div>{isLoggedIn() ?? <LoginForm />}</div>;
}
