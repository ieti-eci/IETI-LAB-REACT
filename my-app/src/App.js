import logo from './logo.svg';
import './App.css';
import { TaskItem } from "./TaskItem";
function App() {
  return (
    <nain>
      <form>
        <input type="text" placeholder="Task Name"/>
        <button>Creat Task</button>
      </form>
      <ul>
        <TaskItem isChecked={true} taskName="Learn React" />
        <TaskItem isChecked={true} taskName="Learn Hocks" />
        <TaskItem isChecked={true} taskName="Keep on Keeping on" />
      </ul>
    </nain>

  );
}

export default App;
