import { useState } from "react";

let k24WD03Student = [
  { id: 0, name: "Mai Xuân Gia Quyến" },
  { id: 1, name: "Dr. Tiên" },
  { id: 2, name: "Hòa" },
];

export const List = () => {
  const [students, setStudents] = useState(k24WD03Student);

  return (
    <div>
      <h1>K24WD-03 Students</h1>
      <ul>
        {students.map((s) => (
          <li key={s.id}>
            {s.name}{" "}
            <button
              onClick={() => {
                setStudents(students.filter((e) => e.id !== s.id));
              }}>
              Xóa Bỏ
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
