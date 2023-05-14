import React, { useState } from 'react'
import PropTypes from 'prop-types'
import TextField from '../common/form/TextField'

export default function AddSkill({ memSkill, index, changeSkill }) {
  const [skill, setSkill] = useState(memSkill)

  const handleChange = (target) => {
    setSkill((prevState) => {
      const newState = { ...prevState, [target.name]: target.value }
      changeSkill(newState)
      return newState
    })
  }

  return (
    <>
      <p>Навык {index + 1}</p>
      <TextField
        label='Название'
        name='name'
        value={skill.name}
        onChange={handleChange}
      />
      <TextField
        label='Процент владения навыком'
        name='value'
        value={skill.value}
        onChange={handleChange}
        type='range'
      />
    </>
  )
}

AddSkill.propTypes = {
  memSkill: PropTypes.object,
  changeSkill: PropTypes.func,
  index: PropTypes.number
}
