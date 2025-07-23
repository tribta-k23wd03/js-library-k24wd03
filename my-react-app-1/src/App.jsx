import MyAvatar from "./components/avatar/MyAvatar";
import MyButton, { IconButton } from "./components/btn/MyButton";
import AboutPage from "./components/page/AboutPage";

export default function App() {
  return (
    // React không chấp nhận 2 element cùng lúc.
    // Mà phải Swap trong 1 element cha
    // như <div> <></> (react fragment)
    <>
      <AboutPage />
      <MyAvatar />
      <MyButton />
      <IconButton />
    </>
  );
}
