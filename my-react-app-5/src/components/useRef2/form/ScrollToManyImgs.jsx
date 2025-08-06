import { useRef, useState } from "react";
import "./style2.css";

function ScrollToManyImgs() {
  const imagesRef = useRef(null);
  const [imageList, setImageList] = useState(setupImageList);

  function scrollToImage(image) {
    const map = getMap();
    const node = map.get(image);
    node.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function getMap() {
    if (!imagesRef.current) {
      imagesRef.current = new Map();
    }
    return imagesRef.current;
  }

  return (
    <>
      <nav>
        <button onClick={() => scrollToImage(imageList[0])}>Start</button>
        <button onClick={() => scrollToImage(imageList[4])}>Center</button>
        <button onClick={() => scrollToImage(imageList[9])}>End</button>
      </nav>
      <div>
        <ul>
          {imageList.map((image) => (
            <li
              key={image}
              ref={(node) => {
                const map = getMap();
                if (node) {
                  map.set(image, node);
                } else {
                  map.delete(image);
                }
              }}>
              <img src={image} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function setupImageList() {
  const imageList = [];

  for (let i = 0; i < 10; i++) {
    let rand = Math.floor(Math.random() * 200);
    imageList.push(`https://picsum.photos/id/${rand}/200/300`);
  }
  return imageList;
}

export default ScrollToManyImgs;
