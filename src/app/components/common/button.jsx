import React from 'react'
import PropTypes from 'prop-types'

const Button = ({
  style,
  buttonColor = 'primary',
  handler,
  buttonName,
  buttonType,
  additionalClasses
}) => {
  return (
    <button
      style={style}
      className={`btn btn-${buttonColor} ${additionalClasses}`}
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
  buttonType: PropTypes.string,
  additionalClasses: PropTypes.string
}

export default Button
