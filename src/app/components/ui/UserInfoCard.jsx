import React from 'react'
import Badge from '../common/badge'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getMemberById } from '../../store/memberSlice'
import getRandomColor from '../utils/getRandomColor'
import ProgressBar from '../common/progressBar'

const UserInfoCard = () => {
  const { memberId } = useParams()
  const member = useSelector(getMemberById(memberId))
  const features = member.features.split(", ")
  const { skills, about } = member

  return (
        <div className='card'>
            <div className='card-header'>
                <h3>
                    {'Участник команды'}{' '}
                    <b>{member.team}</b>
                </h3>
            </div>
            <div className='card-body'>
                <div className='card-skills mb-2'>
                    <h5>Роль в команде:  <b>{member.role}</b></h5>
                </div>
                <h5>Увлечения: </h5>
                <ul>
                    {about.map(p => (
                        <li key={p.id} className='card-text'>{p.content}</li>
                    ))}
                </ul>
                <div className='card-skills mb-2'>
                    <h5> Основные навыки в профессии разработчика: </h5>
                    <ul>
                        {skills.map(s => (
                            <li key={s.id}>
                                <h5><Badge content={s.name} color={s.color}/></h5>
                                <ProgressBar name='Владение' value={s.value}/>
                                <p></p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='card-skills mb-2'>
                    <h5>
                        {'В проекте разработал следующие компонетны: '}
                        {features.map(feature => (
                            <Badge key={feature} color={getRandomColor()} content={feature}/>
                        ))}
                    </h5>
                </div>
            </div>
        </div>
  )
}

export default UserInfoCard
