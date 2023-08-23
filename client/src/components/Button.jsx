import React from 'react'
import PropTypes from 'prop-types'
import styles from '../style'

const Button = ({text, handleClick}) => {
  return (
    <button 
      className='primary-gradient tracking-wider font-righteous  md:px-10 md:py-3 text-lg font- uppercase rounded-md hover:rounded-lg px-12 py-1' 
      onClick={handleClick}
    > {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
}
export default Button