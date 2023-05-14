import React from 'react'
import api from '../../../api'
import UserImageCard from '../ui/userImageCard'
import UserSocialNetworksCard from '../ui/UserSocialNetworksCard'
import UserInfoCard from '../ui/UserInfoCard'

export default function MemberPage() {
  const { users } = api
  const userId = 1
  const user = users.find((user) => user.id === userId)
  return (
    <>
      <h1>Member page</h1>
      <div className='container'>
        <div className='row'>
          <UserImageCard
            name={user.name}
            img={user.img}
            lastName={user.lastName}
            age={user.age}
            city={user.addres.city}
            country={user.addres.country}
          />
          <UserInfoCard
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
