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
  style: PropTypes.object
  content: PropTypes.string
}

export default Badge
