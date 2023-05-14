import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getMemberById } from '../../store/memberSlice'

const UserSocialNetworksCard = () => {
  const { memberId } = useParams()
  const member = useSelector(getMemberById(memberId))

  return (
    <div className='card p-1 mb-2'>
      <div className='acontainer p-1' style={{ margin: '0 auto' }}>
        {member.linksToSocialNetworks.map((link) => (
          <span key={link.id}>
            <img
              className='card-img-top p-1'
              src={link.img}
              alt='Card cap'
              style={{
                maxWidth: '3rem',
                maxHigth: '3rem',
                borderRadius: '50%',
                margin: 'auto'
              }}
            />
            <a className='figure-caption text-end' href={link.url}>
              {link.name}
            </a>
          </span>
        ))}
      </div>
    </div>
  )
}

export default UserSocialNetworksCard
