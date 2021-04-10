import PropTypes from 'prop-types'

const Button = ({onClick}) => {
  return <button onClick={onClick} className='btn'>Add</button>
}

Button.propTypes = {
  onClick: PropTypes.func,
}

export default Button
