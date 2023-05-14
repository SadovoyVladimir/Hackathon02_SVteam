import React from 'react'
import PropTypes from 'prop-types'
import Button from '../common/button'
import { useNavigate } from 'react-router-dom'

const Breadcrumbs = ({ userName, state }) => {
  const navigate = useNavigate()
  const redirectTo = (path) => navigate(path)

  return (
    <nav aria-label='breadcrumb'>
      <ol className='breadcrumb'>
        <li className='breadcrumb-item'>
          <Button
            buttonName={state === '/' ? 'Main' : 'Favourites'}
            buttonColor='link'
            handler={() => redirectTo(state)}
            style={{ marginBottom: '2rem' }}
          />
        </li>
        <li className='breadcrumb-item active' aria-current='page'>
          <Button buttonName={userName} buttonColor='link' />
        </li>
      </ol>
    </nav>
  )
}

export default Breadcrumbs

Breadcrumbs.propTypes = {
  //   pathname: PropTypes.string.isRequired,
  state: PropTypes.string,
  userName: PropTypes.string.isRequired
  //   about: PropTypes.object.isRequired,
}
