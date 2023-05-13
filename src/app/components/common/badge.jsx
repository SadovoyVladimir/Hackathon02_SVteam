import React from 'react'
import PropTypes from 'prop-types'

const Badge = ({ color = 'primary', content }) => {
  return <span className={`badge bg-${color}`}>{content}</span>
}

Badge.propTypes = {
  color: PropTypes.string,
  content: PropTypes.string.isRequired
}

export default Badge
