import React from 'react'
import PropTypes from 'prop-types'
import Button from '../common/button'
import { useNavigate } from 'react-router-dom'

const Breadcrumbs = ({ userName, state }) => {
  const navigate = useNavigate()
  const redirectTo = (path) => navigate(path)

  return (
    <nav aria-label='breadcrumb'>
      <Button
        buttonName={state === '/' ? 'Main' : 'Favourites'}
        buttonColor='link'
        handler={() => redirectTo(state)}
      />
      {'/'}
      <Button buttonName={userName} buttonColor='link' />
    </nav>
  )
}

export default Breadcrumbs

Breadcrumbs.propTypes = {
  state: PropTypes.string,
  userName: PropTypes.string.isRequired
}
