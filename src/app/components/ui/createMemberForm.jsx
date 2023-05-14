import { nanoid } from 'nanoid'
import React, { useState } from 'react'
import TextField from '../common/form/TextField'
import SelectField from '../common/form/selectField'
import TextAreaField from '../common/form/textAreaField'
import AddLinksForm from './addLinksForm'
import Button from '../common/button'
import { useDispatch } from 'react-redux'
import { createMember } from '../../store/memberSlice'

export default function CreateMemberForm() {
  const initialData = {
    id: nanoid(),
    name: '',
    lastName: '',
    img: '',
    age: 0,
    hackathonTeam: '',
    role: '',
    features: '',
    linksToSocialNetworks: [],
    about: [],
    skills: []
  }

  const initialAddress = {
    country: '',
    city: ''
  }
  const dispatch = useDispatch()

  const links = []
  const [data, setData] = useState(initialData)
  const [address, setAddress] = useState(initialAddress)
  const teams = [
    { name: 'Разборка питерская', id: nanoid() },
    { name: 'Другая', id: nanoid() }
  ]
  const roles = [
    { name: 'Teamlead', id: nanoid() },
    { name: 'Developer', id: nanoid() }
  ]

  const handleChange = (target, changeType = 'data') => {
    if (changeType === 'data') {
      setData((prevState) => ({ ...prevState, [target.name]: target.value }))
    } else if (changeType === 'address') {
      setAddress((prevState) => ({ ...prevState, [target.name]: target.value }))
    }
  }

  const handleChangeLink = (changedLink) => {
    if (links.find((link) => link.id === changedLink.id)) {
      const index = links.findIndex((link) => link.id === changedLink.id)
      links[index] = changedLink
    } else {
      links.push(changedLink)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    data.linksToSocialNetworks = links
    data.address = address
    console.log(data)
    dispatch(createMember(data))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h3>Основная информация</h3>
        <TextField
          label='Имя'
          name='name'
          value={data.name}
          onChange={handleChange}
        />
        <TextField
          label='Фамилия'
          name='lastName'
          value={data.lastName}
          onChange={handleChange}
        />
        <TextField
          label='Возраст'
          name='age'
          value={data.age}
          type='number'
          onChange={handleChange}
        />
        <TextField
          label='Ссылка на вашу картинку'
          name='img'
          value={data.img}
          onChange={handleChange}
        />
      </div>
      <div>
        <h3>Адрес</h3>
        <TextField
          label='Страна'
          name='country'
          value={address.country}
          onChange={handleChange}
          changeType={'address'}
        />
        <TextField
          label='Город'
          name='city'
          value={address.city}
          onChange={handleChange}
          changeType={'address'}
        />
      </div>
      <div>
        <h3>Командная информация</h3>
        <SelectField
          label='Выберите команду'
          defaultOption='Choose...'
          name='hackathonTeam'
          options={teams}
          onChange={handleChange}
          value={data.hackathonTeam}
        />
        <SelectField
          label='Роль в команде'
          defaultOption='Choose...'
          name='role'
          options={roles}
          onChange={handleChange}
          value={data.role}
        />
        <TextAreaField
          label='Перечисли, что сделал в проекте'
          name='features'
          value={data.features}
          onChange={handleChange}
        />
      </div>
      <div>
        <h3>О себе</h3>
        <AddLinksForm changeLink={handleChangeLink} />
      </div>
      <Button buttonType='submit' buttonName='Submit' />
    </form>
  )
}
