import React from 'react'
import PropTypes from 'prop-types'

const Label = ({ label, htmlFor }) => {
  return <label htmlFor={htmlFor}>{label}</label>
}

export default Label

Label.propTypes = {
  label: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired
}
