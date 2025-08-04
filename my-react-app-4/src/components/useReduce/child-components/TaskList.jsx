import { useState } from "react";

function TaskList({ tasks, onTaskChange, onTaskDelete }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} className="task-item">
          <Task task={task} onChange={onTaskChange} onDelete={onTaskDelete} />
        </li>
      ))}
    </ul>
  );
}

export function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <>
      <div>
        <input
          type="checkbox"
          checked={task.done}
          onChange={(e) => {
            onChange({ ...task, done: e.target.checked });
          }}
        />
        {isEditing ? (
          <input
            className="task-edit-text"
            value={task.text}
            onChange={(e) => {
              onChange({ ...task, text: e.target.value });
            }}
          />
        ) : (
          <span className="task-text">{task.text}</span>
        )}
        <div className="task-actions">
          {isEditing ? (
            <button onClick={() => setIsEditing(false)}>Save</button>
          ) : (
            <button onClick={() => setIsEditing(true)}>Edit</button>
          )}

          <button onClick={() => onDelete(task.id)}>Delete</button>
        </div>
      </div>
    </>
  );
}

export default TaskList;
