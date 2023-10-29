import React from 'react'
import PropTypes from 'prop-types'
import styles from '../style'

const Button = ({text, handleClick}) => {
  return (
    <button 
      className='primary-gradient tracking-wider font-righteous  md:px-9 md:py-2 text-lg z-50 uppercase rounded-md hover:rounded-lg px-12 py-1 text-balck' 
      onClick={handleClick}
    > {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
}
export default Button