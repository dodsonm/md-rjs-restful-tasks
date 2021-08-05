import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import TaskList  from './components/TaskList';
import AddTask  from './components/AddTask';


const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Lorem Ipsum', reminder: false },
    { id: 2, text: 'Dolor sit tu amet', reminder: false },
    { id: 3, text: 'Foo bar task', reminder: false },
  ]);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;

    const newTask = { id, ...task };
    setTasks([ ...tasks, newTask ]);
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task));
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <Header title='Task Tracker | Home' showAddTask={showAddTask} onAdd={() => setShowAddTask(!showAddTask)} />
        {showAddTask && <AddTask onAdd={addTask} />}
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
