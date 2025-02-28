import "./App.css";
import { useState } from "react";

function App() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");
  function handleAddTask(e) {
    if (newTask.trim() === "" || task.includes(newTask)) return;
    setTask([...task, newTask]);
    setNewTask("");
  }
  function handleDeleteTask(index) {
    console.log("index : ", index);
    setTask(task.filter((_, i) => i !== index));
  }
  return (
    <>
      <div>
        <label>
          TaskBar
          <input
            placeholder="Add a New Task"
            type="string"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          ></input>
          <button onClick={handleAddTask}>Submit</button>
        </label>
      </div>
      <ol>
        {task.map((task, index) => {
          return (
            <li key={index}>
              {task}
              <button
                onClick={() => handleDeleteTask(index)}
                style={{ margin: "10px" }}
              >
                delete
              </button>
            </li>
          );
        })}
      </ol>
    </>
  );
}

export default App;
