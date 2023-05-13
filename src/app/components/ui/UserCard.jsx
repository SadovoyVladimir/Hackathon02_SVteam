import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../common/button'

export default function UserCard({
  id,
  img,
  name,
  age,
  about,
  sotialNetworcs
}) {
  const [favourites, setFavourites] = useState(true)
  const handleFavourite = () => {
    localStorage.setItem(id, !favourites)
    setFavourites(!favourites)
  }

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
  return (
    <div
      className='card'
      style={{
        width: '20rem',
        alignItems: 'center',
        textAlign: 'center',
        padding: '1rem'
      }}
    >
      <Button
        buttonName={
          favourites ? 'Добавить в избранное' : 'Удалить из избранного'
        }
        handler={handleFavourite}
      />

      <img
        className='card-img-top'
        // src={img}
        alt={img}
        style={{
          width: '10rem',
          height: '10rem',
          borderRadius: '50%',
          margin: 'o auto'
        }}
      />
      <div className='card-body'>
        <h5 className='card-title'>{name}</h5>
        <h4 className='card-title'>{age}</h4>
        <h4 className='card-title'>{about.content}</h4>
        <div className='acontainer' style={{ margin: '0 auto' }}>
          {sotialNetworcs.map((member) => {
            return (
              <span key={member.id}>
                <Button key={member.id} buttonName={member.label} />
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
  about: PropTypes.object.isRequired,
  sotialNetworcs: PropTypes.array.isRequired
}
