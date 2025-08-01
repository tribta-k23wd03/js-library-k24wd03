import { useState } from "react";
import { people } from "./data.jsx";
import { getImageUrl } from "./ImageUrl";
import "./List.css";

function List() {
  const professions = [...new Set(people.map((person) => person.profession))];

  const [selectedProf, setSelectedProf] = useState(professions);

  const filterPeople = people.filter(
    (person) => person.profession === selectedProf
  );

  const listItems = filterPeople.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b> <span className="prof">{person.profession}</span>
      </p>
      <p>{person.biography}</p>
    </li>
  ));
  return (
    <div>
      <select
        value={selectedProf}
        onChange={(e) => setSelectedProf(e.target.value)}>
        {professions.map((prof) => (
          <option key={prof} value={prof}>
            {prof}
          </option>
        ))}
      </select>

      <ul>{listItems}</ul>
    </div>
  );
}

export default List;
