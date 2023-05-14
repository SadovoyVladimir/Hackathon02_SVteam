import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../common/button'
import {
  getMembersIdInLocalStorage,
  toggleMemberToLocalStorage
} from '../../services/localStorage.service'
import { useLocation, useNavigate } from 'react-router-dom'

export default function UserCard({
  configureList,
  id,
  img,
  name,
  age,
  updateFavourites,
  socialNetworks
}) {
  const [favourites, setFavourites] = useState(true)
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const handleFavourite = () => {
    toggleMemberToLocalStorage(id)
    setFavourites(!favourites)

    if (updateFavourites) {
      updateFavourites()
    }
  }

  const handleGoToProfile = () => {
    navigate(`/member/${id}`, { state: pathname })
  }

  useEffect(() => {
    const favouritesIds = getMembersIdInLocalStorage('favourites2')
    if (favouritesIds.find((el) => el == id)) {
      setFavourites(false)
    }
  }, [])

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
        <div className='logo-and-button' style={{ display: 'flex' }}>
          <Button
            buttonName={
              favourites ? (
                <i className='bi bi-star'></i>
              ) : (
                <i className='bi bi-star-fill'></i>
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
          <Button
            buttonName={<i className='bi bi-person-fill'></i>}
            buttonColor='dark'
            handler={handleGoToProfile}
          />
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
        textAlign: 'center',
        padding: '1rem',
        display: 'flex'
      }}
    >
      <div
        style={{
          textAlign: 'start',
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Button
          buttonName={
            favourites ? (
              <i className='bi bi-star'></i>
            ) : (
              <i className='bi bi-star-fill'></i>
            )
          }
          buttonColor={favourites ? 'secondary' : 'success'}
          handler={handleFavourite}
        />
        <Button
          buttonName={<i className='bi bi-person-fill'></i>}
          buttonColor='dark'
          handler={handleGoToProfile}
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
  about: PropTypes.array,
  sotialNetworcs: PropTypes.array
}
