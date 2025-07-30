import { getImageUrl } from "./utils";

export default function Avatar({ person, size }) {
  return (
    <div>
      <img
        className="avatar"
        src={getImageUrl(person, size === 100 ? "l" : "s")}
        alt={person.name}
        width={size + 100}
        height={size}
      />
    </div>
  );
}
