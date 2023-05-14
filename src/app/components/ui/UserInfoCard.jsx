import React from 'react'
import PropTypes from 'prop-types'
import Badge from '../common/badge'

const UserInfoCard = ({ id, about, skills, team, role, features }) => {
  return (
    <>
      <div className='col-8 p-1 mb-2'>
        <div className='card'>
          <div className='card-header'>
            <h3>
              {'Участник команды'} <b>{team}</b>
            </h3>
          </div>
          <div className='card-body'>
            {about.map((p) => (
              <p key={p.id} className='card-text'>
                {p.content}
              </p>
            ))}
            <div className='card-skills mb-2'>
              <b>Основные навыки: </b>
              {skills.map((s) => (
                <Badge key={s.id} content={s.label} color={s.color} />
              ))}
            </div>
            <p className='card-skills mb-2'>
              <b>Роль в команде: </b>
              {role}
            </p>
            <p className='card-features mb-2'>
              <b>В проекте разработал следующие компонетны: </b>
              {features.map((f) => (
                <Badge key={f.id} color='info' content={f.label} />
              ))}
            </p>
          </div>
        </div>
      </div>
      <div className='card-body'>
        {about.map((p) => (
          <p key={p.id} className='card-text'>
            {p.content}
          </p>
        ))}
        <div className='card-skills mb-2'>
          <b>Основные навыки: </b>
          {skills.map((s) => (
            <Badge key={s.id} content={s.label} />
          ))}
        </div>
        <p className='card-skills mb-2'>
          <b>Роль в команде: </b>
          {role}
        </p>
        <p className='card-features mb-2'>
          <b>В проекте разработал следующие компонетны: </b>
          {features.map((f) => (
            <Badge key={f.id} color='info' content={f.label} />
          ))}
        </p>
      </div>
    </>
  )
}

UserInfoCard.propTypes = {
  id: PropTypes.string,
  about: PropTypes.array,
  skills: PropTypes.array,
  team: PropTypes.string,
  role: PropTypes.string,
  features: PropTypes.array
}

export default UserInfoCard
