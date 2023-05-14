import React, { useEffect, useState } from 'react'
import { getMembersIdInLocalStorage } from '../../services/localStorage.service'
import MembersList from '../ui/MembersList'
import { getMembers } from '../../store/memberSlice'
import { useSelector } from 'react-redux'

export default function FavoritesPage() {
  const [favouritesMembers, setFavouritesMembers] = useState([])
  const members = useSelector(getMembers())

  useEffect(() => {
    setFavouritesMembers(getMembersIdInLocalStorage('favourites2'))
  }, [])

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

  const updateFavourites = () => {
    setFavouritesMembers(getMembersIdInLocalStorage('favourites2'))
  }

  return (
    <>
      {favouritesMembers.length > 0 ? (
        <MembersList
          updateFavourites={updateFavourites}
          allUsers={sortFavouriteMembers(members)}
          visualConfig={'firstConfig'}
        />
      ) : (
        <h1>Нет избранных</h1>
      )}
    </>
  )
}
