import React from 'react'
import PropTypes, { oneOfType } from 'prop-types'

export default function TextField({
  label,
  value,
  name,
  onChange,
  type = 'text',
  changeType
}) {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value }, changeType)
  }

  const renderMin = () => {
    if (type === 'number' || type === 'range') {
      return 0
    }
    return null
  }
  const renderMax = () => {
    if (type === 'number' || type === 'range') {
      return 100
    }
    return null
  }
  const getClass = () => {
    if (type !== 'range') {
      return 'form-control'
    }
  }

  return (
    <div className='mb-4'>
      <label htmlFor={name}>{label}</label>
      <div className='input-group has-validation'>
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          min={renderMin()}
          max={renderMax()}
          onChange={handleChange}
          className={getClass()}
        />
        {type === 'range' && <span>{value}%</span>}
      </div>
    </div>
  )
}

TextField.propTypes = {
  label: PropTypes.string,
  value: oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  changeType: PropTypes.string
}
