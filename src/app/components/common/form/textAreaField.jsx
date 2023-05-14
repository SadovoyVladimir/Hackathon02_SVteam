import React from 'react'
import PropTypes from 'prop-types'

export default function TextAreaField({ label, value, name, onChange }) {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value })
  }

  return (
    <div className='mb-4'>
      <label htmlFor={name}>{label}</label>
      <div className='input-group has-validation'>
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          className='form-control'
        />
      </div>
    </div>
  )
}

TextAreaField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func
}
