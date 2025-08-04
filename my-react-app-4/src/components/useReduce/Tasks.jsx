import { useReducer } from "react";
import AddTask from "./child-components/AddTask";
import TaskList from "./child-components/TaskList";
import tasksReduce from "./useReduce";

let nextId = 5;
const initialTasks = [
  { id: 0, text: "Tham quan bản Cát Cát", done: true },
  { id: 1, text: "Chinh phục đỉnh Fansipan", done: false },
  { id: 2, text: "Dạo chơi quảng trường trung tâm", done: false },
  { id: 3, text: "Tham quan ruộng bậc thang", done: false },
  { id: 4, text: "Thưởng thức lẩu cá hồi", done: false },
];

function Tasks() {
  //   const [tasks, setTasks] = useState(initialTasks);
  const [tasks, dispatch] = useReducer(tasksReduce, initialTasks);

  function handleAddTask(text) {
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  }
  function handleChangeTask(task) {
    dispatch({
      type: "changed",
      task: task,
    });
  }
  function handleDeleteTask(taskId) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }
  return (
    <div>
      <h1>Lịch trình du lịch SAPA</h1>
      <AddTask onTaskAdd={handleAddTask} />
      <TaskList
        tasks={tasks}
        onTaskChange={handleChangeTask}
        onTaskDelete={handleDeleteTask}
      />
    </div>
  );
}

export default Tasks;
