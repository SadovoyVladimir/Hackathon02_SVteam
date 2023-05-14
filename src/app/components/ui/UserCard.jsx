import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../common/button'
import {
  getMembersIdInLocalStorage,
  toggleMemberToLocalStorage
} from '../../services/localStorage.service'

export default function UserCard({
  configureList,
  id,
  img,
  name,
  age,
  about,
  socialNetworks
}) {
  const [favourites, setFavourites] = useState(true)
  const handleFavourite = () => {
    toggleMemberToLocalStorage(id)
    setFavourites(!favourites)
  }

  console.log(configureList)

  useEffect(() => {
    const favouritesIds = getMembersIdInLocalStorage('favourites2')
    if (favouritesIds.find((el) => el == id)) {
      setFavourites(false)
    }
  }, [])

  // const ageTransform = (birthday) => {
  //   const now = new Date()
  //   // console.log(now)
  //   const day = now.getDate()
  //   const month = now.getMonth() + 1
  //   const year = now.getFullYear()

  //   console.log(day)
  //   console.log(birthday)
  // }

  // ageTransform(birthday)

  if (configureList) {
    return (
      <div
        className='card'
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: '1rem'
        }}
      >
        <div className='logoAndButton' style={{ display: 'flex' }}>
          <Button
            buttonName={
              favourites ? (
                <i class='bi bi-star-fill'></i>
              ) : (
                <i class='bi bi-star'></i>
              )
            }
            buttonColor={favourites ? 'secondary' : 'success'}
            handler={handleFavourite}
          />
          <img
            src={img}
            alt={img}
            style={{
              width: '10rem',
              height: '10rem',
              borderRadius: '50%',
              margin: '0 auto',
              marginLeft: '1.5rem',
              marginTop: '0.4rem'
            }}
          />
        </div>

        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>
          <h4 className='card-title'>{age}</h4>
          <h4 className='card-title'>{'about.content'}</h4>
          <div className='acontainer' style={{ margin: '0 auto' }}>
            {socialNetworks &&
              socialNetworks.map((link) => {
                return (
                  <span key={link.id}>
                    <Button key={link.id} buttonName={link.label} />
                  </span>
                )
              })}
          </div>
        </div>
      </div>
    )
  }
  return (
    <div
      className='card'
      style={{
        width: '20rem',
        // alignItems: 'center',
        textAlign: 'center',
        padding: '1rem',
        display: 'flex'
      }}
    >
      <div
        style={{
          textAlign: 'start'
        }}
      >
        <Button
          buttonName={
            favourites ? (
              <i class='bi bi-star-fill'></i>
            ) : (
              <i class='bi bi-star'></i>
            )
          }
          buttonColor={favourites ? 'secondary' : 'success'}
          handler={handleFavourite}
        />
      </div>

      <img
        src={img}
        alt={img}
        style={{
          width: '10rem',
          height: '10rem',
          borderRadius: '50%',
          margin: '0 auto'
        }}
      />

      <div className='card-body'>
        <h5 className='card-title'>{name}</h5>
        <h4 className='card-title'>{age}</h4>
        <h4 className='card-title'>{'about.content'}</h4>
        <div className='acontainer' style={{ margin: '0 auto' }}>
          {socialNetworks &&
            socialNetworks.map((link) => {
              return (
                <span key={link.id}>
                  <Button key={link.id} buttonName={link.label} />
                </span>
              )
            })}
        </div>
      </div>
    </div>
  )
}

UserCard.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  about: PropTypes.array.isRequired,
  socialNetworks: PropTypes.array
}
