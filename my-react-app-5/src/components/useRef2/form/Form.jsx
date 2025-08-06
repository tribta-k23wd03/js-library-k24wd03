import { useRef } from "react";

function Form() {
  const myRef = useRef(null);
  // NOTE: myRef = {current: null}

  return <form ref={myRef}>Form</form>;
  // NOTE: myRef = {current: <form>}
}

export default Form;
