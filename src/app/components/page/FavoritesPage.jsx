import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getMembersIdInLocalStorage } from '../../services/localStorage.service'
import { getMembers } from '../../store/memberSlice'
import MembersList from '../ui/MembersList'
import EmptyFavouriteList from '../ui/EmptyFavouriteList'

export default function FavoritesPage() {
  const [favouritesMembers, setFavouritesMembers] = useState([])
  const members = useSelector(getMembers())

  useEffect(() => {
    setFavouritesMembers(getMembersIdInLocalStorage())
  }, [])

  function sortFavouriteMembers(arrayAllMembers) {
    let sortedArray = []
    arrayAllMembers.forEach((member) => {
      favouritesMembers.find((id) => {
        if (id === member.id) {
          sortedArray.push(member)
          return member
        }
        return null
      })
    })
    return sortedArray
  }

  const updateFavourites = () => {
    setFavouritesMembers(getMembersIdInLocalStorage())
  }

  return (
    <>
      {favouritesMembers.length > 0 ? (
        <MembersList
          updateFavourites={updateFavourites}
          allMembers={sortFavouriteMembers(members)}
        />
      ) : (
        <EmptyFavouriteList />
      )}
    </>
  )
}
