import React from 'react'
import UserCard from './UserCard'

const MembersList = ({ users }) => {
  const team = {
    id: 'number',
    img: 'URL',
    groupName: 'Group name',
    hackathonTeamName: 'number',
    taskTitle: 'name',
    description: 'description'
  }

  return (
    <div
      className=''
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row'
      }}
    >
      {users.map((member) => {
        return (<UserCard key={member.id} {...member} favourites={true} />)
      })}
    </div>
  )
}

export default MembersList
