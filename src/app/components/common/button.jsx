import React from 'react'
import PropTypes from 'prop-types'

const Button = ({
  buttonColor = 'primary',
  handler,
  buttonName,
  buttonType
}) => {
  return (
    <button
      className={`btn btn-${buttonColor}`}
      onClick={handler}
      type={buttonType}
    >
      {buttonName}
    </button>
  )
}

Button.propTypes = {
  buttonColor: PropTypes.string,
  handler: PropTypes.func,
  buttonName: PropTypes.string,
  buttonType: PropTypes.string
}

export default Button
