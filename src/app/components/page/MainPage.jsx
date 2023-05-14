import React from 'react'
import TeamInfo from '../ui/TeamInfo'
import api from '../../../api'
import MembersList from '../ui/MembersList'
import { useSelector } from 'react-redux'
import { getMembers } from '../../store/memberSlice'

export default function MainPage() {
  const members = useSelector(getMembers())
  const { team } = api

  return (
    <>
      <h1>Main page</h1>
      <div className='col-md-12 justify-content-md-center shadow p-4'>
        <TeamInfo
          name={team.teamName}
          img={team.img}
          title={team.taskTitle}
          description={team.description}
        />
        <MembersList allUsers={members} />
      </div>
    </>
  )
}
