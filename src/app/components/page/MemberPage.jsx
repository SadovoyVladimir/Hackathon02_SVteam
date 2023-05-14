import React from 'react'
import UserImageCard from '../ui/userImageCard'
import UserSocialNetworksCard from '../ui/UserSocialNetworksCard'
import UserInfoCard from '../ui/UserInfoCard'
import { getMemberById } from '../../store/memberSlice'
import { useParams, Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Breadcrumbs from '../ui/Breadcrumbs'

export default function MemberPage() {
  const { memberId } = useParams()
  const { state } = useLocation()
  const member = useSelector(getMemberById(memberId))

  if (!member) return <Navigate to='/' />

  return (
    <>
      <Breadcrumbs
        state={state}
        userName={`${member.name} ${member.lastName}`}
      />
      <div className='container'>
        <div className='row'>
          <UserImageCard />
          <UserInfoCard />
          <UserSocialNetworksCard />
        </div>
      </div>
    </>
  )
}
