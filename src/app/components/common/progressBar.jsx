import React from 'react'
import PropTypes from 'prop-types'

const ProgressBar = ({ name, value, color = 'primary', isAnimated = true }) => {
  return (
    <>
      <h5>{name}</h5>
      <div className='progress'>
        <div
          className={`progress-bar progress-bar-striped progress-bar-${
            isAnimated ? 'animated' : ''
          } bg-${color}`}
          style={{ width: `${value}%` }}
        >
          {`${value}%`}
        </div>
      </div>
    </>
  )
}

ProgressBar.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  color: PropTypes.string,
  isAnimated: PropTypes.bool
}

export default ProgressBar
