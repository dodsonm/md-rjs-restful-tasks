import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import TaskList  from './components/TaskList';


function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Lorem Ipsum', reminder: false },
    { id: 2, text: 'Dolor sit tu amet', reminder: false },
    { id: 3, text: 'Foo bar task', reminder: false },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <Header title="Task Tracker | Home" />
        <TaskList tasks={tasks} />
      </header>
    </div>
  );
}

export default App;
