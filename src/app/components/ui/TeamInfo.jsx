import React from 'react'
import PropTypes from 'prop-types'

const TeamInfo = ({ name, img, title, description }) => {
  return (
    <div className='card mb-2' style={{ width: '100%' }}>
      <div className='card-header'>
        <div className='display-6'>
          <h1 className='text-center'>{name}</h1>
        </div>
      </div>
      <img src={img} className='card-img-top' alt='Картинка команды' />
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <div className='card-text'>
          {description.map((paragraph) => (
            <p key={paragraph.id}>{paragraph.content}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

TeamInfo.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.string,
  description: PropTypes.array
}

export default TeamInfo
