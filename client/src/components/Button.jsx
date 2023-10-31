import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, handleClick, variant, className }) => {
  let buttonStyle = `tracking-wider font-righteous md:px-9 md:py-2 text-lg z-50 uppercase rounded-md hover:rounded-lg px-12 py-1 text-black ${className}`;

  if (variant === 'filled') {
    buttonStyle += ' primary-gradient'; 
  } else if (variant === 'outline') {
    buttonStyle += ' bg-black text-white font-secondary box-border -m-[1px]'; // Added box-border and negative margin
  }

  const wrapperStyle = (variant === 'outline') ? 'primary-gradient p-[2px] rounded-md hover:rounded-lg inline-block hidden md:inline-block' : 'inline-block';

  return (
    <div className={wrapperStyle}>
      <button 
        className={buttonStyle} 
        onClick={handleClick}
      >
        {text}
      </button>
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['filled', 'outline']),
  className: PropTypes.string
}

Button.defaultProps = {
  variant: 'filled',
  className: ''
}

export default Button;
