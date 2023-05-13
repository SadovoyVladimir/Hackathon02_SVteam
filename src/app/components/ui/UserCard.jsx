import React from 'react'
import PropTypes from 'prop-types'

export default function UserCard({
  name,
  age,
  additionalInfo,
  devTask,
  arrSocialMediaLinks,
  img
}) {
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
        <h4 className='card-title'>{`${age} года/лет`}</h4>
        <h4 className='card-title'>О себе</h4>
        <p className='card-text'>{additionalInfo}</p>
        {/* <p>В разработке занимаюсь: {devTask}</p> */}
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
  img: PropTypes.string
}
