import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import Button from '../common/button'
import AddSkill from './addSkill'

export default function AddSkillsForm({ changeSkill }) {
  const initialSkill = {
    id: nanoid(),
    name: '',
    value: 0
  }
  const [skills, setSkills] = useState([initialSkill])

  const addSkillComponent = () => {
    setSkills([...skills, { ...initialSkill, id: nanoid() }])
  }

  return (
    <div className='mb-2'>
      <h5>Навыки</h5>
      {skills.map((skill, index) => (
        <AddSkill
          key={skill.id}
          memSkill={skill}
          changeSkill={changeSkill}
          index={index}
        />
      ))}
      <Button
        buttonType='button'
        buttonName='Add Skill'
        handler={addSkillComponent}
      />
    </div>
  )
}

AddSkillsForm.propTypes = {
  changeSkill: PropTypes.func
}
