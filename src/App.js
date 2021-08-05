import './App.css';

import { useState, useEffect } from 'react';
import Header from './components/Header';
import TaskList  from './components/TaskList';
import AddTask  from './components/AddTask';


const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }

    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();

    return data;
  }
  const fetchTaskById = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();

    return data;
  }

  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    });

    const data = await res.json();

    setTasks([...tasks, data]);
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    });

    setTasks(tasks.filter((task) => task.id !== id));
  }

  const toggleReminder = async (id) => {
    const storedTask = await fetchTaskById(id);
    const updatedTask = { ...storedTask, reminder: !storedTask.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    });

    const data = await res.json();

    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task));
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
