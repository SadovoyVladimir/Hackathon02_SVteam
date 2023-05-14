import React from 'react'
import PropTypes from 'prop-types'

const Badge = ({ color = 'primary', content, style }) => {
  return (
    <span style={style} className={`badge bg-${color} m-1`}>
      {content}
    </span>
  )
}

Badge.propTypes = {
  color: PropTypes.string,
  content: PropTypes.string.isRequired,
  style: PropTypes.object
}

export default Badge
