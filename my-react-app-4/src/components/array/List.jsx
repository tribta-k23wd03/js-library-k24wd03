import { people } from "./data.jsx";
import { getImageUrl } from "./ImageUrl";
import "./List.css";

function List() {
  const physicistsy = people.filter(
    (person) => person.profession === "theoretical physicist"
  );

  const listItems = physicistsy.map((person) => (
    <li>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b> <span className="prof">{person.profession}</span>
      </p>
      <p>{person.biography}</p>
    </li>
  ));
  return <ul>{listItems}</ul>;
}

export default List;
