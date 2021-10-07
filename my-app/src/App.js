import logo from './logo.svg';
import './App.css';
import { TaskItem } from "./TaskItem";
import { useState } from "react";
function App() {

  const [tasks, setTasks]  = useState ([
    {
      isCompleted:true,
      name: "Learn React on Class",  
    },
    {
      isCompleted:true,
      name: "Learn Hocks",  
    },
    {
      isCompleted:true,
      name: "Keep on Keeping on",  
    }
  ]);

  const handleTaskChange = (index) => () =>{
    console.log("changed! "+ index);
    const arr = [...tasks];
    arr[index].isCompleted = !arr[index].isCompleted
    setTasks(arr);
  };

  return (
    <nain>
      <form>
        <input type="text" placeholder="Task Name"/>
        <button>Creat Task</button>
      </form>
      <ul>
        {tasks.map((task, index) => {
          return (
            <TaskItem 
            isChecked={task.isCompleted} 
            taskName={task.name}  
            onTaskChange={handleTaskChange(index)}
            />
          );      
        })}
      </ul>
    </nain>

  );
}

export default App;
