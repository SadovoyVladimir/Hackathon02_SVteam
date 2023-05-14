import React from 'react'
import UserImageCard from '../ui/userImageCard'
import UserSocialNetworksCard from '../ui/UserSocialNetworksCard'
import UserInfoCard from '../ui/UserInfoCard'
import { getMembers } from '../../store/memberSlice'
import { useParams, Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Breadcrumbs from '../ui/Breadcrumbs'

export default function MemberPage() {
  const { memberId } = useParams()
  const isMemberIdExists = useSelector(getMembers(memberId)).find(
    (m) => m.id === memberId
  )

  const { state } = useLocation()

  return (
    <>
      <h1>Member page</h1>
      <Breadcrumbs
        state={state}
        userName={`${isMemberIdExists.name} ${isMemberIdExists.lastName}`}
      />
      {isMemberIdExists ? (
        <div className='container'>
          <div className='row'>
            <UserImageCard />
            <UserInfoCard />
            <UserSocialNetworksCard />
          </div>
        </div>
      ) : (
        <Navigate to='/' />
      )}
    </>
  )
}
