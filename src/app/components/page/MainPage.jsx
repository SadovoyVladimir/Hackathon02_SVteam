import React from 'react'
import TeamInfo from '../ui/TeamInfo'
import api from '../../../api'
import MembersList from '../ui/MembersList'

export default function MainPage() {
  const { team } = api

  return (
    <>
      <h1>Main page</h1>
      <TeamInfo
        name={team.teamName}
        img={team.img}
        title={team.taskTitle}
        description={team.description}
      />
      <MembersList />
    </>
  )
}
