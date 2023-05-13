import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../common/button'

export default function UserCard({
  name,
  age,
  additionalInfo,
  devTask,
  arrSocialMediaLinks,
  img,
  birthday
}) {
  const [favourites, setFavourites] = useState(false)

  const handleFavourite = () => {
    localStorage.setItem(name, !favourites)
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
        width: '25rem',
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
        src={img}
        alt='Card cap'
        style={{
          width: '10rem',
          height: '10rem',
          borderRadius: '50%',
          margin: 'o auto'
        }}
      />
      <div className='card-body'>
        <h5 className='card-title'>{name}</h5>
        <h4 className='card-title'>{`${age} года/лет (потом фу-ю напишу c Date.now())`}</h4>
        <h4 className='card-title'>О себе</h4>
        <p className='card-text'>{additionalInfo}</p>
        <p>В разработке занимаюсь: {devTask}</p>
        <div className='acontainer' style={{ margin: '0 auto' }}>
          {arrSocialMediaLinks.map((obj) => {
            return (
              <a
                href='/'
                className='btn btn-primary'
                style={{ marginLeft: '1rem' }}
                key={obj.name}
              >
                {obj.name}
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}

UserCard.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  additionalInfo: PropTypes.string,
  devTask: PropTypes.string,
  arrSocialMediaLinks: PropTypes.array,
  img: PropTypes.string,
  birthday: PropTypes.string
}
