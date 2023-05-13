import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'
import PropTypes from 'prop-types'
import { useLocation, useParams } from 'react-router-dom'
import Button from '../common/button'

const firstConfiguration = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row'
}

const secondConfiguration = {
  width: '100rem',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column'
}

const MembersList = ({ allUsers }) => {
  const [configureList, setConfigureList] = useState(false)
  const [styleList, setStyleList] = useState({})
  const { pathname } = useLocation()
  const keyPage =
    pathname === '/' ? 'mainPageConfigure' : 'favouritePageConfigure'

  const updateState = (value) => {
    setConfigureList(value)
    localStorage.setItem(keyPage, JSON.stringify(value))
  }

  useEffect(() => {
    const storedState = localStorage.getItem(keyPage)
    if (storedState !== null) {
      setConfigureList(JSON.parse(storedState))
    }
  }, [])

  const changeVisual = () => {
    if (!configureList) {
      return firstConfiguration
    } else {
      return secondConfiguration
    }
  }

  useEffect(() => {
    setStyleList(changeVisual())
  }, [configureList])

  return (
    <>
      <Button
        handler={() => updateState(!configureList)}
        buttonName={'Изменить вид списка'}
        className='mb-4'
      />
      <div className='' style={styleList}>
        {allUsers &&
          allUsers.map((member) => {
            return <UserCard key={member.id} {...member} favourites={true} />
          })}
      </div>{' '}
    </>
  )
}

export default MembersList

MembersList.propTypes = {
  allUsers: PropTypes.array
}
