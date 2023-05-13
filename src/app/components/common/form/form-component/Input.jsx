import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ type, name, id }) => {
  return <input type={type} id={id} name={name} />
}

export default Input

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}
