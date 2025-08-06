import { useRef } from "react";
import "./style.css";

function ScrollView() {
  const firstCatRef = useRef(null);
  const secondCatRef = useRef(null);
  const thirdCatRef = useRef(null);

  function handleScrollToFirstCat() {
    firstCatRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  function handleScrollToSecondCat() {
    secondCatRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
  function handleScrollToThirdCat() {
    thirdCatRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }

  return (
    <div>
      <nav>
        <button onClick={handleScrollToFirstCat}>Neo</button>
        <button onClick={handleScrollToSecondCat}>Millie</button>
        <button onClick={handleScrollToThirdCat}>Neo & Millie</button>
      </nav>
      <ul>
        <li>
          <img
            ref={firstCatRef}
            src="https://placecats.com/neo/300/200"
            alt="Neo"
          />
        </li>
        <li>
          <img
            ref={secondCatRef}
            src="https://placecats.com/millie/300/150"
            alt="Millie"
          />
        </li>
        <li>
          <img
            ref={thirdCatRef}
            src="https://placecats.com/millie_neo/300/200%22"
            alt="Millie_Neo"
          />
        </li>
      </ul>
    </div>
  );
}

export default ScrollView;
