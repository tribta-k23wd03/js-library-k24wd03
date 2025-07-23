import "./MyAvatar.css";
import url from "../../assets/img/avatar.jpg";

const user = {
  name: "Meow",
  imgUrl: url,
  imgSize: 90,
};

export default function MyAvatar() {
  return (
    <img
      src={user.imgUrl}
      alt={"Photo of" + user.name}
      className="avatar"
      style={{ width: user.imgSize, height: user.imgSize }}
    />
  );
}
