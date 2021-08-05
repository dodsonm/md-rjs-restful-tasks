import Button from './Button';
import { useLocation } from 'react-router-dom';

const Header = ({ title, onAdd, showAddTask }) => {
  const location = useLocation();

  return (
    <header>
      <h1>{title}</h1>
      {location.pathname === '/' && <Button 
        text={showAddTask ? 'Close' : 'Add'}
        onClick={onAdd}
      />}
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

export default Header
