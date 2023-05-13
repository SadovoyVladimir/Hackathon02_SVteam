import React from 'react'
import PropTypes from 'prop-types'

const TeamInfo = ({
    name,
    img,
    title,
    description
}) => {
    return (
        <>
            <div className="card mb-2" style={{width: '100%'}}>
                <img src={img} className="card-img-top" alt="Team image"/>
                <div className="card-header">
                    <p className="display-6">{name}</p>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <div className="card-text">{description.map((paragraph) => (
                        <p key={paragraph.id}>{paragraph.content}</p>
                    ))}</div>
                </div>
            </div>
        </>
    );
}

TeamInfo.propTypes = {
    name: PropTypes.string,
    title: PropTypes.string,
    img: PropTypes.string,
    description: PropTypes.array
}
 
export default TeamInfo;