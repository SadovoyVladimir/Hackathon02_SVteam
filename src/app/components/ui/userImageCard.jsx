import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useLocation, useParams, NavLink, Navigate } from 'react-router-dom'

const UserImageCard = ({
    id,
    name,
    img,
    lastName,
    age,
    city,
    country
}) => {
    const { memberId } = useParams()
    const { pathname } = useLocation()
    const [redirect, setRedirect] = useState('') // Пока чато редиректит на main т.к. EditMemberPage не создан
    // <Route path="edit" element={<MemberEditPage />}/>
    const handleClick = () => {
        setRedirect(pathname + '/edit')
    };
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
                {Number(memberId) === id &&
                    <button
                        className="position-absolute top-0 end-0 btn btn-light btn-sm"
                        onClick={handleClick}
                    >
                    <i className="bi bi-gear"></i>
                    {redirect &&
                        <Navigate to={redirect}/>
                    }
                </button>}
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
                    <h4 className='card-title text-dark'>{name}{" "}{lastName}</h4>
                    <h5 className='card-title text-secondary'>{`${age} года/лет`}</h5>
                    <h6 className='card-title text-secondary'>
                        <i className="bi bi-geo-alt p-1"></i>{city}
                    </h6>
                    <h6 className='card-title text-secondary'>{country}</h6>
                </div>
            </div>
        </div>
    );
}

UserImageCard.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    img: PropTypes.string,
    lastName: PropTypes.string,
    age: PropTypes.number,
    city: PropTypes.string,
    country: PropTypes.string
}

export default UserImageCard