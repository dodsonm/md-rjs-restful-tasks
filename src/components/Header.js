import Button from './Button';

const Header = ({ title }) => {

  const onClick = (e) => {
    console.log('%s Clicked', e.target);
  }

  return (
    <header>
      <h1>{title}</h1>
      <Button text="Add" onClick={onClick} />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

export default Header
