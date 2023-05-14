import React from 'react'
import api from '../../../api'
import UserImageCard from '../ui/userImageCard'
import UserSocialNetworksCard from '../ui/UserSocialNetworksCard'
import UserInfoCard from '../ui/UserInfoCard'
import Breadcrumbs from '../ui/Breadcrumbs'
import { useLocation, useNavigation, useParams } from 'react-router-dom'

export default function MemberPage() {
  const { users } = api
  const { state } = useLocation()

  const userId = 1
  const user = users.find((user) => user.id === userId)
  return (
    <>
      <Breadcrumbs state={state} userName={`${user.name} ${user.lastName}`} />
      <h1>Member page</h1>
      <div className='container'>
        <div className='row'>
          <UserImageCard
            id={user.id}
            name={user.name}
            img={user.img}
            lastName={user.lastName}
            age={user.age}
            city={user.addres.city}
            country={user.addres.country}
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
