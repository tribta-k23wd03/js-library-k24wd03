import MyAvatar from "./components/avatar/MyAvatar";
import MyButton, { IconButton } from "./components/btn/MyButton";
import CheckLogin from "./components/condition/CheckLogin";
import YourButton from "./components/event/YourButton";
import ShoppingList from "./components/list/ShoppingList";
import AboutPage from "./components/page/AboutPage";
import ClickCount from "./components/storage/ClickCount";

export default function App() {
  return (
    // React không chấp nhận 2 element cùng lúc.
    // Mà phải Swap trong 1 element cha
    // như <div> <></> (react fragment)
    <>
      <ClickCount />
      <YourButton />
      <CheckLogin />
      <AboutPage />
      <MyAvatar />
      <MyButton />
      <IconButton />
      <ShoppingList />
    </>
  );
}
