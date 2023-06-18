import React from 'react'
import PropTypes from 'prop-types'
import styles from '../style'

const Button = ({text}) => {
  return (
    <button className='primary-gradient tracking-wider font-righteous  px-10 py-3 text-lg font- uppercase rounded-md hover:rounded-lg'>{text}</button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
}
export default Button