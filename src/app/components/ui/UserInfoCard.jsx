import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getMemberById } from '../../store/memberSlice'
import getRandomColor from '../utils/getRandomColor'
import ProgressBar from '../common/progressBar'
import Badge from '../common/badge'

const UserInfoCard = () => {
  const { memberId } = useParams()
  const member = useSelector(getMemberById(memberId))
  const features = member.features.split(', ')
  const { skills, about } = member

  return (
    <div className='card'>
      <div className='card-header'>
        <h3>
          {'Участник команды'} <b>{member.team}</b>
        </h3>
      </div>
      <div className='card-body'>
        <div className='card-skills mb-2'>
          <h5>Роль в команде: </h5>
          <h3>
            <Badge content={member.role} color='danger' />
          </h3>
        </div>
        <h5>Увлечения: </h5>
        <ul>
          {about.map((p) => (
            <li key={p.id} className='card-text'>
              {p.content}
            </li>
          ))}
        </ul>
        <div className='card-skills mb-2'>
          <h5> Основные навыки в профессии разработчика: </h5>
          <ul>
            {skills.map((s) => (
              <li key={s.id}>
                <h5>
                  <Badge content={s.name} color={getRandomColor()} />
                </h5>
                <ProgressBar name='Владение' color='primary' value={s.value} />
                <p></p>
              </li>
            ))}
          </ul>
        </div>
        <div className='card-skills mb-2'>
          <h5>В проекте разработал следующие компонетны:</h5>
          <ul>
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default UserInfoCard
