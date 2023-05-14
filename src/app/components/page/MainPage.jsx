import React from 'react'
import { useSelector } from 'react-redux'
import { getMembers } from '../../store/memberSlice'
import api from '../../../api'
import TeamInfo from '../ui/TeamInfo'
import MembersList from '../ui/MembersList'

export default function MainPage() {
  const members = useSelector(getMembers())
  const { team } = api

  return (
    <div className='row justify-content-md-center'>
      <div className='col-md-8 p-2'>
        <TeamInfo {...team} />
        <MembersList allMembers={members} />
      </div>
    </div>
  )
}
