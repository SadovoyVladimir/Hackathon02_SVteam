import React from 'react'
import UserCard from '../ui/UserCard'
import TextField from '../common/form/TextField'
import TeamInfo from '../ui/TeamInfo'
import api from '../../../api'
import MembersList from '../ui/MembersList'

export default function MainPage() {

  const { users, team } = api

  return (
    <>
      <h1>Main page</h1>
      <TeamInfo
        name={team.teamName}
        img={team.img}
        title={team.taskTitle}
        description={team.description}
      />
      {/* <MembersList allUsers={allUsers} /> */}
      {/* <TextField label={'текстовое поле'} htmlFor={''} name={'name'} /> */}
    </>
  )
}
