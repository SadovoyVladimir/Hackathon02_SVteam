import React from 'react'
import PropTypes from 'prop-types'

const UserImageCard = ({ name, img, lastName, age, city, country }) => {
  return (
    <div className='col-4 p-1'>
      <div
        className='card'
        style={{
          alignItems: 'center',
          textAlign: 'center',
          padding: '1rem',
          shadow: '2px'
        }}
      >
        <img
          className='card-img-top'
          src={img}
          alt='Card cap'
          style={{
            maxWidth: '13rem',
            borderRadius: '50%',
            margin: 'auto'
          }}
        />
        <div className='container'>
          <h4 className='card-title text-dark'>
            {name} {lastName}
          </h4>
          <h5 className='card-title text-secondary'>{`${age} года/лет`}</h5>
          <h6 className='card-title text-secondary'>
            <i className='bi bi-geo'></i>
            {city}
          </h6>
          <h6 className='card-title text-secondary'>{country}</h6>
        </div>
      </div>
    </div>
  )
}

UserImageCard.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  lastName: PropTypes.string,
  age: PropTypes.number,
  city: PropTypes.string,
  country: PropTypes.string
}

export default UserImageCard
