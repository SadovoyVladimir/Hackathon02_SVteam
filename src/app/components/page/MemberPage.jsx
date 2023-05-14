import React from 'react'
import UserImageCard from '../ui/userImageCard'
import UserSocialNetworksCard from '../ui/UserSocialNetworksCard'
import UserInfoCard from '../ui/UserInfoCard'
import { getMemberById, getMembers } from '../../store/memberSlice'
import { useParams, Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Breadcrumbs from '../ui/Breadcrumbs'

export default function MemberPage() {
  const { memberId } = useParams()
  const member = useSelector(getMemberById(memberId))
  const isMemberIdExists = useSelector(getMembers()).find(m => m.id === memberId)
  const { state } = useLocation()

  return (
    <>
      <Breadcrumbs state={state} userName={`${member.name} ${member.lastName}`} />
      <h1>Member page</h1>
      {isMemberIdExists
        ? (<div className='container'>
            <div className='row gutters-sm'>
              <div className="col-4 p-1 mb-2">
                <UserImageCard />
                <UserSocialNetworksCard />
              </div>
              <div className='col-md-8 p-1 mb-2'>
                <UserInfoCard />
              </div>
            </div>
          </div>)
        : (<Navigate to='/'/>)}
    </>
  )
}
