import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../common/button'

export default function UserCard({ ...member }) {
  const [favourites, setFavourites] = useState(true)

  const handleFavourite = () => {
    localStorage.setItem(member.name, !favourites)
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
        alt={member.img}
        style={{
          width: '10rem',
          height: '10rem',
          borderRadius: '50%',
          margin: 'o auto'
        }}
      />
      <div className='card-body'>
        <h5 className='card-title'>{member.name}</h5>
        <h4 className='card-title'>{`${member.age} года/лет`}</h4>
        <h4 className='card-title'>{member.about.content}</h4>
        <div className='acontainer' style={{ margin: '0 auto' }}>
          {member.sotialNetworcs.map((member) => {
            return (
              <span>
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
  name: PropTypes.string,
  age: PropTypes.string,
  additionalInfo: PropTypes.string,
  devTask: PropTypes.string,
  arrSocialMediaLinks: PropTypes.array,
  img: PropTypes.string,
  birthday: PropTypes.string
}
