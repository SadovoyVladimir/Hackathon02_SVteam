import React from 'react'
import PropTypes from 'prop-types'

const UserSocialNetworksCard = ({ user }) => {
    return (
        <div className="col-4 p-1 mb-2">
            <div className='card'>
                <div className='acontainer p-1' style={{ margin: '0 auto' }}>
                {user.socialNetworks.map((link) => 
                    (<span key={link.id}>
                        <img
                        className='card-img-top p-1'
                        src={link.img}
                        alt='Card cap'
                        style={{
                            maxWidth: '3rem',
                            borderRadius: '50%',
                            margin: 'auto'
                        }}
                        />
                        <a className='figure-caption text-end' href="">{link.label}</a>
                    </span>)
                )}
                </div>
            </div>
        </div>
        
    );
}

UserSocialNetworksCard.propTypes = {
    user: PropTypes.object
}
 
export default UserSocialNetworksCard;
