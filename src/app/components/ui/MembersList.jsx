import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from '../common/button'

const firstConfiguration = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  marginTop: '1rem'
}

const secondConfiguration = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  marginTop: '1rem'
}

const MembersList = ({ allMembers, updateFavourites }) => {
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

  useEffect(() => {
    configureList
      ? setStyleList(secondConfiguration)
      : setStyleList(firstConfiguration)
  }, [configureList])

  // console.log(allMembers)

  return (
    <>
      {allMembers && (
        <Button
          handler={() => updateState(!configureList)}
          buttonName={'Изменить вид списка'}
          className='mb-4'
        />
      )}
      <div className='col-md-12' style={styleList}>
        {allMembers.map((member) => {
          return (
            <UserCard
              updateFavourites={updateFavourites}
              key={member.id}
              {...member}
              configureList={configureList}
            />
          )
        })}
      </div>
    </>
  )
}

export default MembersList

MembersList.propTypes = {
  allMembers: PropTypes.array,
  updateFavourites: PropTypes.func
}
