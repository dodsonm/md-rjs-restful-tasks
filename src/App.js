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

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task));
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <Header title='Task Tracker | Home' />
        {
          tasks.length > 0 ?
          <TaskList
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          /> :
          'No tasks to show'
        }
      </header>
    </div>
  );
}

export default App;
