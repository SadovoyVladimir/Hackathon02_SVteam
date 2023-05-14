import React from 'react'
import { useSelector } from 'react-redux'
import api from '../../../api'
import UserImageCard from '../ui/userImageCard'
import UserSocialNetworksCard from '../ui/UserSocialNetworksCard'
import UserInfoCard from '../ui/UserInfoCard'
import { useParams } from 'react-router-dom'
import { getMemberById, getMembers } from '../../store/memberSlice'

export default function MemberPage() {
  const { users } = api
  const { memberId } = useParams()
  const members = useSelector(getMembers())
  const selectedMember = useSelector(getMemberById('aYqow2W2oKwFlwyvuJtMm'))
  console.log('members', members)
  console.log('member', selectedMember)
  const user = users.find(user => user.id === memberId)
  return (
    <>
      <h1>Member page</h1>
      <div className='container'>
        <div className='row'>
          <UserImageCard
            name = {user.name}
            img = {user.img}
            lastName = {user.lastName}
            age = {user.age}
            city = {user.addres.city}
            country = {user.addres.country}
          />
          <UserInfoCard
            id={user.id}
            team={user.hackathonTeam}
            about={user.about}
            skills={user.skills}
            role={user.role}
            features={user.features}
          />
          <UserSocialNetworksCard user={user} />
        </div>
      </div>
    </>
  )
}
