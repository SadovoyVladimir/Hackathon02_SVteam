import React from 'react'
import UserImageCard from '../ui/userImageCard'
import UserSocialNetworksCard from '../ui/UserSocialNetworksCard'
import UserInfoCard from '../ui/UserInfoCard'
import { getMemberById, getMembers } from '../../store/memberSlice'
import { useParams, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Breadcrumbs from '../ui/Breadcrumbs'

export default function MemberPage() {
  const { memberId } = useParams()
  const member = useSelector(getMemberById(memberId))
  const isMemberIdExists = useSelector(getMembers()).find(m => m.id === memberId)
  const state = useSelector(getMembers()) // вопросики по этому поводу

  return (
    <>
      <Breadcrumbs state={state} userName={`${member.name} ${member.lastName}`} />
      <h1>Member page</h1>
      {isMemberIdExists
        ? (<div className='container'>
            <div className='row'>
              <UserImageCard />
              <UserInfoCard />
              <UserSocialNetworksCard />
            </div>
          </div>)
        : (<Navigate to='/'/>)}
    </>
  )
}
