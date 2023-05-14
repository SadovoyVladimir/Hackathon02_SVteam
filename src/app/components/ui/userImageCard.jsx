import React from 'react'
// import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getMemberById } from '../../store/memberSlice'

const UserImageCard = () => {
    const { memberId } = useParams()
    const member = useSelector(getMemberById(memberId))
    
    return (
        <div className="col-4 p-1">
            <div
                className='card'
                style={{
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: '1rem',
                    shadow: "2px"
                }}
            >
                <img
                    className='card-img-top'
                    src={member.img}
                    alt='Card cap'
                    style={{
                    maxWidth: '13rem',
                    borderRadius: '50%',
                    margin: 'auto'
                    }}
                />
                <div className='container'>
                    <h4 className='card-title text-dark'>{member.name}{" "}{member.lastName}</h4>
                    <h5 className='card-title text-secondary'>{`${member.age} года/лет`}</h5>
                    <h6 className='card-title text-secondary'>
                        <i className="bi bi-geo-alt p-1"></i>{member.address.city}
                    </h6>
                    <h6 className='card-title text-secondary'>{member.address.country}</h6>
                </div>
            </div>
        </div>
  )
}

// UserImageCard.propTypes = {
//     name: PropTypes.string,
//     img: PropTypes.string,
//     lastName: PropTypes.string,
//     age: PropTypes.number,
//     city: PropTypes.string,
//     country: PropTypes.string
// }

export default UserImageCard
