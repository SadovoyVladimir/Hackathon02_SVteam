import React from 'react'
import PropTypes from 'prop-types'
import Option from './Option'

const Select = () => {
  const testDate = [
    { key: 'qwerty' },
    { key: 'test' },
    { key: 'test2' },
    { key: 'test3' }
  ]
  return (
    <select
    //   id={name}
    //   name={name}
    //   value={value}
    >
      {testDate.map((obj) => {
        return <Option obj={obj} key={obj.key} />
      })}
    </select>
  )
}

export default Select

Select.propTypes = {
  // label: PropTypes.string.isRequired,
  // htmlFor: PropTypes.string.isRequired
}
