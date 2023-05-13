import React from 'react'
import PropTypes from 'prop-types'

const Option = ({ obj }) => {
  return <option value={obj.key}>{obj.key}</option>
}

export default Option

Option.propTypes = {
  obj: PropTypes.object.isRequired
}
