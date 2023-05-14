import React, { useState } from 'react'
import PropTypes from 'prop-types'
import TextField from '../common/form/TextField'

export default function AddHobby({ memHobby, index, changeHobby }) {
  const [hobby, setHobby] = useState(memHobby)

  const handleChange = (target) => {
    setHobby((prevState) => {
      const newState = { ...prevState, [target.name]: target.value }
      changeHobby(newState)
      return newState
    })
  }

  return (
    <>
      <p>Увлечение {index + 1}</p>
      <TextField
        label='Название'
        name='content'
        value={hobby.content}
        onChange={handleChange}
      />
    </>
  )
}

AddHobby.propTypes = {
  memHobby: PropTypes.object,
  changeHobby: PropTypes.func,
  index: PropTypes.number
}
