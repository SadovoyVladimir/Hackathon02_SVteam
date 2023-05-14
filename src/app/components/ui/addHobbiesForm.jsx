import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import Button from '../common/button'
import AddHobby from './addHobby'

export default function AddHobbiesForm({ changeHobby }) {
  const initialHobby = {
    id: nanoid(),
    content: ''
  }
  const [hobbies, setHobbies] = useState([initialHobby])

  const addHobbyComponent = () => {
    setHobbies([...hobbies, { ...initialHobby, id: nanoid() }])
  }

  return (
    <div className='mb-2'>
      <h5>Увлечения</h5>
      {hobbies.map((hobby, index) => (
        <AddHobby
          key={hobby.id}
          memHobby={hobby}
          changeHobby={changeHobby}
          index={index}
        />
      ))}
      <Button
        buttonType='button'
        buttonName='Add Hobby'
        handler={addHobbyComponent}
      />
    </div>
  )
}

AddHobbiesForm.propTypes = {
  changeHobby: PropTypes.func
}
