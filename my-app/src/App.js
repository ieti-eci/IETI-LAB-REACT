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
  
  const [textValue, setTextValue] = useState("");

  const handleTaskChange = (index) => () =>{
    console.log("changed! "+ index);
    const arr = [...tasks];
    arr[index].isCompleted = !arr[index].isCompleted
    setTasks(arr);
  };
  
  const newTask=(name) =>{
    const newTask = {
      isCompleted:false,
      name:name,
    };
    setTasks([...tasks, newTask]);
  };


  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log(textValue);
    newTask(textValue);
  };

  const handleTextChange = (event) => {
    const value = event.target.value;
    setTextValue(value);

  };

  return (
    <main>
      <form onSubmit={handleSubmit} >
        <input 
        value={textValue} 
        onChange= {handleTextChange} 
        type="text" 
        placeholder="Task Name"/>
        <button>Create Task</button>
      </form>
      <ul>
        {tasks.map((task, index) => {
          return (
            <TaskItem 
            taskName={task.name}  
            isChecked={task.isCompleted} 
            onTaskChange={handleTaskChange(index)}
            />
          );      
        })}
      </ul>
    </main>

  );
}


export default App;
