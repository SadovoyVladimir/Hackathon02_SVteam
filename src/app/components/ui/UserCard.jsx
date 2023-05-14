import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useLocation, useNavigate } from 'react-router-dom'
import Button from '../common/button'
import {
  getMembersIdInLocalStorage,
  toggleMemberToLocalStorage
} from '../../services/localStorage.service'
import Badge from '../common/badge'
import '../../../../src/index.css'
import { setBadgeColor } from '../utils/getJobTitleColor'

export default function UserCard({
  configureList,
  id,
  img,
  name,
  lastName,
  age,
  updateFavourites,
  linksToSocialNetworks,
  role
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

  const handleGoToProfile = () => navigate(`/member/${id}`, { state: pathname })

  const handleGoToLink = (url) => window.open(url, '_blank')

  useEffect(() => {
    const favouritesIds = getMembersIdInLocalStorage('favourites2')
    if (favouritesIds.find((el) => el === id)) {
      setFavourites(false)
    }
  }, [id])

  if (configureList) {
    return (
      <div
        className='card'
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: '0.33rem'
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
          <div className='img-badge'>
            <img
              src={img}
              alt={img}
              style={{
                width: '10rem',
                height: '10rem',
                borderRadius: '50%',
                marginLeft: '2.5rem',
                alignSelf: 'center',
                boxShadow: '2px 2px 2px #F4AAB9',
                margin: '1rem 2rem'
              }}
            />
            <h5
              className='card-title'
              style={{ textAlign: 'center', marginLeft: '1rem' }}
            >
              <Badge
                content={role}
                color={setBadgeColor(role)}
                style={{ width: '8rem' }}
              />
            </h5>
          </div>
        </div>

        <div className='card-body'>
          <div
            className='button-wrapper'
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignSelf: 'center'
            }}
          >
            <h3 className='card-title'>{`${name} ${lastName}`}</h3>
            <Button
              buttonName={<i className='bi bi-person-fill'></i>}
              buttonColor='dark'
              handler={handleGoToProfile}
              style={{ width: '3rem', marginLeft: '1rem', marginBottom: '1px' }}
            />
          </div>

          <h4 className='card-title'>Возраст: {age}</h4>

          <div
            className='acontainer'
            style={{
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'row',
              marginLeft: '-1rem'
            }}
          >
            {linksToSocialNetworks?.map((link) => {
              if (link.name) {
                return (
                  <span key={link.id} style={{}}>
                    <Button
                      key={link.id}
                      buttonName={link.name}
                      buttonColor='dark'
                      handler={() => handleGoToLink(link.url)}
                      style={{ minWidth: '5rem', marginLeft: '1rem' }}
                    />
                  </span>
                )
              }
              return null
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
        marginLeft: '3px',
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
          buttonColor={favourites ? 'outline-secondary' : 'success'}
          handler={handleFavourite}
        />
        <Button
          buttonName={<i className='bi bi-person-fill'></i>}
          buttonColor='dark'
          handler={handleGoToProfile}
        />
      </div>

      <div className='img-logo'>
        <img
          src={img}
          alt={img}
          style={{
            width: '10rem',
            height: '10rem',
            borderRadius: '50%',
            margin: '0 auto',
            boxShadow: '2px 2px 2px #F4AAB9'
          }}
        />
      </div>

      <div className='card-body'>
        <h3 className='card-title'>
          {name}
          <br /> {lastName}
        </h3>
        <h5 className='card-title'>Возраст: {age}</h5>
        <h5 className='card-title'>
          <Badge
            content={role}
            color={setBadgeColor(role)}
            style={{ width: '8rem' }}
          />
        </h5>
        <div className='acontainer' style={{ margin: '0 auto' }}>
          {linksToSocialNetworks?.map((link) => {
            if (link.name) {
              return (
                <div
                  key={link.id}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: '0.33rem'
                  }}
                >
                  <Button
                    buttonColor='dark'
                    key={link.id}
                    buttonName={link.name}
                    handler={() => handleGoToLink(link.url)}
                  />
                </div>
              )
            }
            return null
          })}
        </div>
      </div>
    </div>
  )
}

UserCard.propTypes = {
  configureList: PropTypes.bool,
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  updateFavourites: PropTypes.func,
  linksToSocialNetworks: PropTypes.array,
  role: PropTypes.string.isRequired
}
