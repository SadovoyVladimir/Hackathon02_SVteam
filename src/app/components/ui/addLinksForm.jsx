import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import AddLink from './addLink'
import Button from '../common/button'

export default function AddLinksForm({ changeLink }) {
  const initialLink = {
    id: nanoid(),
    name: '',
    url: '',
    img: ''
  }
  const [links, setLinks] = useState([initialLink])

  const addLinkComponent = () => {
    setLinks([...links, { ...initialLink, id: nanoid() }])
  }

  return (
    <div className='mb-2'>
      <h5>Ссылки на профиль</h5>
      {links.map((link, index) => (
        <AddLink
          key={link.id}
          memLink={link}
          changeLink={changeLink}
          index={index}
        />
      ))}
      <Button
        buttonType='button'
        buttonName='Add Link'
        handler={addLinkComponent}
      />
    </div>
  )
}

AddLinksForm.propTypes = {
  changeLink: PropTypes.func
}
