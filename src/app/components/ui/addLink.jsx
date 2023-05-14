import React, { useState } from 'react'
import PropTypes from 'prop-types'
import TextField from '../common/form/TextField'

export default function AddLink({ memLink, index, changeLink }) {
  const [link, setLink] = useState(memLink)

  const handleChange = (target) => {
    setLink((prevState) => {
      const newState = { ...prevState, [target.name]: target.value }
      changeLink(newState)
      return newState
    })
  }

  return (
    <>
      <p>Ссылка {index + 1}</p>
      <TextField
        label='Название'
        name='name'
        value={link.name}
        onChange={handleChange}
      />
      <TextField
        label='Ссылка'
        name='url'
        value={link.url}
        onChange={handleChange}
      />
      <TextField
        label='Ссылка на картинку'
        name='img'
        value={link.img}
        onChange={handleChange}
      />
    </>
  )
}

AddLink.propTypes = {
  memLink: PropTypes.object,
  changeLink: PropTypes.func,
  index: PropTypes.number
}
