import { nanoid } from 'nanoid'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createMember } from '../../store/memberSlice'
import TextField from '../common/form/TextField'
import SelectField from '../common/form/selectField'
import TextAreaField from '../common/form/textAreaField'
import Button from '../common/button'
import AddLinksForm from './addLinksForm'
import AddSkillsForm from './addSkillsForm'
import AddHobbiesForm from './addHobbiesForm'

export default function CreateMemberForm() {
  const initialData = {
    id: nanoid(),
    name: '',
    lastName: '',
    img: '',
    age: 0,
    hackathonTeam: '',
    role: '',
    features: ''
  }
  const initialAddress = {
    country: '',
    city: ''
  }
  const teams = [
    { name: 'Разборка питерская', id: nanoid() },
    { name: 'Другая', id: nanoid() }
  ]
  const roles = [
    { name: 'Teamlead', id: nanoid() },
    { name: 'Developer', id: nanoid() }
  ]
  const links = []
  const skills = []
  const hobbies = []

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [data, setData] = useState(initialData)
  const [address, setAddress] = useState(initialAddress)

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

  const handleChangeSkill = (changedSkill) => {
    if (skills.find((skill) => skill.id === changedSkill.id)) {
      const index = skills.findIndex((skill) => skill.id === changedSkill.id)
      skills[index] = changedSkill
    } else {
      skills.push(changedSkill)
    }
  }

  const handleChangeHobby = (changedHobbie) => {
    if (hobbies.find((hobby) => hobby.id === changedHobbie.id)) {
      const index = hobbies.findIndex((skill) => skill.id === changedHobbie.id)
      hobbies[index] = changedHobbie
    } else {
      hobbies.push(changedHobbie)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newData = {
      ...data,
      address,
      linksToSocialNetworks: links,
      skills,
      about: hobbies
    }
    await dispatch(createMember(newData))
    navigate('/')
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
        <AddSkillsForm changeSkill={handleChangeSkill} />
        <AddHobbiesForm changeHobby={handleChangeHobby} />
      </div>
      <div className='d-flex justify-content-center'>
        <Button
          buttonType='submit'
          buttonName='CREATE'
          style={{ width: 50 + '%' }}
        />
      </div>
    </form>
  )
}
