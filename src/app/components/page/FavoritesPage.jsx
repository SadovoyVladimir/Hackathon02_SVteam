import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getMembersIdInLocalStorage } from '../../services/localStorage.service'
import MembersList from '../ui/MembersList'
import { getMembers } from '../../store/memberSlice'

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
        return null
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
          allMembers={sortFavouriteMembers(members)}
          visualConfig={'firstConfig'}
          favouritesMembersCount={favouritesMembers.length}
        />
      ) : (
        <div>
          <h1>Нет избранных</h1>
          <img
            src='https://www.pngmart.com/files/11/Sad-Keanu-Reeves-PNG-Clipart.png'
            alt='Keanu-Reeves-Sad'
            style={{ width: '20rem', height: '13rem' }}
          />
        </div>
      )}
    </>
  )
}
