import React from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import Button from '../common/button'

const Breadcrumbs = ({ memberName, state }) => {
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
      <Button
        buttonName={memberName}
        buttonColor='link'
        additionalClasses={'disabled'}
      />
    </nav>
  )
}

export default Breadcrumbs

Breadcrumbs.propTypes = {
  state: PropTypes.string.isRequired,
  memberName: PropTypes.string.isRequired
}
