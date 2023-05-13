import React from 'react'
import UserCard from './UserCard'

const MembersList = () => {
  const team = {
    id: 'number',
    img: 'URL',
    groupName: 'Group name',
    hackathonTeamName: 'number',
    taskTitle: 'name',
    description: 'description'
  }

  const user1 = {
    id: '1',
    img: 'URL',
    name: 'name',
    lastName: 'last name',
    age: 'number',
    addres: {
      country: 'country',
      city: 'city'
    },
    hackathonTeam: { id: team.id },
    sotialNetworcs: [
      // {id: sotialNetworcs.id} // реализация через отдельную сущность
      { id: 'number', label: 'label', url: 'URL', img: 'URL' }
    ],
    about: {
      id: 'number',
      content: 'text',
      img: 'URL'
    },
    role: 'role in progect',
    features: [{ id: 'number1', label: 'label' }],
    skills: [
      // {id: "skills.id"}, // реализация через отдельную сущность
      { id: 'number', label: 'label' }
    ]
  }

  const user2 = {
    id: '2',
    img: 'URL',
    name: '2',
    lastName: 'last name',
    age: 'number',
    addres: {
      country: 'country',
      city: 'city'
    },
    hackathonTeam: { id: team.id },
    sotialNetworcs: [
      // {id: sotialNetworcs.id} // реализация через отдельную сущность
      { id: 'number2', label: 'label', url: 'URL', img: 'URL' }
    ],
    about: {
      id: 'number',
      content: 'text',
      img: 'URL'
    },
    role: 'role in progect',
    features: [{ id: 'number', label: 'label' }],
    skills: [
      // {id: "skills.id"}, // реализация через отдельную сущность
      { id: 'number', label: 'label' }
    ]
  }

  const user3 = {
    id: '3',
    img: 'URL',
    name: '3',
    lastName: 'last name',
    age: 'number',
    addres: {
      country: 'country',
      city: 'city'
    },
    hackathonTeam: { id: team.id },
    sotialNetworcs: [
      // {id: sotialNetworcs.id} // реализация через отдельную сущность
      { id: 'number3', label: 'label', url: 'URL', img: 'URL' }
    ],
    about: {
      id: 'number',
      content: 'text',
      img: 'URL'
    },
    role: 'role in progect',
    features: [{ id: 'number', label: 'label' }],
    skills: [
      // {id: "skills.id"}, // реализация через отдельную сущность
      { id: 'number', label: 'label' }
    ]
  }

  const arrUsers = [user1, user2, user3]

  return (
    <div
      className=''
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row'
      }}
    >
      {arrUsers.map((member) => {
        return <UserCard key={member.id} {...member} favourites={true} />
      })}
    </div>
  )
}

export default MembersList
