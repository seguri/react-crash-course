import Button from './Button'

const Header = () => {
  const onClick = () => {
    console.log('click')
  }

  return (
    <header className='header'>
      <h1>Task Tracker</h1>
      <Button onClick={onClick}/>
    </header>
  )
}

export default Header