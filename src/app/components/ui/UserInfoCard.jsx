import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getMemberById } from '../../store/memberSlice'
import getRandomColor from '../utils/getRandomColor'
import Badge from '../common/badge'

const UserInfoCard = () => {
  const { memberId } = useParams()
  const member = useSelector(getMemberById(memberId))
  const features = member.features.split(', ')

  return (
    <div className='col-8 p-1 mb-2'>
      <div className='card'>
        <div className='card-header'>
          <h3>
            {'Участник команды'} <b>{member.team}</b>
          </h3>
        </div>
        <div className='card-body'>
          {/* {about.map(p => (

                        <p key={p.id} className='card-text'>{p.content}</p>
                    ))} */}
          <div className='card-skills mb-2'>
            <b>Основные навыки: </b>
            {/* {skills.map(s => (
                                <Badge key={s.id} content={s.label} color={s.color}/>
                        ))} */}
          </div>
          <p className='card-skills mb-2'>
            <b>Роль в команде: </b>
            {member.role}
          </p>
          <p className='card-features mb-2'>
            <b>В проекте разработал следующие компонетны: </b>
            {features.map((feature) => (
              <Badge key={feature} color={getRandomColor()} content={feature} />
            ))}
          </p>
        </div>
      </div>
    </div>
  )
}

export default UserInfoCard
