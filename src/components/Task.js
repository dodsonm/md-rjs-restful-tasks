import './Task.css';
import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <li onDoubleClick={() => onToggle(task.id)} className={`task ${task.reminder ? 'reminder' : ''}`}>
      {task.text}
      <FaTimes onClick={() => onDelete(task.id)} />
    </li>
  )
}

export default Task
