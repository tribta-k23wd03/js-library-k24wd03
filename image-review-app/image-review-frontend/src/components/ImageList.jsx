import { useEffect, useState } from "react";

function ImageList() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9999/api/images")
      .then((res) => res.json())
      .then(setImages);
  });

  const handleLike = (id) => {
    fetch(`http://localhost:9999/api/images/${id}/like`, { method: "POST" });

    fetch("http://localhost:9999/api/images")
      .then((res) => res.json())
      .then(setImages);
  };

  return (
    <div>
      <h1>Gallery</h1>
      {images.map((i) => (
        <div key={i._id}>
          <img src={i.secure_url} alt={i.originalname} width={200} />
          <button onClick={() => handleLike(i._id)}>Like {i.likes}</button>
        </div>
      ))}
    </div>
  );
}

export default ImageList;
