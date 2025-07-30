import newton from "../../../assets/Isaac_Newton.jpg";
import "./Style.css";

export default function Profile() {
  return (
    <div>
      <img src="/avatar/Albert-Einstein.jpg" alt="Albert Einstein" />
      <img src={newton} alt="Isaac Newton" />
    </div>
  );
}
