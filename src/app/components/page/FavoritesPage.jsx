import React, { useEffect, useState } from 'react'
import { getMembersIdInLocalStorage } from '../../services/localStorage.service'
import MembersList from '../ui/MembersList'

export default function FavoritesPage() {
  const [favouritesMembers, setFavouritesMembers] = useState([])

  useEffect(() => {
    setFavouritesMembers(getMembersIdInLocalStorage('favourites2'))
  }, [])

  const team2 = {
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
    hackathonTeam: { id: team2.id },
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
    hackathonTeam: { id: team2.id },
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
    hackathonTeam: { id: team2.id },
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

  const allUsers = [user1, user2, user3]

  function sortFavouriteMembers(arrayAllMembers) {
    let sortedArray = []
    arrayAllMembers.forEach((member) => {
      favouritesMembers.find((id) => {
        if (id === member.id) {
          sortedArray.push(member)
          return member
        }
      })
    })
    return sortedArray
  }

  return (
    <>
      {favouritesMembers.length > 0 ? (
        <MembersList
          allUsers={sortFavouriteMembers(allUsers)}
          visualConfig={'firstConfig'}
        />
      ) : (
        <h1>Нет избранных</h1>
      )}
    </>
  )
}
