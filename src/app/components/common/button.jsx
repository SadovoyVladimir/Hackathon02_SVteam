import React from 'react'
import PropTypes from 'prop-types'

const Button = ({
  style,
  buttonColor = 'primary',
  handler,
  buttonName,
  buttonType
}) => {
  return (
    <button
      style={style}
      className={`btn btn-${buttonColor}`}
      onClick={handler}
      type={buttonType}
    >
      {buttonName}
    </button>
  )
}

Button.propTypes = {
  style: PropTypes.object,
  buttonColor: PropTypes.string,
  handler: PropTypes.func,
  buttonName: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  buttonType: PropTypes.string
}

export default Button
