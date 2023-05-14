import React from 'react'
import { useParams, Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getMemberById } from '../../store/memberSlice'
import MemberImageCard from '../ui/memberImageCard'
import MemberSocialNetworksCard from '../ui/MemberSocialNetworksCard'
import MemberInfoCard from '../ui/MemberInfoCard'
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
        memberName={`${member.name} ${member.lastName}`}
      />
      <div className='container'>
        <div className='row gutters-sm'>
          <div className='col-4 p-1 mb-2'>
            <MemberImageCard />
            <MemberSocialNetworksCard />
          </div>
          <div className='col-md-8 p-1 mb-2'>
            <MemberInfoCard />
          </div>
        </div>
      </div>
    </>
  )
}
