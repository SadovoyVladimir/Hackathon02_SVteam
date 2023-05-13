import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'

const UserImageCard = ({
    id,
    name,
    img,
    lastName,
    age,
    city,
    country
}) => {
    const currentUserId = 1 // затычка. Нужно получать это значение динамически:
    // const currentUserId = useSelector(getCurrentUserId());
    const location = useLocation()
    const handleClick = () => {
        const redirect = location.pathname + '/edit'
        console.log(redirect)
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
                {currentUserId === id &&
                    <button
                        className="position-absolute top-0 end-0 btn btn-light btn-sm"
                        onClick={handleClick}
                    >
                    <i className="bi bi-gear"></i>
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